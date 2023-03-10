const path = require('path')
const http = require('http')
const express = require("express")
const socketio =require('socket.io')
const { Socket } = require('engine.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', Socket =>{console.log('New WS Connection ..')})
socket.emit('message','Welcon to ChartCord !')


const PORT = 3000 || process.env.PORT
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))