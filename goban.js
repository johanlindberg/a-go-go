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

    agogo.goban.initHandicap();
    var defaultHandicap = agogo.conf.game.availableHandicaps[0];
    agogo.game.handicap = defaultHandicap;
    agogo.game.placeHandicapStones(defaultHandicap);

    agogo.goban.initNewGameButton();
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
	var s = agogo.conf.game.availableBoardSizes[boardSize.selectedIndex];
	agogo.game.boardsize = s;
    };

    boardSize.onchange = f;
};

agogo.goban.initHandicap = function() {
    var handicap = document.getElementById('handicap');
    var opt;
    for (var i = 0; i < agogo.conf.game.availableHandicaps.length; i++) {
	opt = document.createElement('option');
	opt.value = agogo.conf.game.availableHandicaps[i];
	opt.text = agogo.conf.game.availableHandicaps[i];
	handicap.add(opt);
    }

    var f = function() {
	var h = agogo.conf.game.availableHandicaps[handicap.selectedIndex];
	agogo.game.handicap = h;
    };

    handicap.onchange = f;
};

agogo.goban.initNewGameButton = function() {
    var newGame = document.getElementById('new_game');
    var f = function() {
	agogo.goban.makeBoard(agogo.game.boardsize);
	agogo.game.placeHandicapStones(agogo.game.handicap);
    };
    newGame.onclick = f;
};

agogo.goban.makeBoard = function(size) {
    var canvas = document.getElementById('goban');
    var s = agogo.conf.goban.gridSize;
    var m = agogo.conf.goban.gridBorderWidth;
    if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = agogo.conf.goban.gridWidth;
	ctx.fillStyle = agogo.conf.goban.gridColor;

	ctx.font = agogo.conf.goban.labelFont;

	canvas.width = (2 + size) * s;
	canvas.height = (2 + size) * s;

	// draw the grid
	var i;
	for (i = 0; i < size; i++) {
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

	// draw the star points
	var starPoints = agogo.conf.goban.starPoints[size];
	var p;
	for (i = 0; i < starPoints.length; i++) {
	    p = agogo.conf.goban.getPosition(starPoints[i]);

	    ctx.beginPath();
	    ctx.arc(m + (s * (p.c - 1)), m + (s * (p.r - 1)),
		    agogo.conf.goban.starPointSize,
		    0, 2 * Math.PI);
	    ctx.fill();
	}
    }
};

agogo.goban.placeStone = function(vertex, player) {
    var canvas = document.getElementById('goban');
    var s = agogo.conf.goban.gridSize;
    var m = agogo.conf.goban.gridBorderWidth;
    if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = agogo.conf.goban.stoneLineWidth;
	ctx.fillStyle = player === 1 ?
	    agogo.conf.goban.stoneFillColor1 : agogo.conf.goban.stoneFillColor2;

	var p = agogo.conf.goban.getPosition(vertex);

	// draw the stone (black or white)
	ctx.beginPath();
	ctx.arc(m + (s * (p.c - 1)), m + (s * (p.r - 1)),
		agogo.conf.goban.stoneSize,
		0, 2 * Math.PI);
	ctx.fill();

	// and the line around the stone (always black)
	ctx.fillStyle = agogo.conf.goban.stoneLineColor;
	ctx.beginPath();
	ctx.arc(m + (s * (p.c - 1)), m + (s * (p.r - 1)),
		agogo.conf.goban.stoneSize,
		0, 2 * Math.PI);
	ctx.stroke();
    }
};
