export async function onRequest(context) {
    try {
        const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error("TCMB bağlantı hatası");
        const xmlText = await response.text();

        const findRate = (code) => {
            // Önce Efektif Satış'a bak, yoksa Döviz Satışı'na bak (SDR için gerekli)
            const banknoteRegex = new RegExp(`<Currency[^>]*?CurrencyCode="${code}"[\\s\\S]*?<BanknoteSelling>([\\d\\.,]+)<\\/BanknoteSelling>`, 'i');
            const forexRegex = new RegExp(`<Currency[^>]*?CurrencyCode="${code}"[\\s\\S]*?<ForexSelling>([\\d\\.,]+)<\\/ForexSelling>`, 'i');
            
            const match = xmlText.match(banknoteRegex) || xmlText.match(forexRegex);
            return match ? parseFloat(match[1].replace(',', '.')) : null;
        };

        const rates = {
            USD: findRate('USD'),
            EUR: findRate('EUR'),
            SDR: findRate('SDR'),
            Tarih: xmlText.match(/Tarih_Date[^>]*Tarih="([^"]+)"/)?.[1] || new Date().toLocaleDateString('tr-TR')
        };

        return new Response(JSON.stringify(rates), {
            headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
