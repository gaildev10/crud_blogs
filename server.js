const express = require("express");

const mongoose = require("mongoose");

const blogRouter = require("./routes/blogs");

const app = express();

mongoose.connect('mongodb://localhost/crud_blog', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  const blogs = [
    {
      title: "Genre Fusion information",
      snippet:
        "Jazz fusion is a music genre that developed in the late 1960s when musicians combined jazz harmony and improvisation with rock music, funk, and rhythm and blues. Electric guitars, amplifiers, and keyboards that were popular in rock and roll started to be used by jazz musicians, particularly those who had grown up listening to rock and roll.",
      author: "Gail Giles",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
    {
      title: "Genre Fusion information2",
      snippet:
        "Jazz fusion is a music genre that developed in the late 1960s when musicians combined jazz harmony and improvisation with rock music, funk, and rhythm and blues. Electric guitars, amplifiers, and keyboards that were popular in rock and roll started to be used by jazz musicians, particularly those who had grown up listening to rock and roll.",
      author: "Gail Giles",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
    {
      title: "Genre Fusion information3",
      snippet:
        "Jazz fusion is a music genre that developed in the late 1960s when musicians combined jazz harmony and improvisation with rock music, funk, and rhythm and blues. Electric guitars, amplifiers, and keyboards that were popular in rock and roll started to be used by jazz musicians, particularly those who had grown up listening to rock and roll.",
      author: "Gail Giles",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
  ];
  response.render("index", { blogs: blogs });
});

app.use(express.static("public"));
app.use("/blogs", blogRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
