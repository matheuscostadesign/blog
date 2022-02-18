---
layout: post
title: "Como alterar a cor do texto selecionado de um site"
author: matheus
categories: [Front-end]
image: assets/images/posts/como-alterar-cor-do-texto-selecionado-de-um-site.jpg
comments: true
---

Veja neste artigo como alterar a cor do texto selecionado de um site/página utilizando um simples código em `CSS`

## Alterando a cor do texto selecionado

```css
::-moz-selection {
  color: #ffffff;
  background-color: #bf4b8a;
}
::selection {
  color: #ffffff;
  background-color: #bf4b8a;
}
```
