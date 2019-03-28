const path = require('path');
module.exports = {
    mode:'development',    
    entry:{    
        'RTCMultiConnection':'./src/RTCMultiConnection.js'
    },
    output: {
        path: path.resolve(__dirname,'./public'),
        filename: '[name].js'
    }
 }