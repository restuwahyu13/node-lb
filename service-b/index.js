const http = require('http')
const express = require('express')

const port = process.env.PORT || 4001
const app = express()
const server = http.createServer(app)

app.all("*", (req, res) => {
  console.info(`${new Date().toISOString()} - Service B - Url: ${req.url} - Method: ${req.method} - IP: ${req.ip}`)
  res.status(200).send("Load Balancer Service B")
})

server.listen(port,() => console.info(`Service a is running on port ${port}`))