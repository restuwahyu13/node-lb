const http = require('http')
const express = require('express')

const port = process.env.PORT || 4000
const app = express()
const server = http.createServer(app)

app.all("*", (req, res) => {
  console.info(`${new Date().toISOString()} - Service A - Url: ${req.url} - Method: ${req.method} - IP: ${req.ip}`)
  res.status(200).send("Load Balancer Service A")
})

server.listen(port,() => console.info(`Service a is running on port ${port}`))