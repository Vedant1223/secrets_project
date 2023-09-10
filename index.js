//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
// it passes the url 

var authentic = false;

function checkPassword(req, res, next){
    const password = req.body["password"];
    if(password ==="ILoveProgramming"){
        authentic =true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (authentic) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
    //   res.sendFile(__dirname + "/public/index.html");
    //   Alternatively 
      res.redirect("/");
    }
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// res.send(`<h1>You are Not Authorized</h1>`);