const PORT = 5000;

const express = require('express');

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const server = app.listen(PORT ,()=>{
    console.log(`server started at port ${PORT}`)
})

const io = require('socket.io')(server);
io.on('connection', socket =>{
    console.log('made socket connection ') ;
    socket.on('chat', data=>{
        io.sockets.emit('message',data) ;
    })
})
