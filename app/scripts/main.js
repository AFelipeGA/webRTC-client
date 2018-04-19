var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true,
    url: 'http://localhost:8888'
});

webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('test');
});