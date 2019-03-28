const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const ioServer = require('socket.io');
const RTCMultiConnectionServer = require('rtcmulticonnection-server');


const jsonPath = {
    config:'config.json',
    logs:'logs.json'
}

const getValuesFromConfigJson = RTCMultiConnectionServer.getValuesFromConfigJson;
var config = getValuesFromConfigJson(jsonPath);

app.set('view engine','ejs');
app.set('views','./views')

// app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.static('node_modules/webrtc-adapter/out'));


app.use('/lti',require('./lti'));

app.get('/VBC',(req, res)=>{
    res.render('index');    
});


server.listen(3000, ()=>{
    console.log('Server stated at port: 3000');
});


ioServer(server).on('connection', function(socket) {
    RTCMultiConnectionServer.addSocket(socket, config);

    // ----------------------
    // below code is optional

    // const params = socket.handshake.query;

    // if (!params.socketCustomEvent) {
    //     params.socketCustomEvent = 'custom-message';
    // }

    // socket.on(params.socketCustomEvent, function(message) {
    //     socket.broadcast.emit(params.socketCustomEvent, message);
    // });
});



