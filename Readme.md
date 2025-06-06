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
const { WantReal, WantHentai, WantDiversion, WantReddit } = require('wantapi');
```

### Crear instancias

```javascript
const nsfw = new WantReal();  
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


#### 🖼 WantAPI

```javascript
(async () => {
    console.log(await nsfw.getbonitas());
    console.log(await nsfw.getasshentai());
    console.log(await sfw.getmeme());
})();
```

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

[DOCS](https://doc.apiwant.xyz/)
