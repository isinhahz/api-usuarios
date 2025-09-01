
// Importar um modulo do Express
const express = require('express');

//Criar uma aplicação express
const app = express();

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de teste da API
app.get('/api', (req, res)=>{
    res.send("API de Usuários está Funcionando");
});

//Rota para listar Usuarios
app.get('/api/listar',(req,res) =>{

    //Aqui irei desenvolver a logica para listar os usuarios
})

//Rota para cadastrar um usuario
app.post('/api/cadastrar', (req,res) => {
    //Cadastro um Usuario
})

//Iniciar o servidor
app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})