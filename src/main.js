var connection = new RTCMultiConnection();

// by default, socket.io server is assumed to be deployed on your own URL
connection.socketURL = '/';

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};