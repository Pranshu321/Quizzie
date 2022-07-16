const express = require('express');
const router = express.Router();
// const {create , signinG} = require('../public/config/auth')

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login', { register: 'red' });
});

// login handling
router.post('/login', (req, res) => {
    console.log(req.body);
    res.render('dashboard');
});

router.get('/dashboard/form', (req, res) => {
    res.render('formGenerate');
});

router.get('/dashboard/stats' , (req,res)=>{
    res.render('stats');
})
router.get('/active' , (req,res)=>{
    res.render('active');
})

router.get('/contact' , (req,res)=>{
   res.render('contact');
});

router.get('/about' , (req,res)=>{
    res.render('about');
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    res.render('login', { register: 'res' });
    console.log
});

module.exports = router;