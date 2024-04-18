exports.getAllProducts = (request, response) => {
    response.status(200)
    response.json([
        {
            productName:'iphone15',
            productPrice: '$10',

        },

        {
            productName:'iphone11',
            productPrice: '$10',
        },

        {
            productName:'iphone12',
            productPrice: '$10',
        }
    ])

}


exports.getSingleProduct = (request, response) => {
    response.status(200)
    response.json({
        productName:'iphone15',
        productPrice: '$10',

    })

}

exports.getNewProduct =  (request, response) => {
    response.status(200)
    response.json({
        message:'product created successfully'
        

    })

}

exports.updateProduct = (request, response) => {
    response.status(200)
    response.json({
        message:'product updated successfully'
        

    })

}

exports.deleteProduct = (request, response) => {
    response.status(200)
    response.json({
        message:'product deleted successfully'
        

    })

}