const express = require("express");
const router = express.Router();

//환경변수config
const configEnv = require("../config.js");
const jwt = require("jsonwebtoken");

const { auth } = require("../../middleware/checkAuth.js");
const SECRET_KEY = configEnv.SECRET_KEY;

//Login 토큰생성
router.post("/login", (req, res) => {
  const memID = req.body.memID;
  const memPW = req.body.memPW;

  if (memID === "1005" && memPW === "0511") {
    const token = jwt.sign(
      //payload
      {
        type: "JWT",
        memID,
      },
      //secretkey
      SECRET_KEY,
      //option
      {
        expiresIn: "15m",
        issuer: "토큰발급자",
      }
    );

    return res.status(200).json({
      code: 200,
      msg: "토큰이 발급되었습니다",
      token,
    });
  }
  return res.json({ msg: "다시 시도해보세요" });
});

//토큰 체크 & 토큰으로 데이터 얻어오기
router.get("/tokenCheck", auth, (req, res) => {
  const memID = req.decoded.memID;

  return res.status(200).json({
    code: 200,
    message: "토큰은 정상입니다.",
    data: {
      memID,
    },
  });
});

module.exports = router;
