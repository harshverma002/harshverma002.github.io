const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/"+"style.css");
});
app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/"+"script.js");
});

app.listen(5000,()=>{
    console.log("---app started------")
})


app.use(express.static('public'));
app.use('./images', express.static('images')); 
