# Club Deportivo Nopaleros

A website for an amateur football club: club story, upcoming fixtures, the squad, and sponsors.

Live: https://alediez2048.github.io/Nopaleros-FC/

## Sections

A video hero with a loading screen, About, Fixtures, Squad, Sponsors and a footer. Each section is a component in `src/components/` with its own stylesheet, and `useInView` (an IntersectionObserver hook in `src/hooks/`) triggers the entrance animations as sections scroll into view.

The hero and background videos in `src/assets/Video` are free stock footage from Pexels.

Player photos in the squad section are placeholder stock images until the club supplies real ones.

## Stack

React 18 and Vite with plain CSS. No other runtime dependencies.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run lint      # ESLint
npm run deploy    # build and publish dist/ to the gh-pages branch
```

The Vite `base` is `/Nopaleros-FC/` to match the GitHub Pages path.
