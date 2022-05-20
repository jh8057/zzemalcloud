// 네이버 검색 API예제는 블로그를 비롯 전문자료까지 호출방법이 동일하므로 blog검색만 대표로 예제를 올렸습니다.
// 네이버 검색 Open API 예제 - 블로그 검색

const secret = require('../config/secret.js');

const express = require('express');
const router = express.Router();

let request = require('request');

const client_id = secret.ClientID || '';
const client_secret = secret.ClientSecret || '';

router.get('/search/blog', function (req, res) {
    let api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.keyword); // json 결과

    console.log('SEARCH API START');
    console.log('--------------------');
    console.log('keyword : ', req.query.keyword);
    console.log('--------------------');

    let options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

router.post('/search/trend', function (req, res) {
    console.log('TREND API START');
    console.log('--------------------');
    console.log('keyword : ', req.body.keyword.keywordGroups);
    request.post(
        {
            url: 'https://openapi.naver.com/v1/datalab/search',
            body: JSON.stringify(req.body.keyword),
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret,
                'Content-Type': 'application/json',
            },
        },
        function (error, response, body) {
            console.log('response status : ', response.statusCode);
            res.end(body);
        }
    );
});
module.exports = router;
