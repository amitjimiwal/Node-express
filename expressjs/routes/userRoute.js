const express=require('express')
const router=express.Router();
const getForm=require('../controllers/getForm')
const registerUser=require("../controllers/userController")

// creating routes with the functions
router.route("/register").post(registerUser)

router.route('/').get(getForm)

module.exports=router