# rbp-imageworks-template

Reconstrução editável (Next.js + TypeScript + React) do site publicado em:

**https://rbp-imageworks-template.vercel.app/**

O projeto foi reconstruído exclusivamente a partir do conteúdo público entregue pelo deployment (HTML, payload RSC, chunks JS, CSS compilado e assets). Não houve acesso à conta Vercel nem ao repositório Git original.

## O que foi recuperado

- **Assets originais** (copiados do backup bruto, sem alteração): `public/og-image.png`, `public/brand-mask.svg`, `public/icon-192.png`, `public/icon-512.png`, `public/icon-maskable.png`, fontes Geist, Geist Mono e Instrument Serif em `public/fonts/`, `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`, `robots.txt`, `sitemap.xml` e `site.webmanifest`.
- **Metadados** (title, description, Open Graph, Twitter, robots, ícones, viewport) e o **JSON-LD** (Organization, SoftwareApplication e FAQPage) exatamente como no HTML original.

## O que foi reconstruído

- Componentes decompilados dos chunks Turbopack do deployment: Nav, Logo, ThemeSwitch, Footer, Reveal, SectionHeading, DotField (canvas 2D), ImageHelix (three.js) e as seções Hero (carrossel WebGL com three.js), Brief, Variations, Benchmarks, Testimonials, Pricing e Faq.
- A seção de formatos (Banner, Feed, Portrait e Story) e o CTA final, que no original são renderizados no servidor, foram escritos em `app/page.tsx` a partir do payload RSC.
- `components/Providers.tsx`, com tema (next-themes), contexto de reduced motion e smooth scroll com Lenis (mesma configuração do original).
- `lib/photos.ts` (ids e URLs das fotos) e `lib/site-config.ts` (nome, URL, descrição e gradiente da marca).
- Código de bibliotecas que o bundler havia embutido nos módulos (`animate` e `useInView` no Benchmarks, `useMotionTemplate` no Footer) foi trocado pelos imports do pacote `motion`.
- `app/globals.css`, um Tailwind v4 editável regenerado a partir do CSS compilado. As 589 classes do CSS original estão presentes.
- Os textos, nomes e logos são idênticos aos do original.

## Imagens

Assim como o original (que servia tudo via `/_next/image`), as fotos continuam vindo do Unsplash (`images.unsplash.com`), liberado em `next.config.ts` (`images.remotePatterns`). As URLs são as mesmas do original, montadas em `lib/photos.ts`. As variantes baixadas durante o backup estão preservadas em `00-RAW-BACKUP/rbp-imageworks-template/_external/`.

## Stack e dependências

Versões identificadas nos bundles: Next 16.3.4, three 0.184, lenis 1.3.26, Tailwind CSS 4.1.18, além de React 19, motion 12, lucide-react e next-themes.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Funcionalidades ausentes / backend

- **Newsletter do Footer:** no original, o envio só muda o estado para "inscrito", sem mandar o e-mail para nenhum serviço. O comportamento foi mantido e marcado como `TODO: backend original não recuperável`. **NÃO RECUPERÁVEL PELO DEPLOYMENT PÚBLICO.**
- **Login e cadastro** (`app.imageworks.example.com/sign-in` e `/sign-up`) e as páginas institucionais (`imageworks.example.com/about`, `/blog`, `/terms` etc.) são links para domínios de exemplo que não existem. Não fazem parte deste deployment.

## Variáveis de ambiente

Nenhuma. O site é estático e não precisa de `.env`.

## Fidelidade

Comparado por screenshots com o original em 1440x900 (desktop) e 390x844 (mobile): as alturas de página são idênticas (14648 px e 17104 px), e quase todas as fatias têm 0,00% a 0,1% de diferença de pixels. As únicas diferenças visíveis estão no carrossel WebGL do hero e na hélice de imagens do CTA, que são animações contínuas capturadas em instantes diferentes.
