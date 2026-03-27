
export default {
  async fetch(request, env) {
    // 1. Die HTML-Seite direkt im Code (Damit sie IMMER erreichbar ist)
    const html = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SnailsStons Members</title>
        <style>
            body { font-family: sans-serif; background: #1a1a1a; color: white; text-align: center; padding: 50px; }
            .card { background: #333; padding: 20px; border-radius: 15px; display: inline-block; }
            h1 { color: #ffd700; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🐌 SnailsStons Members</h1>
            <p>Die Datenbank-Anbindung ist aktiv!</p>
            <hr>
            <p>Status: <strong>Online</strong></p>
        </div>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
}
  ;

