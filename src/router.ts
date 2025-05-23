import {Router} from 'express'
import { body } from "express-validator"
import { handleInputErrors } from './modules/middleware'
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update'

const router = Router()

// Product
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {

})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

// Update
router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
  body('title').optional(), 
  body('body').optional(), 
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(), 
  updateUpdate
)
router.post('/update',   
  body('title').exists().isString(), 
  body('body').exists().isString(), 
  body('productId').exists().isString(),
  createUpdate
)
router.delete('/update/:id', deleteUpdate)

// Update Piont
router.get('/updatepiont', () => {})
router.get('/updatepiont/:id', () => {})
router.put('/updatepiont/:id',
  body('name').optional().isString(), 
  body('description').optional().isString(), 
  () => {}
)
router.post('/updatepiont',   
  body('name').optional().isString(), 
  body('description').optional().isString(),
  body('updateID').exists().isString(),
  () => {}
)
router.delete('/updatepiont/:id', () => {})

router.use((err, req, res, next) => {
  console.log(err)
  res.json({message: "in router handler"})
})

export default router
