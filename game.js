agogo.game.init = function() {
    agogo.game.verticesPlayed = [];
    agogo.game.currentPlayer = 1;
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
	agogo.game.init();
	agogo.game.placeHandicapStones(agogo.game.handicap);
	agogo.game.play();
    };
    newGame.onclick = f;
};

agogo.game.setBoardSize = function(size) {
    agogo.game.boardsize = size;
}

agogo.game.placeHandicapStones = function(handicap) {
    var i;
    var handicapStones = agogo.conf.goban.handicapStones[agogo.game.boardsize][handicap];
    if (handicapStones > 0) {
	for (i = 0; i < handicapStones.length; i++) {
	    agogo.goban.placeStone(handicapStones[i], 1);
	    agogo.game.verticesPlayed.push(handicapStones[i]);
	}
	// white starts if handicap stones are used
	agogo.game.currentPlayer = 2;
    }
}

agogo.game.play = function() {
    var vertex;
    while (agogo.game.verticesPlayed.length <
	   agogo.game.boardsize * agogo.game.boardsize) {
	vertex = agogo.game.player['player'+ agogo.game.currentPlayer].genmove();
	agogo.goban.placeStone(vertex, agogo.game.currentPlayer);
	agogo.game.verticesPlayed.push(vertex);

	// next player
	agogo.game.currentPlayer = (1 - (agogo.game.currentPlayer - 1)) + 1;
    }
}
