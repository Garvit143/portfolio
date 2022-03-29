const express = require ('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
require("./db/conn")

const Contact= require("./models/userdata");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public");

const template_path = path.join(__dirname , "../template/views");
const partials_path =path.join(__dirname , "../template/partials");

app.use(express.json());
 

app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));


app.set("view engine" , "hbs")

app.set("views", template_path);
hbs.registerPartials(partials_path);

app.post ('/userdata' , async(req , res) => {
    try{
      const contactData = new Contact ({
          name: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
          address: req.body.address
      })
      const savedata = await contactData.save();
      res.status(201).render('index')
    }
    catch(error){
        res.status(400).send(error);
    }
});


app.get ('/' , (req , res) => {
    res.render('index')
});



app.get ('/blog' , (req , res) => {
    res.render('blog')
});

app.get ('/contact' , (req , res) => {
    res.render('contact')
});

app.get ('/intro' , (req , res) => {
    res.render('intro')
});

app.get ('/services' , (req , res) => {
    res.render('services')
});










app.listen(port , ()=>{
    console.log('server run perfectly ${port}');
} )
