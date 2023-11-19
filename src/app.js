const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express()

// init middlewares
app.use(morgan("dev"))    // xử lý yêu cầu theo  phương thức get 
app.use(helmet()) // chặn lỗ hổng ngăn hacker đục vào  lấy dữ liệu
// app.use(Compression()) // nén dữ liệu trước khi gửi đi giảm đi hẳn 100 lần dung lượng

//init db
require('./dbs/init.mongodb.js')
const { checkOverload } = require('./helpers/check.connect.js') //xem thử có bao nhiều kết nối
checkOverload()
// init router
app.get('/', (req, res, next) => {
    const strCompress = 'hello fantipjs'
    return res.status(200).json({
        message: 'wellcome fantips',
        metadata: strCompress.repeat(1000000)
    })
})

// hadding error
module.exports = app