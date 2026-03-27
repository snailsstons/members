export interface Env {
  SNAILS_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. API: Daten speichern
    if (url.pathname === "/put") {
      const name = url.searchParams.get("name");
      const status = url.searchParams.get("status");
      if (name && status) {
        await env.SNAILS_KV.put(name, status);
        return new Response(`Gespeichert: ${name}`, { headers: { "Access-Control-Allow-Origin": "*" } });
      }
    }

    // 2. WEBSEITE: Deine HTML-Datei von GitHub anzeigen
    // Wir holen uns die Datei einfach direkt aus deinem Repository
    const githubUrl = "https://raw.githubusercontent.com/DEIN_NUTZERNAME/members/main/members.html"; 
    // Ersetze DEIN_NUTZERNAME durch deinen echten GitHub-Namen!

    const response = await fetch(githubUrl);
    const html = await response.text();

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  },
};
