//1° Passo - importar o express
const express = require('express');

//2° Passo - criar um router e importar o controller de usuário
const router = express.Router();
const userController = require('../controller/userController');

//3° Passo - Criar as Rotas dos Usuários
router.get('/list', userController.getAllUsers);

//Criando a rota que ira obter os dados do usuario or id
router.get('/:id', userController.getUserById);

//Criando uma rota que ira Criar um novo usuario
router.post('/', userController.createUser);

//Criando uma rota que ira Deletar um usuario
router.delete('/:id', userController.deleteUser);


module.exports = router;