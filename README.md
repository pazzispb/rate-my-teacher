# Aplicación Rate My Teacher

## Equipo de trabajo

- Pazzis Paulino 1103790
- Paola Saldaña 1104081
- Alexa Guzmán 1101488
- Johan Contreras 1106473
- Allen Silverio 1104220

## Factores de los 12 Factors aplicados

- *Codebase*: El código fuente de la aplicación se encuentra almacenado en GitHub.

- *Dependencies*: Las dependencias de la aplicación se encuentran especificadas en el archivo package.json.

- *Config*: Las variables de entorno de la aplicación se encuentran especificadas en el archivo .env.

- *Backing services*: La base de datos de la aplicación se encuentra alojada en Firebase y sus parámetros de conexión se encuentran especificados en el archivo .env.

- *Build, release, run*: El flujo despliegue de la aplicación se encuentra dentro de la herramienta GitHub Actions. Aquí se permite actualizar la imagen de la aplicación, la cual se almacena en Docker Hub. Luego, se puede descargar la imagen de Docker Hub y correr la aplicación dentro de cualquier ambiente que se desee.

- *Port Binding*: El puerto de la aplicación se encuentra especificado en el archivo .env.

## Tecnologías utilizadas

### Desarrollo del frontend y backend

- *React*: Framework de JavaScript que permite crear interfaces de usuario de forma rápida y sencilla. Es mantenido por Facebook y la comunidad de software libre. Utiliza una arquitectura basada en componentes, la cual facilita la creación de aplicaciones SPA (Single Page Application) y permite el reuso de código.

- *Node.js*: Entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera de un navegador. Es mantenido por la empresa Joyent, y su código fuente es de código abierto.

### Base de datos y Networking

- *Firebase*: Permite el almacenamiento de datos en tiempo real, y el uso de autenticación de usuarios. Es mantenido por Google, y su código fuente es de código abierto. Dentro de este proyecto se utilizó Realtime Database, la cual utiliza el protocolo de comunicación WebSocket para realizar las actualizaciones en tiempo real.

### Soluciones enlatadas

- *Docker*: Permite la creación de contenedores de software que incluyen todo lo necesario para que una aplicación se ejecute. Es mantenido por la empresa Docker, y su código fuente es de código abierto.

- *Docker-compose*: Permite la creación de múltiples contenedores de software que se comunican entre sí. Es mantenido por la empresa Docker, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para crear los contenedores de la aplicación y la base de datos, y que estos puedan comunicarse entre sí.

### Control de versiones

- *Git*: Permite el control de versiones de un proyecto de software. Es mantenido por la comunidad de software libre, y su código fuente es de código abierto.

- *GitHub*: Permite el control de versiones de un proyecto de software. Es mantenido por la empresa GitHub, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para almacenar el código fuente del proyecto en la nube y para implementar el flujo CI/CD.

### Implementación Flujo CI/CD

- *Babel*: Permite la transpilación de código JavaScript. Es mantenido por la comunidad de software libre, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para transpilar el código fuente de JavaScript a un código que pueda ser interpretado por cualquier navegador.

- *ESLint*: Permite la detección de errores en el código fuente de JavaScript. Es mantenido por la comunidad de software libre, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para detectar errores en el código fuente de JavaScript.

- *Docker Hub*: Permite el almacenamiento de imágenes de contenedores de software. Es mantenido por la empresa Docker, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para almacenar las imágenes de los contenedores de la aplicación y la base de datos.

- *GitHub Actions*: Permite la ejecución de acciones de forma automática. Es mantenido por la empresa GitHub, y su código fuente es de código abierto. Dentro de este proyecto se utilizó para ejecutar las acciones de transpilación de código fuente de JavaScript, detección de errores en el código fuente de JavaScript, creación de imágenes de contenedores de software, y almacenamiento de imágenes de contenedores de software. En resumidas cuentas, esta herramienta permite implementar el flujo CI/CD.

## Pasos para ejecutar la aplicación

### 1. Se debe tener un archivo .env con las siguientes variables de entorno

`REACT_APP_API_KEY`
`REACT_APP_AUTH_DOMAIN`
`REACT_APP_PROJECT_ID`
`REACT_APP_STORAGE_BUCKET`
`REACT_APP_MESSAGING_SENDER_ID`
`REACT_APP_APP_ID`
`REACT_APP_MEASUREMENT_ID`
`PORT`

### 2. Bajar las imagenes de Docker Hub

`docker-compose pull`

### 3. Correr la aplicación

`docker-compose up`

Ruta: `<http://localhost:3000/Rate_prof>`
