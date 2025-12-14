export async function onRequest(context) {
    const data = {
        message: "Привет из Cloudflare Worker! 🚀",
        timestamp: new Date().toISOString(),
        location: "Работает на edge сети Cloudflare",
        features: [
            "Бесплатно",
            "Быстро",
            "Масштабируемо",
            "Глобально"
        ],
        randomNumber: Math.floor(Math.random() * 1000)
    };

    return new Response(JSON.stringify(data, null, 2), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}