const { request, response } = require('express')

const usuariosGet = (req = request, res = response) => {
    res.json({
        mensaje: 'soy un mensaje de la api get con controller',
        nombre: 'get',
        email: 'mario@mail.com'
    })
};

const usuriosPost = (req = request, res = response) => {
    const body = req.body;
    res.json({
        mensaje: 'soy un mensaje de la api post con controller',
        nombre: 'post',
        email: 'mario@mail.com',
        body
    })
};

const usuriosDelete = (req = request, res = response) => {
    res.json({
        mensaje: 'soy un mensaje de la api delete con controller',
        nombre: 'delete',
        email: 'mario@mail.com'
    })
};

const usuriosUpdate = (req = request, res = response) => {
    res.json({
        mensaje: 'soy un mensaje de la api put con controller',
        nombre: 'put',
        email: 'mario@mail.com'
    })
};

module.exports = { usuariosGet, usuriosPost, usuriosDelete, usuriosUpdate };
