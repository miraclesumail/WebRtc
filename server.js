const express = require('express')
const http = require('http')
const socket = require('socket-io')
const app = express()
const server = http.Server(app)

app.set('view engine', 'ejs')
app.use(express.static(public))