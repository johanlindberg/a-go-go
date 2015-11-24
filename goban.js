// setup NS
if (!agogo) {
    var agogo = {goban: {}};
} else {
    agogo.goban = {};
}

agogo.goban.init = function() {
    agogo.goban.initBoardSizes();
    var defaultSize = agogo.conf.game.availableBoardSizes[0];
    agogo.game.boardsize = defaultSize;
    agogo.goban.makeBoard(defaultSize);
};

agogo.goban.initBoardSizes = function() {
    var boardSize = document.getElementById('boardSize');
    var opt;
    for (var i = 0; i < agogo.conf.game.availableBoardSizes.length; i++) {
	opt = document.createElement('option');
	opt.value = agogo.conf.game.availableBoardSizes[i];
	opt.text = agogo.conf.game.availableBoardSizes[i];
	boardSize.add(opt);
    }

    var f = function() {
	var size = agogo.conf.game.availableBoardSizes[boardSize.selectedIndex];
	agogo.game.boardsize = size;
	agogo.goban.makeBoard(size);
    };

    boardSize.onchange = f;
};

agogo.goban.makeBoard = function(size) {
    var canvas = document.getElementById('goban');
    var s = agogo.conf.goban.gridSize;
    var m = 1.5 * s;
    if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = agogo.conf.goban.gridWidth;
	ctx.fillStyle = agogo.conf.goban.gridColor;

	ctx.font = agogo.conf.goban.labelFont;

	canvas.width = (2 + size) * s;
	canvas.height = (2 + size) * s;

	// draw the grid
	for (var i = 0; i < size; i++) {
	    // cols
	    ctx.beginPath();
	    ctx.moveTo(m + (s * i), m);
	    ctx.lineTo(m + (s * i), m + (s * (size - 1)));
	    ctx.stroke();

	    var tm = ctx.measureText(agogo.conf.goban.getColLabel(i + 1));
	    ctx.fillText(agogo.conf.goban.getColLabel(i + 1),
			 m + (s * i) - Math.floor(tm.width / 2),
			 m - s + 4);

	    // rows
	    ctx.beginPath();
	    ctx.moveTo(m, m + (s * i));
	    ctx.lineTo(m + (s * (size - 1)), m + (s * i));
	    ctx.stroke();

	    tm = ctx.measureText(agogo.conf.goban.getRowLabel(i + 1));
	    ctx.fillText(agogo.conf.goban.getRowLabel(i + 1),
			 m - s - Math.floor(tm.width / 2),
			 m + (s * i) + 4);
	}
    }
};
