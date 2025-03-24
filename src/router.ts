import {Router} from 'express'

const router = Router()

// Product
router.get('/product', (req, res) => {
    res.json({message: 'hello'})
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
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
