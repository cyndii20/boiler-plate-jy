//시작점
const express = require('express') //express 모듈 가져오기
const app = express() //express 앱을 만듦
const port = 5000    //5000번 백서버를 이용

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeongyeon:jiwooseo2002@cluster0.axcbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlparser: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))






app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))  //5000번 port에 앱 실행