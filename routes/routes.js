const express = require('express')
const router = express.Router()

/* Define a route to "/api". See server.js.
    and return a JSON response to the client.
*/
router.get('/', (req, res, next) => {
    res.json({ "message" : "hello" })
})

// Export the router object to be used by another file.
module.exports = router
