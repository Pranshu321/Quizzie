const express = require('express');
const app = express();
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req,res)=>{
    res.render('home');
})


app.use('/', require('./router/routing.js'));
app.listen(process.env.PORT || 3000 , ()=>{
  console.log("Server running at port 3000");
})
