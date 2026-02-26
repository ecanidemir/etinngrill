export async function onRequest(context) {
    const targetUrl = 'https://www.tcmb.gov.tr/kurlar/today.xml';
    
    try {
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
            }
        });

        // TCMB'nin verdiği gerçek yanıtı dönelim
        return new Response(JSON.stringify({
            durum: response.ok ? "BAŞARILI" : "HATA",
            http_kodu: response.status,
            mesaj: response.statusText,
            hedef: targetUrl
        }), { 
            headers: { 'Content-Type': 'application/json;charset=UTF-8' } 
        });

    } catch (error) {
        return new Response(JSON.stringify({
            durum: "BAĞLANTI_HATASI",
            hata: error.message
        }), { headers: { 'Content-Type': 'application/json' } });
    }
}
