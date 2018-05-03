const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
var Random = Mock.Random

// 请求轮播数据
router.post('/guess', (req, res) => {
    try {
        const mockData = Mock.mock({
            'obj|3': [{
                'id|+1': 0,
                title: Random.ctitle(20, 30),//随机生成一句中文标题
                date: '_' + Random.date('M_dd') + '_' + Random.time('h:mm'),//随机生成时间
                'option|3': [{
                    'id|+1':1,
                    'text': Random.word(1, 4)
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

// 参与页面请求数据
router.post('/guessDetail', (req, res) => {
    try {
        const mockData = Mock.mock({
            userName: Random.cname(),
            joinNum: Random.integer(2, 300),
            totalNum: Random.integer(300, 800),
            title: Random.ctitle(20, 30),//随机生成一句中文标题
            date: '_' + Random.date('M_dd') + '_' + Random.time('h:mm'),//随机生成时间
            note:Random.cparagraph( 20,30 ),//随机生成一段中文文本,
            'option|3': [{
                'id|+1':1,
                'text': Random.word(1, 4)
            }],
            'supList|3': [{
                'id|+1': 1,
                sup: Random.integer(2, 100),
                'list|1-9': [{
                    'listId|+1': 1,
                    friendName: Random.cname(),
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