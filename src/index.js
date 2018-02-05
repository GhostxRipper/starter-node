import { createServer } from 'http'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
})

server.listen(3000, () => {
  console.log(`server running on port: ${server.addresse().port}`)
})
