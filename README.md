# German Vocabulary Learner

A nice little personal vocabulary builder for myself, written mostly with Svelte and SvelteKit.

This app is currently in development. Most functionalities are incomplete. The README file will be updated accordingly if any huge update happens.

## List of core functions:

- Nouns with Articles
- Verb Forms
- Other Vocabularies
- Grammar Rules

## Nouns with Articles

Start building your dictionary from here. You can record the gender articles, plural forms, and the english translation of every noun. Your vocabularies will be recorded in `localStorage` provided by the browsers.

I am currently following the German textbook studio[express], so all pages order vocabularies by their chapters. Choosing no chapters for a vocabulary will place it at the top.

## Adding your own functions

If you want to develop some more functionalities yourself, feel free to clone the project.

In case you don't know Svelte, to start developing, install the dependencies with `npm install` (or `pnpm install` or `yarn`), and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To create a production version of your version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
