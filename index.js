const jsonServer = require("json-server"); // importing json-server library
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //  chose port from here like 8080, 3001

server.delete('/deleteAllScenarios', (req, res) => {
    router.db.set('allScenarios', []);
    res.sendStatus(200);
  });

server.use(cors)  
server.use(middlewares);
server.use(router);

server.listen(port);