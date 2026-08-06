# Portfólio — Allan Gustavo

Portfólio pessoal de desenvolvedor Full Stack, em React + Vite + React Router.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Onde colocar suas imagens

- `public/profile.jpg` → sua foto de perfil (usada no Hero)
- `public/images/biosaude.png`
- `public/images/financontrol.png`
- `public/images/fireburger.png`
- `public/images/latavola.png`
- `public/images/pythonmate.png`
- `public/images/portfolio.png`

Se um arquivo de imagem não existir, o site continua funcionando normalmente
(mostra um ícone no lugar da imagem).

## Onde trocar os links (GitHub / Deploy / redes sociais)

- Cada projeto: `src/data/projects.js` (`github` e `deploy`)
- Hero (GitHub/LinkedIn): `src/components/Hero/Hero.jsx`
- Footer (GitHub/LinkedIn/Instagram/Email): `src/components/Footer/Footer.jsx`
- Navbar (GitHub): `src/components/Navbar/Navbar.jsx`
- CTA (Email): `src/components/CTA/CTA.jsx`

## Estrutura

```
src/
├── components/     # Navbar, Hero, Stats, FilterBar, ProjectCard, CTA, Footer
├── pages/          # Home, ProjectDetails
├── data/           # projects.js — fonte única dos dados de cada projeto
├── routes/         # AppRoutes.jsx — rotas "/" e "/projeto/:id"
├── hooks/          # useReveal.jsx — animação de scroll reveal
└── styles/         # variables.css, global.css, animations.css
```

## Tecnologias

React · React Router · Vite · lucide-react · CSS puro (variáveis + módulos por componente)
