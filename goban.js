// setup NS
if (!agogo) {
    var agogo = {goban: {}};
} else {
    agogo.goban = {};
}

agogo.goban.init = function() {
    agogo.goban.initBoardSizes();
    var defaultSize = agogo.conf.boardSizes[0];
    agogo.game.boardsize = defaultSize;
    agogo.goban.makeBoard(defaultSize);
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
	agogo.game.boardsize = size;
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
	ctx.font = "20px sans-serif";
	ctx.textAlign = "center";

	canvas.width = (2 + size) * s;
	canvas.height = (2 + size) * s;

	// draw the grid
	for (var i = 0; i < size; i++) {
	    // cols
	    ctx.beginPath();
	    ctx.moveTo(m + (s * i), m);
	    ctx.lineTo(m + (s * i), m + (s * (size - 1)));
	    ctx.stroke();

	    ctx.fillText(agogo.conf.getColLabel(i + 1), m + (s * i), m - s);

	    // rows
	    ctx.beginPath();
	    ctx.moveTo(m, m + (s * i));
	    ctx.lineTo(m + (s * (size - 1)), m + (s * i));
	    ctx.stroke();

	    ctx.fillText(agogo.conf.getRowLabel(i + 1), m - s, m + (s * i));
	}
    }
};
