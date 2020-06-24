
//
const express= require('express');

//
const app =express();

//
const port = 8000;

app.listen(port,function(err){

    if(err){
        console.log('there is an error in connecting to the port ');
         return;

    }

    console.log('The server is successfully connected to port no', port );


})
