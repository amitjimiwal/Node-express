const express=require('express')
const def=require('../controllers/default')

const getallusers=require('../controllers/getallusers')
const createnewuSer=require('../controllers/createnewUser')
const getuser=require('../controllers/getUser')
const router=express.Router()

router.route('/').get(def)

// get all users api
router.route('/user/all').get(getallusers)
router.route('/user/new').post(createnewuSer)
router.route('/userid/:id').get(getuser)
module.exports=router