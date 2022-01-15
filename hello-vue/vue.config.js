/*
    File: vue.config.js
    Type: config file.
    Purpose: Requests which are sent to the below URL, from the client, are
                proxied to the server address.
*/
module.exports = {
    devServer: {
        proxy: 'http://localhost:3000'
    }
}
