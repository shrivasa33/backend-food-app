const express = require('express')
const app = express()
// const rateLimit = require("express-rate-limit")
// const compression = require('compression')
const methodOverride = require('method-override');
var cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(cors());


// const mongoSanitize = require('express-mongo-sanitize')
// const xss = require('xss-clean')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/order')
var path = require("path");

// app.use(compression())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'public')))

app.use('/', express.static(path.join('public/uploads/')))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public'))
})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
// app.use(methodOverride('_method'));
app.use((req,res,next)=>{
    console.log("middle ware calling")
    next();  
})
// app.use(mongoSanitize());
// app.use(xss());
//  const limiter = rateLimit({
//     max:100,
//     windowMs:60*60*1000,
//     message:"too many request try again in an hour"
// })
// app.use('/api',limiter)
app.use('/api/users',userRouter)
app.use('/api/products',productRouter)
app.use('/api/orders',orderRouter)
module.exports = app;