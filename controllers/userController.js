exports.getAllUsers = (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Mary'
        },
        {
            id: 3,
            name: 'Peter'
        }
    ])
}

exports.getSingleUser = (req, res) => {
    res.status(200)
    res.json({
        id: 1,
        name: 'John'
    })
}

exports.createNewUser = (req, res) => {
    res.status(200)
    res.json({
        id: 1,
        name: 'John'
    })
}

exports.updateUser = (req, res) => {
    res.status(200)
    res.json({
        id: 1,
        name: 'John'
    })
}

exports.deleteUser = (req, res) => {
    res.status(200)
    res.json({
        id: 1,
        name: 'John'
    })
}