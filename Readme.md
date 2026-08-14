<div align="center">
    <br />
    <p>
        <a href="https://api.want.cat/"><img src="https://cdn.want.cat/Want.png" width="546" alt="wantapi" /></a>
    </p>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/wantapi"><img src="https://img.shields.io/npm/v/wantapi" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/wantapi"><img src="https://img.shields.io/npm/d18m/wantapi" alt="npm downloads" /></a>
    </p>
</div>

# WantAPI

WantAPI es un paquete npm que proporciona acceso a la API oficial de want.cat para obtener contenido multimedia NSFW kawaii de alta calidad. Accede a miles de fotos y videos categorizados de manera sencilla.

## 📦 Instalación

Para instalar el paquete en tu proyecto, usa el siguiente comando:

```sh
npm install wantapi
```

## 🚀 Uso

### Importar el paquete

```javascript
const { WantAPI, WantSocial } = require('wantapi');
```

### Crear instancias con token

```javascript
const api = new WantAPI('YOUR_TOKEN');
const social = new WantSocial('YOUR_TOKEN');
```

⚠️ **Importante**: Todos los endpoints requieren un token de autenticación. Obtén tu token en [api.want.cat](https://api.want.cat/)

## 📖 Ejemplo de uso

```javascript
const { WantAPI } = require('wantapi');

const api = new WantAPI('YOUR_TOKEN');

(async () => {
    // Obtener estadísticas del cache
    const cache = await api.getCache();
    console.log('Cache:', cache);

    // Obtener imágenes de diferentes categorías
    const bonitas = await api.getBonitas();
    const memes = await api.getMemes();
    const cosplay = await api.getCosplay();
    const neko = await api.getNekonsfw();
    const trap = await api.getTrap();

    console.log('Bonitas:', bonitas);
    console.log('Memes:', memes);
    console.log('Cosplay:', cosplay);
})();

// Ejemplo de uso de WantSocial
const { WantSocial } = require('wantapi');
const social = new WantSocial('YOUR_TOKEN');

(async () => {
    // Verificar estado de streamer en Kick
    const kickStatus = await social.getKick('adrianozendejas32');
    console.log('Kick Status:', kickStatus);
})();
```

## 📋 Métodos disponibles

### Imágenes
| Método                    | Descripción                              |
|---------------------------|------------------------------------------|
| `getCache()`              | Estadísticas del cache de archivos       |
| `getBonitas()`            | Imágenes bonitas (395 imágenes)          |
| `getAzhentai()`           | Hentai (376 imágenes)                    |
| `getCosplay()`            | Cosplay (501 imágenes)                   |
| `getRealboo()`            | Imágenes reales boobs (611 imágenes)     |
| `getMemes()`               | Memes (697 imágenes)                     |
| `getGif()`                 | GIFs (209 imágenes)                      |
| `getInterracial()`        | Interracial (813 imágenes)               |
| `getPussie()`             | Pussy (901 imágenes)                     |
| `getRealpfp()`            | Profile pictures reales (646 imágenes)   |
| `getNekonsfw()`           | Nekos NSFW (610 imágenes)                |
| `getGifmp4rule34()`       | GIFs Rule34 (637 imágenes)               |
| `getTrap()`               | Trap (1067 imágenes)                     |
| `getRealegirls()`         | E-girls reales (624 imágenes)            |

### Redes Sociales
| Método                    | Descripción                              |
|---------------------------|------------------------------------------|
| `getKick(username)`       | Verificar estado de streamer en Kick     |

## 📄 Formato de respuesta

### Respuesta exitosa
```json
{
  "success": true,
  "Discord": "https://discord.gg/7JQgJXQ",
  "url": "https://media.example.com/bonitas/image.jpg"
}
```

### Respuesta de error
```json
{
  "success": false,
  "message": "No hay imágenes."
}
```

### Respuesta de cache
```json
{
  "bonitas": 395,
  "Waifus": 5678
}
```

### Respuesta de Kick (Live)
```json
{
  "success": true,
  "isLive": true,
  "username": "adrianozendejas32",
  "channel": {
    "slug": "adrianozendejas32",
    "broadcaster_user_id": 53715418,
    "channel_description": ""
  },
  "stream": {
    "title": "VISITANDO DISNEY CON LA MACHIN PATRICIOS / SHIFU",
    "category": "Sin categoría",
    "startedAt": "2026-08-11T20:29:06Z",
    "url": "https://kick.com/adrianozendejas32",
    "thumbnail": "https://images.kick.com/video_thumbnails/tLWOUdVZx7lO/TKkJQpdTY9cz/480.webp",
    "viewerCount": 9248,
    "isMature": false,
    "language": "es"
  },
  "message": "El streamer está en transmisión"
}
```

### Respuesta de Kick (Offline)
```json
{
  "success": true,
  "isLive": false,
  "username": "elmexa9999",
  "channel": {
    "slug": "elmexa9999",
    "broadcaster_user_id": 42162170,
    "channel_description": ""
  },
  "message": "El streamer no está en transmisión"
}
```

## 🔐 Obtener Token

1. Ve a [api.want.cat](https://api.want.cat/)
2. Haz clic en "Iniciar Sesión" (autenticación con Discord)
3. Una vez autenticado, obtendrás tu token
4. Usa el token al crear la instancia: `new WantAPI('YOUR_TOKEN')`

## 📚 Documentación Oficial

Documentación completa de la API: [api.want.cat/docs](https://api.want.cat/docs)

## 🤝 Soporte

Únete a nuestro servidor de Discord para obtener ayuda y soporte:

[![Discord](https://api.weblutions.com/discord/invite/kqbznaqtGm/)](https://discord.gg/kqbznaqtGm)

## 📝 Licencia

ISC

## 👤 Autor

Alei Mitch