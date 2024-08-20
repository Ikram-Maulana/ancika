# Ancika

Ancika is a simple and lightweight worker to solve Umami Analytics issue with Anti-Adblockers. This project build with [Hono](https://hono.dev/) and [Vercel](https://vercel.com/) integration.

## Usage

1. Fork and clone this repository
2. Install dependencies with `bun install`
3. You can change the `scriptName` in `index.ts` with your desired value

## Deploy from Vercel

Before deploying code to Vercel, you need to make `.env` file with the following content:

```bash
ENDPOINT_NAME="your-endpoint-name"
UMAMI_URL="your-umami-url"
```

After that, you can deploy the code to Vercel with the following command:

```bash
bun run deploy
```

## Connecting Your Project to This Worker using Next.js

You can connect your project to this worker using Next.js with the following code:

```typescript
import Script from 'next/script'

...rest of the code
<Script
  src="/yourScriptName.js"
  strategy="beforeInteractive"
  data-website-id="your-website-id"
/>
...rest of the code
```

After that, you can modify the next.config.js to add the following code:

```javascript
..rest of the code
  async rewrites() {
    return [
      {
        source: "/yourScriptName.js",
        destination: "https://your-endpoint-name.vercel.app/yourScriptName",
      },
    ];
  },
  crossOrigin: "anonymous",
  skipTrailingSlashRedirect: true,
..rest of the code
```

> Note: If you using cloudflare as your DNS provider, you should follow the configuration below:

- Go to your Cloudflare dashboard

- Click on the domain you want to configure

- Click on the "rules" tab

- Click on "Create Page Rule"

- Add your project endpoint that using this worker
  `https://your-endpoint-name.vercel.app/yourScriptName`

- Click on "Add a Setting" and choose "Cache Level" to "Bypass"

> The above configuration will bypass the cache for the worker endpoint, so the worker will prevent your script from being converted to a “plain text” Content Type by Cloudflare.

## Resources

- [Vitobotta](https://github.com/umami-software/umami/discussions/1026)
