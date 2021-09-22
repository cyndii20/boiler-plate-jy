//시작점
const express = require('express') //express 모듈 가져오기
const app = express() //express 앱을 만듦
const port = 5000    //5000번 백서버를 이용
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');

//appplication/x-www-form-encoded 정보 가져오기
app.use(bodyParser.urlencoded({extended: true}));
//application/json 가져오기
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlparser: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World! 반갑습니다! 안녕하세요~'))



app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다

    const user = new User(req.body) //bodyparser이용
//mongoDB 이용
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true}) //성공 
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))  //5000번 port에 앱 실행