const port = 3000

const express    = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({    extended:true   }))

require('./controllers/authController')(app)

app.listen(port,()=>{
    console.log(`*  online  - port: ${port}  *`)
})



/**protocolo(GET) que obtém da url */
app.get('/get',(req,res)=>{
    res.send({resp:'método GET'})
})
/**protocolo(PUT) que altera um elemento na url */
app.put('/put',(req,res)=>{
    res.send({resp:'método PUT'})
})
/**protocolo(POST)  que inseri um elemento na url */
app.post('/post',(req,res)=>{
    res.send({resp:'método POST'})
})
/**protocolo(DELETE) deleta o elemento da url */
app.delete('/delete',(req,res)=>{
    res.send({resp:'método DELETE'})
})
/**protocolo(USE) que utiliza outros vários(aceito) ex:POST,PUT,GET<DELETE,PATCH..... */
app.use('/put-on',(req,res)=>{
    res.send({resp:'método USE'})
})


