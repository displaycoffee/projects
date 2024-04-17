# Burmecia - version 2.0.0

React-based framework to create projects. Primarily built with React, JavaScript, Sass, and Vite. It is not very "pretty" and contains very basic styles so that the template may be used as a boilerplate to create something better.

This is named after a city in the game Final Fantasy IX -- the "Realm of Eternal Rain" and home to the character Freya.

### dist

-   JavaScript and styles are bundled from `src` using `npm run build` and compiled here

### public

-   Static assets are stored here and copied into `dist` after running `npm run build`

### src

-   Dev environment is started with `npm run dev`
-   `_config` directory configures "global" settings
-   Organized other directories into folders as: `components` (shared elements), `entry` (main entry), `layout` (layout elements), `pages` (contains major content)
-   `entry` directory contains main entry point (`index`) and context wrapper (`context`)
