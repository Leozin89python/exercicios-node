const port = 3000

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const Banco = require('./requisicao')

//app.use(express.json())
//app.use(express.urlencoded({    extended:false   }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res) =>{
    res.json({
        texto:'Seja bem vindo!'
    })
})

app.get('/items',(req,res)=>{
    res.send(Banco.getProdutos())
})

app.get('/items/:id',(req,res)=>{
    res.send(Banco.getProduto(req.params.id))
})

app.post('/items',(req,res)=>{
    const item = Banco.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(item)
})

app.listen(port)


