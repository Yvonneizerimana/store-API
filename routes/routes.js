import express from 'express';
const router=express.Router();
import controllers from '../controllers/product.js';

router.route('/').get(controllers.getAllProducts)
router.route('/products').get(controllers.getAllProductsStatic)

export default router;