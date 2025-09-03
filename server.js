
// Importar um modulo do Express
const express = require('express');

//Importar o arquivo das rotas dos usuários
const userRoutes = require('./src/routes/userRoutes');


//Criar uma aplicação express
const app = express();

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de teste da API
app.get('/api', (req, res)=>{
    res.send("API de Usuários está Funcionando");
});

//Configurando as rotas de usuario
app.use('/api/users', userRoutes);

//Iniciar o servidor
app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})