const path = require("path");
const fs = require("fs");
const request = require("request");
const redditPath = path.join(__dirname, "./popular-articles.json");
let articles = [];

request("https://www.reddit.com/r/popular.json", (err, res, body) => {
  if (err) {
    console.log(err);
  }

  const redditData = JSON.parse(body).data.children;

  redditData.forEach((reddit) => {
    let articleTitle = reddit.data.title;
    let articleUrl = reddit.data.url;
    let articleSubreddit = reddit.data.subreddit;

    const article = {
      title: articleTitle,
      url: articleUrl,
      subreddit: articleSubreddit,
    };

    articles.push(article);
  });

  console.log(typeof res.body);

  fs.writeFile(redditPath, JSON.stringify(articles), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
