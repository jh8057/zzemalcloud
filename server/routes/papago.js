// 기본 세팅
const secret = require('../config/secret.js');

var express = require('express');
const router = express.Router();

let request = require('request');

const client_id = secret.ClientID || '';
const client_secret = secret.ClientSecret || '';

router.post('/translate', function (req, res) {
    console.log('translate API START');
    console.log('--------------------');
    console.log('sentence : ', req.body.sentence);
    console.log('--------------------');

    // input data
    const sentence = req.body.sentence;
    const source = req.body.source;
    const target = req.body.target;

    let api_url = 'https://openapi.naver.com/v1/papago/n2mt';

    let options = {
        url: api_url,
        form: { source: source, target: target, text: sentence },
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret },
    };
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

module.exports = router;
