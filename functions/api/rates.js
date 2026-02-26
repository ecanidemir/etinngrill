export async function onRequest(context) {
    try {
        const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error("TCMB bağlantı hatası");
        const xmlText = await response.text();

        const findRate = (code, preferredTags) => {
            for (let tag of preferredTags) {
                const regex = new RegExp(`<Currency[^>]*?CurrencyCode="${code}"[\\s\\S]*?<${tag}>([\\d\\.,]+)<\\/${tag}>`, 'i');
                const match = xmlText.match(regex);
                if (match && match[1]) {
                    return parseFloat(match[1].replace(',', '.'));
                }
            }
            return null;
        };

        const rates = {
            // USD ve EUR için önce Efektif Satış, yoksa Döviz Satış
            USD: findRate('USD', ['BanknoteSelling', 'ForexSelling']),
            EUR: findRate('EUR', ['BanknoteSelling', 'ForexSelling']),
            // SDR için XML'de kod XDR'dir ve genelde sadece ForexBuying doludur
            SDR: findRate('XDR', ['ForexBuying', 'ForexSelling', 'BanknoteSelling']),
            Tarih: xmlText.match(/Tarih_Date[^>]*Tarih="([^"]+)"/)?.[1] || new Date().toLocaleDateString('tr-TR')
        };

        return new Response(JSON.stringify(rates), {
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8',
                'Cache-Control': 'public, max-age=3600' 
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
