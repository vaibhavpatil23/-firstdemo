const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const vaibhavmiddlewer = (req,res,next)=>{
    console.log(req)
    next()
}
app.use(express.static(path.join(__dirname,"public")))
// app.use(vaibhavmiddlewer)

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello/:name', (req, res) => {
    res.send('hello world'+req.params.name)
    
})
app.get('/about', (req, res) => {
    // res.send('about')
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({"vaibhav": 87})
    
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})