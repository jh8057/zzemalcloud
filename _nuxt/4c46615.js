(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{301:function(n,o,t){t(302),n.exports=t(303)},329:function(n,o,t){t(30);var e=t(330),c=t(447).SECRET_KEY;o.auth=function(n,o,t){try{return n.decoded=e.verify(n.query.token,c),t()}catch(n){if("TokenExpiredError"===n.name)return o.status(419).json({code:419,message:"토큰이 만료되었습니다."});if("JsonWebTokenError"===n.name)return o.status(401).json({code:401,message:"유효하지 않은 토큰입니다."})}}},334:function(n,o){},336:function(n,o){},348:function(n,o){},350:function(n,o){},378:function(n,o){},380:function(n,o){},381:function(n,o){},386:function(n,o){},388:function(n,o){},394:function(n,o){},396:function(n,o){},415:function(n,o){},427:function(n,o){},430:function(n,o){},447:function(n,o){n.exports={PORT:3e3,SECRET_KEY:"jwtsecretkey"}}},[[301,7,1,8]]]);