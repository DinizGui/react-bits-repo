# rbp-ai-saas-template

Reconstrução editável (Next.js + TypeScript + React) do site publicado em:

**https://rbp-ai-saas-template.vercel.app/**

Landing page do "Kraft", um produto fictício de design com IA. Reconstruída só a partir do que o deployment público entrega (HTML, payload RSC, chunks JS, CSS compilado e assets). Não houve acesso à conta Vercel nem ao repositório original. O backup bruto está em `00-RAW-BACKUP/rbp-ai-saas-template/`.

## O que foi recuperado

- **Assets originais**, copiados sem alteração: `public/img/` (mocks e ilustrações dos passos), `public/svg/` (logo e gradiente), `public/mock-logos/`, `app/favicon.ico`, `app/icon.svg`, `robots.txt`, `sitemap.xml` e `site.webmanifest`.
- **Metadados** (title, description, Open Graph, Twitter, robots, viewport) iguais ao payload RSC.
- **Estrutura da página**, tirada do payload RSC: Header, ThemeSwitch, Hero, TextReveal, ImageReveal, TrustedBy, ToolsCarousel, ShowcaseCards, Stats, Testimonials, Pricing, FAQ, BottomCTA e Footer.

## Como foi reconstruído

- Os módulos do chunk Turbopack foram separados e convertidos automaticamente para TSX: as chamadas `jsx()` minificadas viraram JSX, e `e.i(N)` virou `import` do pacote certo (`react`, `motion/react`, `next/image`, `next/link`, `lucide-react`, `next-themes`). Os nomes de variáveis continuam os minificados; componentes de nome minúsculo ganharam o prefixo `C_`.
- Esses arquivos têm `// @ts-nocheck` no topo, porque o código descompilado não tem tipos.
- Escritos à mão a partir do bundle: `components/Providers.tsx` (Lenis com a mesma configuração, next-themes com tema escuro padrão e o contexto de reduced motion) e `components/sections/ImageReveal.tsx` (o original embutia GSAP + ScrollTrigger; aqui vêm do pacote `gsap`).
- `app/globals.css` é um Tailwind v4 editável com os tokens de cor (`--background`, `--accent`, etc.) e as regras próprias do CSS compilado.
- Fontes Geist e Geist Mono via `next/font/google`, como no original.

## Stack e dependências

Versões identificadas nos bundles: Next 16.1.1, gsap 3.14.2, lenis 1.3.17, Tailwind CSS 4.1.18, além de React 19, motion 12, lucide-react e next-themes.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Funcionalidades ausentes / backend

- **Prompt do hero, waitlist e botões de plano**: no original são só interface, sem envio para nenhum serviço. O comportamento foi mantido.
- **Links do rodapé e do menu** apontam para âncoras ou `https://example.com`, como no original.

## Imagens

As fotos dos depoimentos vêm do Unsplash (`images.unsplash.com`), liberado em `next.config.ts`. As cópias baixadas estão em `00-RAW-BACKUP/rbp-ai-saas-template/_external/`.

## Fidelidade

Comparado por screenshot com o original em 1440x900: a altura da página é idêntica (10025 px) e a maioria das fatias tem de 0,01% a 2% de diferença de pixels. As diferenças maiores são animações capturadas em instantes diferentes (a bolha do hero, os logos entrando e o carrossel de depoimentos).
