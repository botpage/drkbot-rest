__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/html/dark.html')
})

router.get('/ccgen', (req, res) => {
    res.sendFile(__path + '/html/generator.html')
})

router.get('/clock', (req, res) => {
    res.sendFile(__path + '/html/clock.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '#')
})

router.get('/nopage', (req, res) => {
    res.redirect('#')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namebot: 'DrkBot',
            urlbot: 'http://wa.me/573046793853?text=/alive',
            nameowner: 'ianvanh',
            instagram: 'iand_tv'
        }
    }
    res.json(config)
})

module.exports = router