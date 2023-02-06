import express from "express"
import productsRouter from './products'
import orderRouter from './orders'

import { body, validationResult } from 'express-validator'
// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP!!! BOOP",
	})
})

/**
 * [EXAMPLE] /resource
 */
router.use('/products', productsRouter)


router.use('/orders', orderRouter)


export default router

