const path=require('path');

const express = require('express');

const app = express();

const PORT= process.env.PORT || 3000;

app.listen(PORT,(req,res)=>{

    console.log(` ejecutando la app de node ${PORT}`);

});

//app.get("/",function(req,res){
  //  res.send("Hello, world");
//})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src/view'));
app.use(express.static('src/static/'));
app.use(express.static (__dirname + 'node_modules/bootstrap/dist'));



app.get('/', function(req, res) {
    var mascots = [
        { nombre: 'Sammy', ficha: "101010", año: 2012},
        { nombre: 'Tux', ficha: "787878", año: 1996},
        { nombre: 'Moby Dock', ficha: "8956", año: 2013}
    ];
    var tagline = "amores";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});


app.get('/error', (req, res)=> {
    res.render('pages/error');
});

app.get('/registrar', (req, res)=> {
    res.render('pages/registrar');
});