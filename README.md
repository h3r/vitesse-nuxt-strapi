portfolio-template/
├─ .env.example
├─ docker-compose.yml
├─ docker-compose.dev.yml
├─ frontend/              # Vitesse for Nuxt 4 app
│  ├─ Dockerfile
│  └─ (your Nuxt app: package.json, nuxt.config.ts, etc.)
└─ backend/               # Strapi 5 app
   ├─ Dockerfile
   └─ (your Strapi app: package.json, config/, src/, etc.)

# Installation
```
pnpm install && cd frontend && pnpm install && cd ../backend && pnpm install
```


