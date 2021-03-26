// Requere o package express que contém uma função e a atribui
// para a constante express (express agora é uma função)
const express = require("express")
// Atribui a server o que for executado pela função express()
const server = express()
// Importa as rotas
const routes = require('./routes')

server.set('view engine', 'ejs')

// Passa para o server o que ele irá usar
// Habilitar arquivos estáticos
server.use(express.static("public"))

// Rotas
server.use(routes)

server.listen(3000, () => console.log("rodando"))