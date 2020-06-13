const routes = require('express').Router();

routes.get('/', (req, res) =>{
  res.json({"message" : "SUCCESS"})
});

module.exports = routes;