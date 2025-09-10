//1° Passo - importar o userModel
const userModel = require('../model/userModel');

//Função do controller que lista os usuarios
const getAllUsers = (req, res) => {
    //Chamando a função findAll do model
    const users = userModel.findAll();
    //Devolver uma reposta para o cliente
    res.status(200).json(users);
}

//Função do controller que obtem um usuario por ID
const getUserById = (req, res) =>{

    //Pegando o Id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamar o metodo findById do UserModel
    const user = userModel.findById(id);

    if(user){
        //Responder com status code 200 (sucesso)
        //e devolver os dados do usuario em formato json
        res.status(200).json(user);
    }
    else{
        res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
}

//Função do controlador que Cria um novo usuario
const createUser = (req, res) => {

    //Pegando os dados que foram enviados pelo Body da requisição
    const {name, email} = req.body;

    //Validar se os valores foram enviados
    if(!name || !email){
        return res.status(400).json({mensagem: 'Nome e email são Obrigatórios'})
    }
    else{
        const newUser = userModel.create({name, email})
        res.status(201).json(newUser);
    }
}

//Função do controlador que deleta um usuario
const deleteUser = (req, res) => {

//Pegando o Id que foi enviado na requisição
const id = parseInt(req.params.id);

//Excluir o usuario e retornar
const deletedUser = userModel.deleteUser(id);

if(deletedUser){
    res.status(200).json(deletedUser);
  }
  else{
    res.status(400).json({mensagem: 'Informe o id do usuario corretamente'});
  }
}

//Método do controlador para editar um usuário
const updateUser = (req, res) => {

    //1 Passo - pegar os dados que foram enviados pelo Body (corpo) da requisição
    const {id, name, email} = req.body;

    //Validar se foi enviado o id
    if(!id){
        return res.status(400).json({mensagem: 'O id do usuário é obrigatório'});
    }else{
        const dataUser = userModel.updateUser({id,name,email});
        res.status(200).json(dataUser);    
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}