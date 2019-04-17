const express = require('express');
const router = express.Router();
//controller which handles routing
const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);

router.get('/list', product_controller.list);

router.post('/create', product_controller.product_create);

router.get('/:string', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

router.get('/id/:id', product_controller.product_details_byid);

module.exports = router;
