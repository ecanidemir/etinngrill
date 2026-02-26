export async function onRequest(context) {
    try {
        const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error("TCMB bağlantı hatası");

        const xmlText = await response.text();

        // Daha esnek Regex (Boşluklara ve büyük/küçük harfe daha dayanıklı)
        const findRate = (code, type) => {
            const regex = new RegExp(`<Currency[^>]*?CurrencyCode="${code}"[\\s\\S]*?<${type}>([\\d\\.,]+)<\\/${type}>`, 'i');
            const match = xmlText.match(regex);
            return match ? parseFloat(match[1].replace(',', '.')) : null;
        };

        const rates = {
            USD: findRate('USD', 'BanknoteSelling'),
            EUR: findRate('EUR', 'BanknoteSelling'),
            SDR: findRate('SDR', 'ForexSelling'), // SDR genellikle ForexSelling olarak yayınlanır
            Tarih: xmlText.match(/Tarih_Date[^>]*Tarih="([^"]+)"/)?.[1] || new Date().toLocaleDateString('tr-TR')
        };

        // Eğer kurlardan biri bile eksikse hata fırlat ki fallback (sabit kur) devreye girsin
        if (!rates.USD || !rates.EUR || !rates.SDR) {
            console.error("Bazı kurlar çekilemedi:", rates);
            throw new Error("Eksik veri");
        }

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
