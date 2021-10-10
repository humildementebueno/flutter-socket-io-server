const { io }= require('../index');
//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado')

     client.on('disconnect', () => {
         console.log('Cliente desconectado')
     });

     //el on es para estar escuchando el 'mensaje' que fue creado en la emision
     client.on('mensaje',( payload )=>{
         console.log('Mensaje!!',payload);
        io.emit('mensaje',{ admin:'Nuevo mensaje'});//esto emite un mensaje a todos los clientes conectados
        });


  });