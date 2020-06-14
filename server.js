let express = require("express");
let color = require("./main");
let app = express();

///app.get("/", (req, res) => {
///    res.sendFile("C:/Users/Doğukan/index.html");    
///});

app.use(express.static(__dirname));

app.listen(8080, () =>{
    
    console.log("online");

});

