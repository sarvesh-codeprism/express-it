const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test title",
      createdAt: Date.now(),
      description: "Test description",
    },
    {
      title: "Test2 title",
      createdAt: Date.now(),
      description: "Test2 description",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(3000);
