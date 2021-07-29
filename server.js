// IMPORTAR DEPENDÊNCIAS
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')

// CONFIGURAÇÕES INICIAIS
const app = express()
var login = 'admin'
var password = '123456'

app.use(session({secret: 'teste'}))
app.use(bodyParser.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))

// ESTABELECER ROTAS
app.post('/', (req, res)=>{
    if(req.body.password == password && req.body.login == login){
        req.session.login = login;
        res.render('inicial')
    }

    else{
        res.render('index')
    }
})



app.get('/', (req, res)=>{
    if(req.session.login){
        res.render('inicial')
    }
    
    res.render('index')
})



// INICIAR O SERVIDOR

app.listen(8000, ()=>{
    console.log('Server no ar!')
})

//http://localhost:8000/