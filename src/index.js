const http = require('http')

const server = http.createServer((req, res) => {
    //console.log(req)
    //console.log(res)
  if(req.method === 'GET' && req.url === '/'){
    console.log('hello from server')
    res.end() // answer with empty body
  }
})

server.listen(3001, () => {
    console.log('server on http://localhost:3001')
})
