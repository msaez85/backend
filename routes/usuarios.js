const { Router } = require('express');
const { usuariosGet, usuriosPost, usuriosDelete, usuriosUpdate } = require('../controllers/userControllers')
const router = Router();

router.get('/usuarios', usuariosGet);
router.put('/usuarios/:id', usuriosUpdate);
router.delete('/usuarios/:id', usuriosDelete);
router.post('/usuarios', usuriosPost);

module.exports = router;