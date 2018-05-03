const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
var Random = Mock.Random



router.post('/seller',(req,res)=>{
    try{
        const mockData = {
            email:Random.email()
        }
        console.log(mockData);
        res.json(mockData);
    }catch(error){
        console.log(error);
        res.json(error);
    }
    
})
module.exports = router;