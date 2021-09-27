<!-- GETTING STARTED -->
## Getting Started

Prueba técnica para DEV.F 
BACKEND EN EXPREESS + MONGODB PARA TODO LIST, 


### Instalacion

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

// crear tarea dia 
router.post('/api/v1/insert/event')

// todas las tareas
router.get('/api/v1/allevents')

// todas las tareas por usuario 
router.get('/api/v1/events/:userID')

// todas las tareas terminadas por usuario 
router.get('/api/v1/eventsterminados/:userID')

// get events responsable
router.get('/api/v1/sharetask/:userID')

// todos los usuario para asignacion
router.get('/api/v1/alluser/')

// modificar evento
router.patch('/api/v1/updatenota/:notaId')

// cancelar evento
router.patch('/api/v1/cancelarevento/:notaId')

// get user por id 
router.get('/api/v1/getoneuser/:userID')



