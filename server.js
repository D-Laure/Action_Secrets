const express = require("express");

const PORT = process.env.PORT || 5503; 

let app = express();

app.use(express.static('frontend'));

app.listen(PORT, ()=> {
    console.log("Server auf Port $(PORT)");
});