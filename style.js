* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #333;
    min-height: 100vh;
    padding: 20px;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 40px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 3px solid #667eea;
}

h1 {
    color: #667eea;
    font-size: 2.8rem;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 1.2rem;
    font-weight: 300;
}

main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.card {
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #eaeaea;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.card h2 {
    color: #764ba2;
    margin-bottom: 15px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.card p {
    margin-bottom: 15px;
    color: #555;
}

.card ul {
    list-style: none;
    padding-left: 0;
}

.card li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    color: #555;
}

.card li:last-child {
    border-bottom: none;
}

.btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
}

.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

#result {
    margin-top: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #667eea;
}

#apiResult {
    margin-top: 15px;
    padding: 15px;
    background: #1a1a1a;
    color: #00ff9d;
    border-radius: 10px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    overflow-x: auto;
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
}

footer {
    text-align: center;
    padding: 30px 0 0;
    border-top: 2px solid #eee;
    color: #777;
    font-size: 0.9rem;
}

/* Адаптивность */
@media (max-width: 768px) {
.container {
        padding: 20px;
    }

    h1 {
        font-size: 2rem;
    }

    main {
        grid-template-columns: 1fr;
    }
}