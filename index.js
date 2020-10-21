const express = require('express');
const app = express();

const port = 8000;
//listening on port 8000
//creatig server
app.listen(port,function(err){
    if(err){
        console.log(`error in server: ${err}`)
    };
    console.log("server running");
});
