---
layout: post
title: "Atualizar ano atual automaticamente com Javascript "
author: matheus
categories: [Front-end]
image: assets/images/posts/mostrar-ano-atual-com-javascript.jpg
comments: true
---

Veja neste artigo como mostrar o ano atual automaticamente no footer do site

- Adicione o conteúdo da tag `<span>` abaixo no seu arquivo HTML, onde deseja exibir o ano atual automaticamente.

```html
<span id="mostrarAnoAtual"></span>
```

- Já no arquivo Javascript, insira os comandos abaixo:

```js
const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();
```

- Dessa forma, na tag `<span>` que foi adicionado no seu HTML será exibido o ano atual automaticamente, sem a necessidade de ficar trocando todo ano.
