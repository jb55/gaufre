#!/usr/bin/env node

const { createServer } = require('http')
const { once } = require('events')
const { createReadStream } = require('fs')
const { join } = require('path')

async function main () {
  const server = createServer((request, response) => {
    const url = request.url === '/favicon.png'
      ? 'favicon.png' : 'index.html'
    console.log(request.method, request.url)
    const filepath = join(__dirname, 'public', url)
    const file = createReadStream(filepath)
    file.pipe(response)
  })
  server.listen(process.argv[2] || 3000)
  await once(server, 'listening')
  const { port } = server.address()
  console.log(`Listening on http://localhost:${port}`)
}

main()
