var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello world!");
});

router.get('/hello', function (req, res) {
    res.send("/hello, Hello World!");
});

router.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

router.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

module.exports = router;