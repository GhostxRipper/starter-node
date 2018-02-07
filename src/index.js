import { createServer } from 'http'

const port = process.env.PORT || 3000

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
})

server.listen(port, () => {
  console.log(`server running on port: ${server.address().port}`)
})
