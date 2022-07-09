const express = require("express");
const Blog = require('./../models/Blogs')
const router = express.Router();

router.get("/new", (request, response) => {
  response.render("new");
});

//routes that handles new posts
router.post('/', (request, response) => {
let blog = new Blog( {
  title: request.body.title,
})
})




module.exports = router;
