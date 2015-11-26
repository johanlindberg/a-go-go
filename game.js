// setup NS
if (!agogo) {
    var agogo = {game: {}};
} else {
    agogo.game = {};
}

agogo.game.init = function() {
    agogo.verticesPlayed = [];
}

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
