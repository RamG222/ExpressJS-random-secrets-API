import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://secrets-api.appbrewery.com/random");
    const data = await response.json();
    res.render("index.ejs", {
      secret: data.secret,
      user: data.username,
    });
  } catch (error){
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
