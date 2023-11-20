 
const express = require("express");
const app = express();
 

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Node server!" });
  });

app.get("/welcome",(req,res)=>{
  res.json({mesage: "welcome to React project hosted on Node server!"});
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
 
const PORT = process.env.PORT || 8080;
 
app.listen(PORT, console.log(`Server started on port ${PORT}`));