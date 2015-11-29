agogo.game.init = function() {
    agogo.verticesPlayed = [];
}

agogo.game.initHandicap = function() {
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

agogo.game.initNewGameButton = function() {
    var newGame = document.getElementById('new_game');
    newGame.value = "New Game";
    var f = function() {
	agogo.goban.makeBoard(agogo.game.boardsize);
	agogo.game.placeHandicapStones(agogo.game.handicap);
    };
    newGame.onclick = f;
};

agogo.game.setBoardSize = function(size) {
    agogo.game.boardsize = size;
}

agogo.game.placeHandicapStones = function(handicap) {
    var i;
    var handicapStones = agogo.conf.goban.handicapStones[agogo.game.boardsize][handicap];
    if (handicapStones) {
	for (i = 0; i < handicapStones.length; i++) {
	    agogo.goban.placeStone(handicapStones[i], 1);
	    agogo.verticesPlayed.push(handicapStones[i]);
	}
    }
}
