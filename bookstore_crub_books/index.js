const express = require('express');
var bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser());

app.get('/',(request,response)=>{
    response.send('Hello World!');
});

//endoint for book operations
const routeControllerBook = require('./src/route/bookstore.route');
app.use('/books',routeControllerBook);


app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});