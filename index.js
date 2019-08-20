const express = require('express')
const app = express()
const port = 3000


app.get('/index',(req,res)=>{
	console.log('hello world!')
})