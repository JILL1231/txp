const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
var Random = Mock.Random

// 请求轮播数据
router.get('/guess', (req, res) => {
    try {
        const mockData = Mock.mock({
            'obj|3': [{
                'id|+1': 0,
                title: Random.ctitle(20, 30),//随机生成一句中文标题
                date: '_' + Random.date('M_dd') + '_' + Random.time('h:mm'),//随机生成时间
                'option|3': [{
                    'id|+1':1,
                    'text': Random.cword(1, 4)
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

// 参与页面数据
router.get('/guessDetail', (req, res) => {
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
                text: Random.cword(1, 4)
            }],
            'supList|3': [{
                'id|+1':1,
                sup: Random.integer(2, 100),
            }]
        })
        console.log(mockData);
        res.json(mockData);
    } catch (error) {
        console.log(error);
        res.json(error);
    }

})

// 请求好友支持A列表数据
router.get('/getList1', (req, res) => {
    try {
        const mockData = Mock.mock({
            'id': 1,
            'list|20': [{
                'listId|+1': 1,
                url:Random.image('100x100','#bbb','tx'),
                friendName: Random.name()  //随机生成一个英文名
            }]
        })
        console.log(mockData);
        res.json(mockData);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

// 请求好友支持B列表数据
router.get('/getList2', (req, res) => {
    try {
        const mockData = Mock.mock({
            'id': 2,
            'list|20': [{
                'listId|+1': 1,
                url:Random.image('100x100','#bbb','tx'),
                friendName: Random.cname() //随机生成一个中文名
            }]
        })
        console.log(mockData);
        res.json(mockData);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

// 请求好友支持C列表数据
router.get('/getList3', (req, res) => {
    try {
        const mockData = Mock.mock({
            'id': 3,
            'list|20': [{
                'listId|+1': 1,
                url:Random.image('100x100','#bbb','tx'),
                friendName: Random.word() //随机生成一个单词
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