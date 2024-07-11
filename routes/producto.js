const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

//api/productos
router.post('/',productoController.crearProductos)
router.get('/',productoController.obtenerProductos)
router.put('/:id',productoController.actualizarProductos)
router.get('/:id',productoController.obtenerProducto)
router.delete('/:id',productoController.eliminarProducto)
module.exports = router;