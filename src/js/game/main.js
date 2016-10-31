// Get canvas element
var _canvas = document.getElementById('game-view');
var _gameWidth = 800;
var _gameHeight = 600;

// Set the size of the drawable canvas, note that this will be scaled
// by depending on the size specified in the css
_canvas.width = _gameWidth;
_canvas.height = _gameHeight;

window.onload = function() {

    // Get drawable 2D context
    var cc = _canvas.getContext('2d');

    // Background Rectangle
    cc.fillStyle = '#fff';
    cc.fillRect(0, 0, _gameWidth, _gameHeight);

    // Basic text
    cc.fillStyle = '#000';
    cc.font = '16pt Arial';
    cc.fillText('Success! Now you can start making a game!', 20, 40);
};