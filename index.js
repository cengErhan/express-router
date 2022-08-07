const express = require('express')
const app = express()
const PORT = 3001

const userRoute = require('./routes/Users')
const commentsRoute = require('./routes/Comments')

app.use('/users', userRoute)
app.use('/comments', commentsRoute)


app.listen(process.env.PORT || 3001, ()=>{
console.log('Server start on port : ', PORT);
})