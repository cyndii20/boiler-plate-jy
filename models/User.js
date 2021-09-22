const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //space없애주는 역할
        uniqe: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number, //1=괸리자 0=일반유저
        default: 0 //기본값
    },
    image:String,
    token:{
        type: String,   //유효성 관리
    },
    tokenExp: {   //유효기간
        type: Number
    }
})
//schema를 model로 감싼다
const User = mongoose.model('User', userSchema)  //이름, 스키마

//model을 다른 파일로도 사용 가능하도록 export
module.exports = { User }