import { Context, Hono } from "hono";
import { env } from "hono/adapter";
import { getScript, postData, welcome } from "./lib";
import { handle } from "hono/vercel";

declare module "hono" {
  interface ContextVariableMap {
    endpointName: string;
    umamiUrl: string;
  }
}

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");
const scriptName = "ancika.js"; // You can change this to whatever you want
const scriptNameWithoutExtension = scriptName.replace(/\.js$/, "");
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

app.use(async (c, next) => {
  const { ENDPOINT_NAME, UMAMI_URL } = env<{
    ENDPOINT_NAME: string;
    UMAMI_URL: string;
  }>(c);
  c.set("endpointName", ENDPOINT_NAME);
  c.set("umamiUrl", UMAMI_URL);
  await next();
});

app.get("/", (c: Context) => {
  return welcome(c);
});

app
  .get(scriptNameWithoutExtension, (c: Context) => {
    return getScript(c, corsHeaders);
  })
  .post((c: Context) => {
    return postData(c, corsHeaders);
  });

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
