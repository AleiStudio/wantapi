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
 - **Diversion**
  <details>
  - getmeme
  </details>

 - **Hentai**
  <details>
  - getnekonsfw
  - getwaifus
  - getasshentai
  </details>

 - **Real**
  <details>
 - getbonitas
 - getboobs
 - getcosplay
 - getegirls
 - getpfp
 - getgif
 - getinterracial
 - getpussy
  </details>

#### 🖼 WantAPI

```javascript
(async () => {
    console.log(await nsfw.getbonitas());
    console.log(await sfw.getmeme());
})();
```

Ahora puedes obtener medios de Reddit fácilmente con:

```javascript
// Obtener URL de media de un subreddit
WantReddit('subreddit')
  .then(mediaUrl => console.log(mediaUrl))
  .catch(error => console.error(error));
```

## Documentation Oficial

Puedes ir a nuestra API directmente desde la documentación oficial de WantAPI:

[DOCS](https://doc.apiwant.xyz/)
