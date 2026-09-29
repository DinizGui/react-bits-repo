# rbp-minimal-template

Reconstrução editável (Next.js + TypeScript + React) do site publicado em:

**https://rbp-minimal-template.vercel.app/**

O projeto foi reconstruído exclusivamente a partir do conteúdo público entregue pelo deployment (HTML, payload RSC, chunks JS, CSS compilado e assets). Não houve acesso à conta Vercel nem ao repositório Git original.

## O que foi recuperado

- **Assets originais** (copiados do backup bruto, sem alteração): imagens `public/img/*.webp`, fontes em `public/fonts/`, `public/icon.svg`, `app/favicon.ico`, `robots.txt`, `sitemap.xml` e `site.webmanifest`.
- **Metadados** (title, description, Open Graph, Twitter, robots, ícones, viewport) exatamente como no HTML original.

## O que foi reconstruído

- Componentes decompilados dos chunks Turbopack do deployment: Header, ThemeSwitch, Footer, DitherBackground (shader three.js / React Three Fiber) e as seções Hero, Stats, Features, HowItWorks, Testimonials, Pricing, FAQ e FinalCTA.
- `components/Providers.tsx`, com tema e smooth scroll Lenis aplicados no wrapper com rolagem própria, como no original.
- `lib/utils.ts` (helper `cn` com clsx + tailwind-merge).
- `app/globals.css`, um Tailwind v4 editável regenerado a partir do CSS compilado. As 372 classes do CSS original estão presentes.
- Os textos, nomes, logos e links (`mailto:hello@tldr.app`) são idênticos aos do original.

## Stack e dependências

Next 16.1.1, React 19.2.3, Tailwind CSS 4.1.18, motion ^12.23.26, lenis 1.3.23, lucide-react ^0.562.0, next-themes ^0.4.6, three 0.184.0, @react-three/fiber ^9.4.2, @react-three/drei ^10.7.7, clsx e tailwind-merge.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Funcionalidades ausentes / backend

- O site não tem formulários nem chamadas de API; os contatos são links `mailto:`. Não há backend a recuperar.
- Ícones referenciados nos metadados, mas que retornam 404 no próprio deployment original (`/favicon-16x16.png`, `/apple-icon.png`, `icon-192/512`), continuam ausentes.

## Variáveis de ambiente

Nenhuma. O site é estático e não precisa de `.env`.

## Fidelidade

Comparado por screenshots com o original em 1440x900 (desktop, 8588 px de altura) e 390x844 (mobile, 9450 px): o resultado é idêntico, exceto por animações dependentes de tempo.

Observação: o CSS original declara as variáveis da fonte Geist no `body`, então o `--font-sans` do `:root` resolve para a fonte do sistema. Esse comportamento foi reproduzido de propósito para manter a aparência idêntica.
