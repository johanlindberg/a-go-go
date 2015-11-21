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

    var f = function() {
	var size = agogo.conf.boardSizes[boardSize.selectedIndex];
	agogo.goban.makeBoard(size);
    };

    boardSize.onchange = f;
};

agogo.goban.makeBoard = function(size) {
    var canvas = document.getElementById('goban');
    var s = agogo.conf.squareSize;
    var m = 1.5 * s;
    if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 2;
	ctx.fillStyle = "black";

	canvas.width = (2 + size) * s;
	canvas.height = (2 + size) * s;

	// draw the grid
	for (var i = 0; i < size; i++) {
	    // cols
	    ctx.beginPath();
	    ctx.moveTo(m + (s * i), m);
	    ctx.lineTo(m + (s * i), m + (s * (size - 1)));
	    ctx.stroke();
	    // rows
	    ctx.beginPath();
	    ctx.moveTo(m, m + (s * i));
	    ctx.lineTo(m + (s * (size - 1)), m + (s * i));
	    ctx.stroke();
	}
    }
};
