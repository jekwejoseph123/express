exports.getAllServices = (req, res) => {
    res.status(200)
    res.json([
        {
            serviceName:'repairs',
            servicePrice: '$10',
        },
        {
            serviceName:'barbing',
            servicePrice: '$15',
        },
        {
            serviceName:'cleaning',
            servicePrice: '$10',
        }
    ])

}

exports.getSingleService =  (req, res) => {
    res.status(200)
    res.json({
        serviceName:'repairs',
        servicePrice: '$10',
    })

} 

exports.getNewService =  (req, res) => {
    res.status(200)
    res.json({
        serviceName:'repairs',
        servicePrice: '$10',
    })

}

exports.updateService =  (req, res) => {
    res.status(200)
    res.json({
        serviceName:'repairs',
        servicePrice: '$10',
    })

}

exports.deleteService =  (req, res) => {
    res.status(200)
    res.json({
        serviceName:'repairs',
        servicePrice: '$10',
    })

} 