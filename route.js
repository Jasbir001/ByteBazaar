const express = require('express')
const multer = require('multer')
const path = require('path')

const myroute = express.Router();

myroute.get('/',(req,res)=>{
    res.render('Home')
})
// ------------------------------
const conatct_obj = require('./Controllers/ContactController')
const Home_obj = require('./Controllers/HomeController')
const authanticaton = require('./Controllers/Authantication')
const products_obj = require('./Controllers/ProductsControllers')

myroute.use('/contact',(req,res)=>{
conatct_obj.get_contact_page(req,res)
})

myroute.post('/enqirey',(req,res)=>{
    Home_obj.enquirey_form(req,res)
})

myroute.use('/NewUser',(req,res)=>{
    authanticaton.new_user(req,res)
})
myroute.use('/Login',(req,res)=>{
    authanticaton.login_user(req,res)
})

myroute.use('/Products',(req,res)=>{
    products_obj.products_show(req,res)
})

module.exports = myroute;