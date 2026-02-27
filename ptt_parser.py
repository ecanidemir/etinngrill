import requests
from bs4 import BeautifulSoup
import pdfplumber
import io
import json
import re
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def get_current_pdf_url():
    base_url = "https://www.ptt.gov.tr/tarifeler"
    try:
        response = requests.get(base_url, timeout=15, verify=False)
        soup = BeautifulSoup(response.text, 'html.parser')
        for link in soup.find_all('a', href=True):
            if "Yurt_Disi_ucret_Tarifeleri.pdf" in link['href']:
                url = link['href']
                return url if url.startswith('http') else "https://www.ptt.gov.tr" + url
    except:
        pass
    return None

def parse_ptt_final(pdf_url):
    print(f"Sadece Ağırlık (20G-2000G) mantığıyla veriler işleniyor: {pdf_url}")
    response = requests.get(pdf_url, verify=False)
    fiyatlar = {}
    
    # İstenmeyen kelimeleri temizleme filtresi
    blacklist = ["YURT", "TARİFE", "ÜLKE", "PTT", "SDR", "KAYIT", "KOLİ", "NOT:", "MEKTUP"]

    def to_float(val):
        if not val: return None
        v = str(val).replace(',', '.').strip()
        if re.match(r"^\d+(\.\d+)?$", v):
            return float(v)
        return None

    with pdfplumber.open(io.BytesIO(response.content)) as pdf:
        # Ağırlık bloğu için hafıza değişkenleri
        in_country_block = False
        name_parts = []
        temp_prices = None
        
        for page in pdf.pages:
            table = page.extract_table({"vertical_strategy": "lines", "horizontal_strategy": "lines"})
            if not table: continue

            for row in table:
                r = [str(c).replace('\n', ' ').strip() if c else "" for c in row]
                if len(r) < 12: continue

                col_country = r[0].upper()
                col_weight = r[1].upper().replace(" ", "") # "20G", "250G", "2000G"

                # KURAL 1: Yeni Blok Başlangıcı (20 G)
                if col_weight == "20G":
                    in_country_block = True
                    name_parts = []
                    temp_prices = None
                
                if in_country_block:
                    # KURAL 2: İsim parçalarını biriktir
                    if col_country and not any(b in col_country for b in blacklist):
                        if not re.match(r"^\d+\s*G$", col_country):
                            name_parts.append(col_country)
                    
                    # KURAL 3: Fiyatları Yakala
                    y_i = to_float(r[8])
                    u_i = to_float(r[10])
                    
                    if y_i or u_i:
                        y_e = to_float(r[9])
                        u_e = to_float(r[11])
                        temp_prices = {
                            "yuzey": {"ilk": y_i, "ek": y_e} if y_i else None,
                            "ucak": {"ilk": u_i, "ek": u_e} if u_i else None
                        }

                    # KURAL 4: Blok Bitişi (2000 G) ve JSON'a Kayıt
                    if col_weight == "2000G":
                        in_country_block = False # Bloğu kapat
                        
                        if temp_prices: # Fiyat bulabildiysek kaydet
                            # Toplanan kelimeleri birleştir ve fazla boşlukları temizle
                            raw_name = " ".join(name_parts)
                            final_name = re.sub(r'\s+', ' ', raw_name).strip()
                            
                            if final_name:
                                fiyatlar[final_name] = temp_prices
                    
    return fiyatlar

if __name__ == "__main__":
    pdf_url = get_current_pdf_url() or "https://pttwebdosya.ptt.gov.tr/api/file/getFile?FileName=a323b5de-2e4c-4e68-a9bf-312b37b0e1f7*Yurt_Disi_ucret_Tarifeleri.pdf"
    
    if pdf_url:
        data = parse_ptt_final(pdf_url)
        with open("ulkeFiyatlari.json", "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"İşlem tamam! Toplam {len(data)} ülke kaydedildi.")
    else:
        print("PDF bağlantısı kurulamadı.")