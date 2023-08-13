# LEVELUP

Plataforma de noticias colaborativas, en la que los usuarios pudieran compartir y participar en la difusión de información sobre diversos temas, en este caso enfocada al mundo de los videjuegos, ya que en la actualidad parece ser que no existe ninguna.

## Índice

-   [Instalación y configuración](#instalación-y-configuración)
-   [Uso](#uso)
-   [Endpoints](#endpoints)
-   [Autenticación](#autenticación)
-
-
-   [Contacto](#contacto)
-   [Futuras implementaciones](#futuras -implementaciones)

## Instalación y configuración

Asegúrate de tener [Node.js](https://nodejs.org/) instalado, sigue las instrucciones de la web oficial en el enlace:

-   Luego, clona este repositorio y ejecuta los siguientes comandos:
    Para la ejecución y desarrollo de esta API es necesario:

1. Clonar este repositorio
2. Abre un terminal en tu sistema operativo
3. Navega hasta el directorio raíz de tu proyecto utilizando el comando "cd" (cambiar directorio). Por ejemplo:

```bash
cd ruta/a/tu/levelup-api
```

4. Instalar las dependencias, para "levelup-api" con el siguiente comando:

```bash
npm install
```

-   [bcrypt](https://www.npmjs.com/package/bcrypt): Librería para el hash y verificación de contraseñas.
-   [cors](https://www.npmjs.com/package/cors): Permite la comunicación entre servidores en diferentes dominios.
-   [crypto](https://nodejs.org/api/crypto.html): Módulo nativo de Node.js para operaciones criptográficas.
-   [date-fns](https://www.npmjs.com/package/date-fns): Biblioteca para el manejo de fechas.
-   [dotenv](https://www.npmjs.com/package/dotenv): Cargador de variables de entorno desde un archivo `.env`.
-   [express](https://expressjs.com/): Marco de trabajo para crear aplicaciones web y APIs en Node.js.
-   [express-fileupload](https://www.npmjs.com/package/express-fileupload): Middleware para la carga de archivos en Express.
-   [faker-js](https://www.npmjs.com/package/faker-js): Generador de datos falsos para pruebas y desarrollo.
-   [fs](https://nodejs.org/api/fs.html): Módulo nativo de Node.js para operaciones de sistema de archivos.
-   [fs.promises](https://www.npmjs.com/package/fs.promises): Módulo nativo de Node.js para operaciones de sistema de archivos en forma de promesas.
-   [joi](https://www.npmjs.com/package/joi): Biblioteca para validación y esquemas de datos.
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Librería para la creación y verificación de tokens JWT.
-   [morgan](https://www.npmjs.com/package/morgan): Middleware para el registro de solicitudes HTTP en Express.
-   [mysql2](https://www.npmjs.com/package/mysql2): Cliente MySQL para Node.js.
-   [node-mailjet](https://www.npmjs.com/package/node-mailjet): Cliente para Mailjet, un servicio de envío de correos electrónicos.
-   [nodemailer](https://www.npmjs.com/package/nodemailer): Biblioteca para el envío de correos electrónicos desde Node.js.
-   [path](https://nodejs.org/api/path.html): Módulo nativo de Node.js para manipulación de rutas de archivos y directorios.
-   [sharp](https://www.npmjs.com/package/sharp): Biblioteca para el procesamiento de imágenes.
    -En estos enlaces encontrarás más información sobre cada una de ellas.

5. Una vez en el directorio raíz de tu proyecto, y tras instalar las dependencias, ejecuta el siguiente comando para iniciar el archivo "dbInit.js":
   (Asegúrate de tener "Node.js" instalado en tu sistema antes de ejecutar el comando. )

```bash
node src/database/dbInit.js
```

6. Iniciamos el servidor (dependiendo del navegador) para "levelup-api":

```bash
npm start
```

o en su defecto

```bash
node --watch app.js
```

o

```bash
node app.js
```

```bash
npm install
```

    Ahora configuramos "levelup-react"

7.  Instalar las dependencias, para "levelup-react con el siguiente comando:

```bash
npm install
```

-   [cors](https://www.npmjs.com/package/cors): Permite la comunicación entre servidores en diferentes dominios.
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Librería para la creación y verificación de tokens JWT.
-   [prop-types](https://www.npmjs.com/package/prop-types): Validación de tipos para componentes React.
-   [react](https://reactjs.org/): Biblioteca para construir interfaces de usuario.
-   [react-country-region-selector](https://www.npmjs.com/package/react-country-region-selector): Selector de países y regiones para React.
-   [react-dom](https://reactjs.org/docs/react-dom.html): Paquete para manejar el DOM en aplicaciones React.
-   [react-moment](https://www.npmjs.com/package/react-moment): Formateo de fechas y horas en componentes React.
-   [react-router](https://reactrouter.com/): Enrutamiento para aplicaciones React.
-   [react-router-dom](https://reactrouter.com/web/guides/quick-start): Enrutamiento para aplicaciones React con navegación web.
-   [react-select](https://www.npmjs.com/package/react-select): Componente de selección personalizable para React.
-   [react-slick](https://react-slick.neostack.com/): Carrusel deslizante para componentes React.
-   [slick-carousel](https://www.npmjs.com/package/slick-carousel): Biblioteca de carruseles para la web.

    En estos enlaces encontrarás más información sobre cada una de ellas.

8. Abre otro terminal en tu sistema operativo
9. Navega hasta el directorio raíz de tu proyecto utilizando el comando "cd" (cambiar directorio). Por ejemplo:

```bash
cd ruta/a/tu/levelup-react
```

10. Inicia el servidor para "levelup-react":

```bash
npm run dev
```

## Uso

1. Haciendo Solicitudes: Proporciona ejemplos de cómo hacer solicitudes a tu API, ya sea utilizando cURL o bibliotecas cliente.
2. Formato de Solicitudes y Respuestas: Describe el formato esperado de las solicitudes y las respuestas (por ejemplo, JSON).
3. Parámetros de la Solicitud: Explica los parámetros que se pueden incluir en las solicitudes y cómo se deben formatear.
4. Respuestas Exitosas y Errores: Proporciona ejemplos de respuestas exitosas y posibles códigos de error.

## Endpoints

Solicitudes GET:
GET /posts - Solicitud "Get All Posts"
GET /posts/:id - Solicitud "Get Post By ID"
GET /posts/:id/comments - Solicitud "Get Comment from Post ID"
GET /users/:id - Solicitud "Get User By ID"
GET /searchcat/:cat - Solicitud "Get Posts By Category"
GET /searchplatform/:plat - Solicitud "Get Posts By Platform"

Solicitudes POST:
POST /register - Solicitud "Register User"
POST /login - Solicitud "Login". Recieve Token
POST /posts - Solicitud "Create Post" (json only)
** Send Photo as PUT **
POST /posts/:id/comments - Solicitud "Create Comment"
POST /posts/:id/votes - Solicitud "Vote" (up/down)

Solicitudes PUT (Edit):
PUT /posts/:id - Solicitud "Edit Post" (json only)
PUT /posts/:id/photos - Solicitud "Add/Edit Photo"
PUT /users/:id/controlpanel - Solicitud "Edit User"

Solicitudes DELETE:
DELETE /posts/id - Solicitud "Delete Post"

## Autenticación

1. Token de Acceso (Access Token) - Autenticación mediante API Key:
   Proporciona a los usuarios un token único que deben incluir en cada solicitud. Puedes validar este token en el servidor para asegurarte de que el usuario tenga permisos para acceder a los recursos.
2. Autenticación con JWT (JSON Web Tokens):
   JWT es un estándar para tokens seguros y compactos. Se emite un JWT después de que el usuario se autentique y luego verificarlo en el servidor en cada solicitud subsiguiente. Los JWTs contienen información codificada, como el usuario
3. Autenticación de API Key:
   Permite a los usuarios autenticarse utilizando una clave secreta única proporcionada por ti.

## Contacto

Pendiente implementación

## Futuras implementaciones

-   [ ] Validación por email
-   [ ] Restablecer contraseña
-   [ ] Recarga automática de comentarios
-   [ ] Creador post no se puede autovotar
-   [ ] Sustituir alerts por modals en la gestión de todos los errores
-   [ ] Implementar error al hacer "comment" en su propio post
-   [ ] Hacer funcional SearchBar
-   [ ] Contacto para sugerencias o problemillas
-   ... y posiblemente surja algo más
    Esperamos acabarlas antes de la presentación del proyecto.

## Autores:

     Juan León Medina,
     Gonzalo Rodriguez Aquino y
     Ana Isabel Navarro Gómez.