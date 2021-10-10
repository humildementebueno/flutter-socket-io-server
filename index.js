const express = require('express');//importacion comun y corriente en flutter
const path = require('path');//este path ya viene con node.js
require('dotenv').config();//aqui establece las variables de entorno

//App de Express
const app = express();//ya inicializa y ya estamos listos para escuchar peticiones

//Node Server( creando un propio servidor de node)
const server = require('http').createServer(app);//anexando la aplicacion
module.exports.io = require('socket.io')(server);//estamos exportando el io con su metodos

require('./sockets/socket');
//path publico
const publicPath = path.resolve(__dirname,'public')
/**__dirname apunta en la misma direccion que este apuntando en la direccion, 'public' es una carpeta */
app.use(express.static(publicPath));//cargamos la peticion en nuestra aplicacion


server.listen( process.env.PORT, (err)=>{ //llamamos al sgte callback y retornara un error

    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto!!',process.env.PORT);

} );
