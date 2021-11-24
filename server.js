let express = require('express')
let routes = require('./routes/routes.js')

// Create our new Express app.
let app = express()

// Use our routes defined in routes.js.
app.use('/api', routes)

// Use the port defined inside our env file, and if not found, use 3000.
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running in port', server.address().port)
})
