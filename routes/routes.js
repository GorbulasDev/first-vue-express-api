const express = require('express')
const router = express.Router()

// Define a route to "/".
router.get('/', (req, res, next) => {
    res.json( { "message" : "hello" })
})

// Export the router object to be used by another file.
module.exports = router
