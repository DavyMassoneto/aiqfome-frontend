# aiqfome-task

desafio técnico para a vaga de desenvolvedor front-end (react e next.js) na l2l aiqfome.

## 📱 objetivo

construir uma aplicação web com foco em experiência mobile utilizando react e next.js, aplicando server components e boas práticas de desenvolvimento front-end.

## 🚀 funcionalidades

* listagem de produtos por categoria (com título, imagem, preço e review)
* adição de produtos ao ticket
* visualização do ticket
* persistência de dados localmente no navegador
* interface responsiva com foco em mobile

## 🛠️ tecnologias

* [next.js 15](https://nextjs.org/)
* [react](https://reactjs.org/)
* [tailwind css](https://tailwindcss.com/)
* server components
* context api / hooks
* react-query (com hidratação e cache)
* localstorage

## ▶️ como rodar

```bash
# instale as dependências
npm install

# crie o arquivo .env.local com a url da api mock:
API_URL=http://localhost:3000

# rode o servidor de desenvolvimento
npm run dev

# acesse em
http://localhost:3000
```

## 📁 estrutura do projeto

```
/public
/src
  /app
    /api              # rotas de API
    /restaurant
      /[slug]         # rota dinâmica para restaurante específico
    layout.tsx        # layout principal da aplicação
    page.tsx          # página inicial (home)
  /assets
    /icons            # ícones e imagens
  /data               # dados mock
  /features
    /restaurants
      /components     # componentes específicos de restaurantes
        /freight-display
        /menu-item
        /menu-section
        /rating-display
        /restaurant-card
        /restaurant-categories
        /restaurant-header
        /restaurant-info
        /restaurant-list
        /restaurant-menu-list
        /restaurant-section
      /hooks          # hooks específicos de restaurantes
  /lib
    /react-query      # configuração do react-query
    /utils            # utilitários gerais
    api.ts            # cliente de API
  /shared
    /components       # componentes compartilhados
      /accordion
      /footer
      /header
      /input
      /typography
  /styles             # estilos globais
  /types              # tipos TypeScript
```

* as rotas do next.js ficam em `/app` e apenas importam os componentes principais das features.
* toda lógica e ui de domínio fica nas pastas dentro de `/features`.
* o que for reutilizável entre features vai em `/shared`.

## 🌐 arquitetura e justificativa técnica

embora o desafio valorize o uso de server components, optei por utilizar `react-query` com suporte a `hydrate` e `dehydrate` para garantir uma melhor experiência em mobile:

* os dados são pré-carregados no server usando server components;
* são hidratados no client com cache automático e atualização leve;
* isso reduz a carga de rede, melhora responsividade e oferece experiência mais fluida.

essa decisão mantém o foco no front-end e organização do projeto, respeitando os princípios do desafio, mas com uma arquitetura mais próxima da realidade de produção.

## 🎨 layout

layout de referência disponível no figma:

[🔗 link para o figma](https://www.figma.com/design/mgLRWavLkkZnDTVKOKQPie/-aiqfome--teste-front-end---mobile?node-id=1182-2552&p=f)

---

projeto desenvolvido para o processo seletivo da l2l aiqfome.
