# SommerResiDance
Festival information website.

## Structure

- `src/routes/(authorized)/**/+page.svelte` - the pages of the website (the authorized folder is for pages that require authentication), the folders are named after the route
- `src/routes/login/+page.svelte` - the login page
- `src/routes/login/+page.server.svelte` - the server-side part of the login page
- `src/hooks.server.ts` - server-side hooks (e.g. authentication)
- `src/service-worker.ts` - the service worker

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
