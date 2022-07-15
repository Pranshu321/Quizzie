const express = require('express');
const router = express.Router();
// const {create , signinG} = require('../public/config/auth')

const res = [1,2]

router.get('/' , (req,res)=>{
    res.render('home');
});

router.get('/login' , (req,res)=>{
    res.render('login' , {register: 'red'});
});

// login handling
router.post('/login' , (req,res)=>{
    console.log(req.body);
})

router.get('/register' , (req,res)=>{
    res.render('register');
});

router.post('/register' , (req,res)=>{
    console.log(req.body);
    res.render('login' , {register: 'res'});
})

module.exports = router;