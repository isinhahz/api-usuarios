//1° Passo - importar o express
const express = require('express');

//2° Passo - criar um router e importar o controller de usuário
const router = express.Router();
const userController = require('../controller/userController');

//3° Passo - Criar as Rotas dos Usuários
router.get('/list', userController.getAllUsers);

module.exports = router;