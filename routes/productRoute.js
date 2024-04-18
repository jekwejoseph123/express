const express = require('express')
const {getAllProducts, getSingleProduct, getNewProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router()


// get all products
router.get('/products', getAllProducts)

// get a single product

router.get('/products/:id', getSingleProduct,)

// create a new product

router.post('/products', getNewProduct)

// update a product

router.put('/products/:id', updateProduct)

// delete a product

router.delete('/products/:id', deleteProduct)






module.exports = router