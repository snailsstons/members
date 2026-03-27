export interface Env {
	SNAILS_KV: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		// 1. DATEN SPEICHERN (z.B. /put?name=Felix&status=Pionier)
		if (url.pathname === "/put") {
			const name = url.searchParams.get("name");
			const status = url.searchParams.get("status");
			
			if (name && status) {
				await env.SNAILS_KV.put(name, status);
				return new Response(`Check! ${name} wurde als ${status} gespeichert.`, {
					headers: { "Access-Control-Allow-Origin": "*" }
				});
			}
			return new Response("Fehler: Name oder Status fehlt im Link.");
		}

		// 2. DATEN ABFRAGEN (z.B. /get?name=Felix)
		if (url.pathname === "/get") {
			const name = url.searchParams.get("name");
			if (name) {
				const value = await env.SNAILS_KV.get(name);
				return new Response(value || "Kein Eintrag gefunden.", {
					headers: { "Access-Control-Allow-Origin": "*" }
				});
			}
		}

		// Standard-Antwort
		return new Response("SnailsStons Member-System aktiv. Nutze /put oder /get");
	},
  
};
