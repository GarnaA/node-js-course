import {Router} from 'express'
import { body, validationResult } from "express-validator"

const router = Router()

// Product
router.get('/product', (req, res) => {
    res.json({message: 'hello'})
})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), (req, res) => {
  const errors = validationResult(req)
  console.log(errors)

  if (!errors.isEmpty()) {
    res.status(400)
    res.json({ errors: errors.array() })
  }
})
router.post('/product', () => {})
router.delete('/product/:id', () => {})

// Update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

// Update Piont
router.get('/updatepiont', () => {})
router.get('/updatepiont/:id', () => {})
router.put('/updatepiont/:id', () => {})
router.post('/updatepiont', () => {})
router.delete('/updatepiont/:id', () => {})

export default router
