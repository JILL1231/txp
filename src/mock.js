const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
var Random = Mock.Random

// 请求轮播数据
router.post('/seller', (req, res) => {
    try {
        const mockData = Mock.mock({
            'obj|3':[{
                'id|+1': 0,
                title: Random.ctitle(20, 30),//随机生成一句中文标题
                date: '_' + Random.date('M_dd') + '_' + Random.time('m:ss'),//随机生成时间
                'option|3': [{
                    'text': Random.csentence(1, 4)
                }]
            }]
            
        })
        console.log(mockData);
        res.json(mockData);
    } catch (error) {
        console.log(error);
        res.json(error);
    }

})
module.exports = router;