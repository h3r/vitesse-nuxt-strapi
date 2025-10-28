# Vitesse + Nuxt 4 + Strapi 5

<table>
   <tr style="border: none;">
      <td align="center" style="border: none;">
         <a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener noreferrer">
            <img src="./frontend/public/vite.png" alt="Vitesse" width="700" />
            <span><em>Vitesse</em></span>
         </a>
      </td>
      <td align="center" style="border: none;"> <span style="font-size:30px">+</span> </td>
      <td align="center" style="border: none;">
         <a href="https://nuxt.com/docs" target="_blank" rel="noopener noreferrer">
            <img src="./frontend/public/nuxt.svg" alt="NuxtJS 4" width="700" />
            <span><em>NuxtJS 4</em></span>
         </a>
      </td>
      <td align="center" style="border: none;"> <span style="font-size:30px">+</span> </td>
      <td align="center" style="border: none;">
         <a href="https://docs.strapi.io" target="_blank" rel="noopener noreferrer">
            <img src="./frontend/public/strapi.png" alt="Strapi 5" width="700" />
            <span><em>Strapi v5</em></span>
         </a>
      </td>
   </tr>
</table>

## Features

- 💚 [Nuxt](https://nuxt.com) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/antfu/unocss)

- 🔥 The `<script setup>` syntax

- 🍍 [State Management via Pinia](https://pinia.esm.dev)

- 📑 [Layout system](./layouts)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript, of course

- 🤙🏻 [Strapi backend](https://github.com/kuizuo/vitesse-nuxt3-strapi/tree/master/backend) support

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [Strapi](https://github.com/nuxt-modules/strapi) - Nuxt module for first class integration with Strapi.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).


## Try it!

```bash
npx degit h3R/vitesse-nuxt-strapi my-nuxt-strapi-app
cd my-nuxt-strapi-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## License

[MIT License](./LICENSE)

Based on the work from [kuizuo](https://github.com/kuizuo) in [https://github.com/kuizuo/vitesse-nuxt-strapi]()