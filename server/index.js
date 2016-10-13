import express from 'express'
import http from 'http'
import compress from 'compression'
import io from 'socket.io'

import _debug from 'debug'
var debug = _debug('server:web')
var debugSocket = _debug('server:socket')

/**
 * Static web server
 */

const app = express()

app.use(compress())
app.use(express.static('build'))

const server = http.createServer(app)

server.listen(10220, function (err, result) {
  if (err) return debug(err)
  debug('server is running on 10220 port')
})

/**
 * Socket.IO
 */

const socketServer = io(server)

socketServer.on('connection', function (socket) {
  socket.emit('connected')
  debugSocket('emit [connected]')
})
