# Ancika

Ancika is a simple and lightweight Cloudflare Worker to solve Umami Analytics issue with Anti-Adblockers. This project build with [Hono](https://hono.dev/) and [Cloudflare Workers](https://workers.cloudflare.com/) integration.

## Usage

1. Fork and clone this repository
2. Install dependencies with `npm install`
3. You can change the `scriptName` in `index.ts` with your desired value

## Deploy from Wrangler

Before deploying code to Cloudflare, you need to change the value of `ENDPOINT_NAME` and `UMAMI_URL` in `wrangler.toml` with your desired value.

Delete the .github folder if you don't want to use Github Action. then, you can push your code to the repository.

After that, you can deploy the code to Cloudflare with the following command:

```bash
npm run deploy
```

## Deploy from Github Action

Before deploying code to Cloudflare via CI, you need a cloudflare token. you can manager from here: https://dash.cloudflare.com/profile/api-tokens

If it's a newly created token, select the Edit Cloudflare Workers template, if you have already another token, make sure the token has the corresponding permissions(No, token permissions are not shared between cloudflare page and cloudflare worker).

then go to your Github repository settings dashboard: Settings->Secrets and variables->Actions->Repository secrets, and add a new secret with the name CLOUDFLARE_API_TOKEN.

After that, you can push your code to the repository, and the Github action will automatically deploy the code to Cloudflare.

Open Cloudflare Workers dashboard, and you will see the new worker has been deployed. Add variable `ENDPOINT_NAME` and `UMAMI_URL` with your desired value into `WorkerName`->Settings->Variables->Add variable. Then, click the deploy button to redeploy the worker.

## Resources

- [Vitobotta](https://github.com/umami-software/umami/discussions/1026)
