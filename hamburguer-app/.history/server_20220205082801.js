const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.post('http://localhost:3000/finishOrder', (req, res, next) => {
    console.log(req.body)
    let total = 0;
    req.body.forEach(product => {
        total += product.price * product.count
    });
    res.jsonp({ total: total })
})

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})