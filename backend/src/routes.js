const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

const Post = require('./models/Post');

routes.get('/', (req, res) =>{
  res.json({"message" : "SUCCESS"})
});

routes.post('/posts', multer(multerConfig).single('file'), async(req, res) =>{
  const post = await Post.create({
    name : req.file.originalname,
    size : req.file.size,
    key : req.file.filename,
    url : ''
  });
  res.json({"message" : "SUCCESS"})
});

module.exports = routes;