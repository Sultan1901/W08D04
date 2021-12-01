const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
dotenv.config()
require('./db')


const cors = require('cors')
app.use(cors())
app.use(express())
app.use(express.json())

const roleRouter = require("./routes/router/role");
app.use(roleRouter);
const userRouter = require("./routes/router/user");
app.use(userRouter);
const postRouter = require("./routes/router/post");
app.use(postRouter);

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`SERVER UNDER ATT4CK ON ${PORT}`);
})