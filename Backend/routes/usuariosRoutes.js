const express = require('express');
const usuariosController = require('../controllers/usuarioController.js');
const router = express.Router();
router.get('/verClientes', usuariosController.getAllUsuariosClientes);
router.get('/verAdministador', usuariosController.getAllUsuariosadministrador);
router.get('/verUsuario/:id', usuariosController.getUsuarioById);
router.post('/crearUsuario', usuariosController.upload.single('foto'), usuariosController.createUsuario);
router.put('/actualizarUsuario/:id', usuariosController.updateUsuario);
router.delete('/borrarUsuario/:id', usuariosController.deleteUsuario);
router.post('/login', usuariosController.loginUsuario);
module.exports = router;
