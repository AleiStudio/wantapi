<div align="center">
    <br />
    <p>
        <a href="https://doc.want.cat/"><img src="https://cdn.want.cat/Want.png" width="546" alt="wantapi" /></a>
    </p>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/wantapi"><img src="https://img.shields.io/npm/v/wantapi" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/wantapi"><img src="https://img.shields.io/npm/d18m/wantapi" alt="npm downloads" /></a>
    </p>
</div>

# WantAPI

WantAPI es un paquete npm que proporciona acceso a diferentes categorías de imágenes y contenido mediante la API de WantAPI. Puedes obtener imágenes generales, contenido NSFW y SFW de manera sencilla.

## 📦 Instalación

Para instalar el paquete en tu proyecto, usa el siguiente comando:

```sh
npm install wantapi
```

## 🚀 Uso

### Importar el paquete

```javascript
const { WantReal, WantRealV2, WantHentai, WantDiversion, WantReddit } = require('wantapi');
```

### Crear instancias

```javascript
const nsfw = new WantReal(); 
const nsfw = new WantRealv2();  
const nsfw = new WantHentai(); 
const sfw = new WantDiversion();  
```

# Lista

| Real                    | Animado              | Diversion   |
|-------------------------|----------------------|-------------|
| getbonitas              | getnekonsfw          | getmeme     |
| getboobs                | getwaifus            |             |
| getcosplay              | getasshentai         |             |
| getegirls               |
| getpfp                  |
| getgif                  |
| getinterracial          |
| getpussy                |

| Real V2                 |
|-------------------------|
| getvideosv2             |
| getgifv2                |
| getcosplayv2            |
| getassv2                |


#### 🖼 WantAPI

```javascript
(async () => {
    console.log(await nsfw.getbonitas());
    console.log(await nsfw.getasshentai());
    console.log(await sfw.getmeme());
    ///-- 1 a 5 enlaces --///
    api.getassv2(5).then(urls => {console.log(urls);});
})();
```

# Reddit
Ahora puedes obtener medios de Reddit fácilmente con:

```javascript
// Obtener URL de media de un subreddit
WantReddit('subreddit')
  .then(data => {
    console.log('Título:', data.title);
    console.log('URL del media:', data.mediaUrl);
  })
  .catch(err => console.error('Error:', err));
```
## 🔍 Estructura de la respuesta

La función devuelve un objeto con los siguientes campos:

| Propiedad               | Tipo                 | Descripción |
|-------------------------|----------------------|-------------|
| `title`                 | `string`             | Título del post |
| `author`                | `string`             | Usuario que publicó el post |
| `subreddit`             | `string`             | Subreddit de origen |
| `mediaUrl`              | `string`             | URL directa del contenido multimedia (imagen/video/GIF) |
| `postUrl`               | `string`             | Enlace al post en Reddit |
| `thumbnail`             | `string`             | Miniatura del post |
| `upvotes`, `downvotes`, `score` | `number` | Estadísticas de votos |
| `upvoteRatio`           | `number`             | Porcentaje de upvotes (ej: `0.95` = 95%) |
| `commentCount`          | `number`             | Número de comentarios |
| `createdAt`             | `string`             | Fecha de creación en formato ISO |
| `createdAtFormatted`    | `string`             | Fecha legible (ej: `"2 hours ago"`) |
| `isNSFW`                | `boolean`            | Si el post es +18 |
| `isVideo`, `isGallery`  | `boolean`            | Tipo de contenido |
| `mediaType`             | `string`             | Tipo de medio (`image`, `video`, `gallery`) |
| `awards`                | `Array<object>`      | Premios (Reddit Awards) del post |

## Documentation Oficial

Puedes ir a nuestra API directmente desde la documentación oficial de WantAPI:

[DOCS](https://doc.want.cat/)

### Unete a nuestro servidor de Discord para obtener ayuda y soporte:

[![Jedi Studio](https://api.weblutions.com/discord/invite/kqbznaqtGm/)](https://discord.gg/kqbznaqtGm)  