---
layout: post
title: "Disponibilize imagens em formatos de última geração"
author: matheus
categories: [Front-end, UX/UI]
image: assets/images/posts/converter-imagem-webp.jpg
---

Veja neste artigo como resolver o problema no resultado do Google Pagespeed: "Disponibilize imagens em formatos de última geração"

### Convertendo imagens para WEBP com Photoshop

- Baixar o plugin: WebPShop.8bi
  - https://developers.google.com/speed/webp/docs/webpshop#windows_installation_steps
  - https://github.com/webmproject/WebPShop/releases
- Inserir o arquivo `WebPShop.8bi` no pasta Plugins do Photoshop
  - Ex: `Photoshop18\App\Ps\Plug-ins`
- Para exportar a imagem como WEBP basta clicar em Save As e selecionar o tipo: `WEBP`

### Usando imagens WEBP no HTML

- https://ole.michelsen.dk/blog/using-webp-images-html-css/

```html
<picture>
  <source type="image/webp" srcset="flower.webp" />
  <source type="image/jpeg" srcset="flower.jpg" />
  <img src="flower.jpg" alt="" />
</picture>
```

### WebP em imagens no background CSS

```css
background: url("../assets/images/bg-info.jpg");
background: -webkit-image-set(url("../assets/images/bg-info.webp") 1x) no-repeat;
```
