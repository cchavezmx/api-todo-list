<!-- GETTING STARTED -->
## Getting Started

Prueba técnica para DEV.F 
BACKEND EN EXPREESS + MONGODB PARA TODO LIST, 

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. add your .env with the Mongo cluster data`
   ```
    NODE_ENV=
    MONGO_USER=
    MONGO_PASSWORD=
    PORT=
   ```


<!-- USAGE EXAMPLES -->
## Rutas

 #Crear evento
  1. 
    ruta: localhost:3000/api/v1/insert/event
    tipo: POST

``` json

  // Respuesta 

  {
    "message": {
        "isActive": true,
        "subject": "Prueba",
        "description": "Test de prueba",
        "date": "2021-09-23T05:44:34.709Z",
        "creator": "Yo merengues",
        "responsables": [],
        "_id": "614c1447c190f90ba76021ef",
        "createdAt": "2021-09-23T05:44:39.602Z",
        "updatedAt": "2021-09-23T05:44:39.602Z",
        "__v": 0
    }
}
```

