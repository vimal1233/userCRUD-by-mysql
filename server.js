const express=require('express');
const serverConfig=require('./configs/server.config')
const router=require('./routes/user.router');
const bodyParser=require('body-parser')


const app=express()
app.use(bodyParser.urlencoded({extended:false}) )
app.use(bodyParser.json())
app.use(router)

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(serverConfig.PORT, serverConfig.HOST, ()=>{
    console.log(`app started at ${serverConfig.PORT}, ${serverConfig.HOST}`)
})

