//const io = require('socket.io');
//const education = io.of('/education');
module.exports = function(server) {
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
      //  console.log('a user connected');
    });

    const education = io.of('/education');
    education.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            education.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })
    });

    const love = io.of('/love');
    love.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            love.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

        // console.log('love chat working');
    });
    const peace = io.of('/peace');
    peace.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            peace.emit('chat', {
                message: data.message,
                author:  data.author,

                timestamp: new Date()
            })
        })

    });
    const fitness = io.of('/fitness');
    fitness.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            fitness.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });
    const entertainment = io.of('/entertainment');
    entertainment.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            entertainment.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });
    const travelling = io.of('/travelling');
    travelling.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            travelling.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });
    const politics = io.of('/politics');
    politics.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            politics.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });
    const technology = io.of('/technology');
    technology.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            technology.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });
    const sports = io.of('/sports');
    sports.on('connection',(socket) =>{
        socket.on('chat', (data) => {
            sports.emit('chat', {
                message: data.message,
                author:  data.author,
                timestamp: new Date()
            })
        })

    });

};