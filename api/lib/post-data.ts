import { Context } from "hono";

export async function postData(
  c: Context,
  corsHeaders: Record<string, string>
) {
  const umamiUrl = c.get("umamiUrl");
  const request = new Request(c.req.raw);
  request.headers.delete("cookie");

  let response = await fetch(`${umamiUrl}/api/send`, request);
  const js = await response.text();

  response = new Response(js, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      ...corsHeaders,
      "Access-Control-Allow-Headers":
        response.headers.get("Access-Control-Request-Headers") || "",
    },
  });

  return response;
}
