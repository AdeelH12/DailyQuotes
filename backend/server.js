const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const path = require("path");
app.use(cors());

app.get("/api/quote", (req, res) =>{
    const quotes = fs.readFile("./quotes.json", "utf-8", (err, data)=>{

        if (err){
          console.log(err)
          return;
        }
        const quotes = JSON.parse(data)
        const randomIndex = Math.floor(Math.random() * quotes.length)
        res.json(quotes[randomIndex])
    })
})

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../build", "index.html"))
})

app.listen(5000, () =>{
    console.log("Server is running on http://localhost:5000")
})