// setup NS
if (!agogo) {
    var agogo = {goban: {}};
} else {
    agogo.goban = {};
}

agogo.goban.init = function() {
    agogo.goban.initBoardSizes();
    agogo.goban.makeBoard(agogo.conf.boardSizes[0]);
};

agogo.goban.initBoardSizes = function() {
    var boardSize = document.getElementById('boardSize');
    var opt;
    for (var i = 0; i < agogo.conf.boardSizes.length; i++) {
	opt = document.createElement('option');
	opt.value = agogo.conf.boardSizes[i];
	opt.text = agogo.conf.boardSizes[i];
	boardSize.add(opt);
    }
};

agogo.goban.makeBoard = function(size) {
    var canvas = document.getElementById('goban');
    if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	canvas.width = size * agogo.conf.squareSize;
	canvas.height = size * agogo.conf.squareSize;
    }
};
