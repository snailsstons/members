export default {
  async fetch(request, env) {
    // Dieser Teil holt deine Seite zurück!
    const html = `
    <!DOCTYPE html>
    <html>
      <head><title>SnailsStons Members</title></head>
      <body>
        <h1>Die Seite ist zurück!</h1>
        <p>Und die Datenbank (KV) ist im Hintergrund aktiv.</p>
      </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
