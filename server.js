/*
    File: Server.js
    Type: Server file.
    Purpose: Serves as the server back-end for our app.
*/

let express = require('express')
let routes = require('./routes/routes.js')
let path = require('path')

// Call Express so we can use it.
let app = express()

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

/*
*/
app.use('/api', routes)

// Respond with "Not found!" if we visit an invalid resource.
app.use(function(req, res, next) {
    res.status(404).send('Resource not found! Please check your spelling.')
})

// Use the port defined inside our env file, and if not found, use 3000.
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running in port', server.address().port)
})
