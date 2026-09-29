# rbp-saas-template

Reconstrução editável (Next.js + TypeScript + React) do site publicado em:

**https://rbp-saas-template.vercel.app/**

O projeto foi reconstruído exclusivamente a partir do conteúdo público entregue pelo deployment (HTML, payload RSC, chunks JS, CSS compilado e assets). Não houve acesso à conta Vercel nem ao repositório Git original.

## O que foi recuperado

- **Assets originais** (copiados do backup bruto, sem alteração): `public/BG.jpg`, `public/dashboardmock.png`, `public/mock-logos/*.svg`, fontes Geist em `public/fonts/`, `public/icon.svg`, `app/favicon.ico`, `robots.txt`, `sitemap.xml` e `site.webmanifest`.
- **Imagens externas** (Unsplash) usadas pelo site foram salvas em `public/images/external/`, para o projeto não depender de URLs de terceiros.
- **Metadados** (title, description, Open Graph, Twitter, robots, ícones, viewport) exatamente como no HTML original.

## O que foi reconstruído

- Componentes em `components/` e `components/sections/`, decompilados dos chunks Turbopack do deployment: Header, ThemeSwitch, Footer, Hero, BlurInHeadline, FeaturesBento, Testimonials, HowItWorks, Pricing e FAQ.
- `components/Providers.tsx`, com ThemeProvider (next-themes), contexto de reduced motion e smooth scroll com Lenis (mesma configuração do original).
- `app/globals.css`, um Tailwind v4 editável regenerado a partir do CSS compilado. As 488 classes do CSS original estão presentes.
- Os textos, nomes e logos são idênticos aos do original.

## Stack e dependências

Versões identificadas nos bundles: Next 16.1.1, React 19.2.3, Tailwind CSS 4.1.18, motion ^12.23.26, lenis 1.3.23, lucide-react ^0.562.0 e next-themes 0.4.6.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Funcionalidades ausentes / backend

- **Formulário "Join Waitlist" (Footer):** o original não possui `action` nem `onSubmit` no bundle público, e nenhum endpoint foi exposto. Está marcado no código como `TODO: backend original não recuperável`. **NÃO RECUPERÁVEL PELO DEPLOYMENT PÚBLICO.**
- Ícones referenciados nos metadados, mas que retornam 404 no próprio deployment original (`/favicon-16x16.png`, `/apple-icon.png`, `icon-192/512`), continuam ausentes.

## Variáveis de ambiente

Nenhuma. O site é estático e não precisa de `.env`.

## Fidelidade

Comparado por screenshots com o original em 1440x900 (desktop) e 390x844 (mobile): o layout é idêntico, com as mesmas alturas de página e posições de seção. As únicas diferenças de pixel vêm de animações dependentes de tempo.

Observação: o CSS original declara as variáveis da fonte Geist no `body`, então o `--font-sans` do `:root` resolve para a fonte do sistema. Esse comportamento foi reproduzido de propósito para manter a aparência idêntica.
