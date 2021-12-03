//connecting with remot mongo DB
const mongoose = require('mongoose')
require('dotenv').config

const options ={
    useNewUrlParser:true,
    useUnifiedTopolgy:true

}
mongoose .connect(process.env.DB).then(()=>{
    console.log('DB OK');
})
