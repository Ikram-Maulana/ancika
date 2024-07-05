import { Context } from "hono";

export async function getScript(
  c: Context,
  corsHeaders: Record<string, string>
) {
  const umamiUrl = c.get("umamiUrl");
  const endpointName = c.get("endpointName");
  let response = await caches.default.match(c.req.raw);

  if (!response) {
    response = await fetch(`${umamiUrl}/script.js`);
    let js = await response.text();

    js = js.replace("/api/send", endpointName);
    response = new Response(js, {
      headers: {
        ...response.headers,
        ...corsHeaders,
        "Access-Control-Allow-Headers":
          response.headers.get("Access-Control-Request-Headers") || "",
      },
    });
  }

  return response;
}
