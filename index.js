const jsonServer = require("json-server"); // importing json-server library
const cors = require('cors');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //  chose port from here like 8080, 3001

server.use(cors())  

server.delete('/deleteAllScenarios', (req, res) => {
  router.db.set('allScenarios', []);

  // Write changes back to JSON file
  fs.writeFileSync('db.json', JSON.stringify(router.db.getState()));

  res.sendStatus(200);
});

server.use(middlewares);
server.use(router);

server.listen(port);