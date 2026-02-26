export async function onRequest(context) {
    try {
        // Cloudflare sunucusu Merkez Bankasına bağlanır (CORS engeline takılmaz)
        const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
        const xmlText = await response.text();

        // XML'den verileri Regex ile güvenli bir şekilde çekiyoruz
        const usdMatch = xmlText.match(/CurrencyCode="USD"[\s\S]*?<BanknoteSelling>([\d\.]+)/);
        const eurMatch = xmlText.match(/CurrencyCode="EUR"[\s\S]*?<BanknoteSelling>([\d\.]+)/);
        // Not: SDR için efektif satış (Banknote) yoktur, döviz satışı (Forex) vardır
        const sdrMatch = xmlText.match(/CurrencyCode="SDR"[\s\S]*?<ForexSelling>([\d\.]+)/);
        const dateMatch = xmlText.match(/Tarih_Date[^>]*Tarih="([^"]+)"/);

        const rates = {
            USD: usdMatch ? parseFloat(usdMatch[1]) : null,
            EUR: eurMatch ? parseFloat(eurMatch[1]) : null,
            SDR: sdrMatch ? parseFloat(sdrMatch[1]) : null,
            Tarih: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0]
        };

        return new Response(JSON.stringify(rates), {
            headers: {
                'Content-Type': 'application/json',
                // Kurları 1 saat (3600 saniye) boyunca Cloudflare sunucularında önbellekte tut (Hızı inanılmaz artırır)
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Kurlar çekilemedi", details: error.message }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
