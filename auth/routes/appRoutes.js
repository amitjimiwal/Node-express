const express=require('express')
const router=express.Router();
const getForm=require('../controllers/form')
const Login=require('../controllers/login')
const Logout=require('../controllers/logout')


router.route('/').get(getForm)

router.route('/login').post(Login)
router.route('/logout').get(Logout)

module.exports=router