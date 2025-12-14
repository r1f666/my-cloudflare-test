document.addEventListener('DOMContentLoaded', function() {
    // Обновляем информацию
    document.getElementById('currentTime').textContent = new Date().toLocaleString('ru-RU');
    document.getElementById('userAgent').textContent = navigator.userAgent;

    // Тестовая кнопка
    document.getElementById('testBtn').addEventListener('click', function() {
        const result = document.getElementById('result');
        const emojis = ['🚀', '🔥', '⚡', '💥', '🎯', '✨'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        result.innerHTML = `
            ${randomEmoji} Кнопка нажата! ${randomEmoji}<br>
            <small>Время: ${new Date().toLocaleTimeString('ru-RU')}</small><br>
            <small>Рандомное число: ${Math.floor(Math.random() * 1000)}</small>
        `;

        // Анимация
        result.style.transform = 'scale(1.05)';
        setTimeout(() => {
            result.style.transform = 'scale(1)';
        }, 200);
    });

    // Кнопка API
    document.getElementById('apiBtn').addEventListener('click', async function() {
        const apiResult = document.getElementById('apiResult');
        const btn = this;

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загружаем...';
        apiResult.textContent = 'Запрос к API...';

        try {
            // Пробуем разные эндпоинты
            const endpoints = [
                '/api/test',
                'https://api.github.com/zen',
                'https://jsonplaceholder.typicode.com/todos/1'
            ];

            let response;
            let usedEndpoint = '';

            // Пробуем первый endpoint (наш Worker)
            try {
                response = await fetch('/api/test');
                usedEndpoint = 'Наш Worker API';
            } catch {
                // Если нет Worker, пробуем публичные API
                const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
                response = await fetch(randomEndpoint);
                usedEndpoint = 'Публичное API: ' + randomEndpoint;
            }

            const data = await response.json();

            apiResult.innerHTML = `
${usedEndpoint}

Ответ (${response.status}):
${JSON.stringify(data, null, 2)}

Время запроса: ${new Date().toLocaleTimeString('ru-RU')}
            `;

        } catch (error) {
            apiResult.textContent = `Ошибка: ${error.message}\n\n(Это нормально если Worker ещё не настроен)`;
        } finally {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-database"></i> Вызвать Worker API';
        }
    });

    // Обновляем время каждую минуту
    setInterval(() => {
        document.getElementById('currentTime').textContent = new Date().toLocaleString('ru-RU');
    }, 60000);
});