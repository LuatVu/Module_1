var connection = new RTCMultiConnection();

// by default, socket.io server is assumed to be deployed on your own URL
connection.socketURL = '/';

connection.session = {
    audio: true,
    video: true,
    // screen:true,
    oneway: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};


var connection_2 = new RTCMultiConnection();

// by default, socket.io server is assumed to be deployed on your own URL
connection_2.socketURL = '/';

connection_2.session = {
    // audio: true,
    // video: true,
    screen:true,
    oneway: true
};

connection_2.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};