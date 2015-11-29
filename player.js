agogo.player.init = function() {
    agogo.game.player = [null, null, null];
    agogo.player.initPlayer('player1');
    agogo.player.initPlayer('player2');
    var defaultPlayer1 = agogo.conf.player.availablePlayers[0];
    var defaultPlayer2 = agogo.conf.player.availablePlayers[0];
    agogo.game.player[1] = agogo.player[defaultPlayer1]();
    agogo.game.player[2] = agogo.player[defaultPlayer2]();
};

agogo.player.initPlayer = function(p) {
    var player = document.getElementById(p);
    var opt;
    for (var i = 0; i < agogo.conf.player.availablePlayers.length; i++) {
	opt = document.createElement('option');
	opt.value = agogo.conf.player.availablePlayers[i];
	opt.text = agogo.conf.player.availablePlayers[i];
	player.add(opt);
    }

    var f = function() {
	var s = agogo.conf.player.availablePlayers[player.selectedIndex];
	agogo.game[p] = agogo.player[s]();
    };

    player.onchange = f;
};

// Players
// -------
agogo.player.Random = function() {
    return {
	genmove: function() {
	    var col = Math.floor(Math.random() * agogo.game.boardsize) + 1;
	    var row = Math.floor(Math.random() * agogo.game.boardsize) + 1;
	    var vertex = agogo.conf.goban.getVertex(col, row);
	    while (agogo.game.verticesPlayed.indexOf(vertex) !== -1) {
		col = Math.floor(Math.random() * agogo.game.boardsize) + 1;
		row = Math.floor(Math.random() * agogo.game.boardsize) + 1;
		vertex = agogo.conf.goban.getVertex(col, row);		
	    }
	    return vertex;
	}
    };
}

agogo.player.Human = agogo.player.Random;
