const port = 3000

const express = require('express')
const app     = express()

const _BANCO  = require('./produtos')

app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send('bem vindo')
})

app.get('/items',(req,res)=>{
    res.send(_BANCO.getProdutos())
})

app.get('/items/:id',(req,res)=>{
    res.send(_BANCO.getProduto(req.params.id))
})

app.post('/items',(req,res)=>{
    const items = _BANCO.salvarProduto({
        mercadoria: req.body.mercadoria,
        preco: req.body.mercadoria
    })
    res.send(items)
})

app.listen(port,()=>{
    console.log(`online na porta: ${port}`)
})