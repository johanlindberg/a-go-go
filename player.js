agogo.player.init = function() {
    agogo.player.initPlayer1();
    agogo.player.initPlayer2();
    var defaultPlayer1 = agogo.conf.player.availablePlayers[0];
    var defaultPlayer2 = agogo.conf.player.availablePlayers[0];
    agogo.game.player1 = defaultPlayer1;
    agogo.game.player2 = defaultPlayer2;
};

agogo.player.initPlayer1 = function() {
    agogo.player.initPlayer(document.getElementById('player1'));
};

agogo.player.initPlayer2 = function() {
    agogo.player.initPlayer(document.getElementById('player2'));
};

agogo.player.initPlayer = function(el) {
    var player = el;
    var opt;
    for (var i = 0; i < agogo.conf.player.availablePlayers.length; i++) {
	opt = document.createElement('option');
	opt.value = agogo.conf.player.availablePlayers[i];
	opt.text = agogo.conf.player.availablePlayers[i];
	player.add(opt);
    }

    var f = function() {
	var s = agogo.conf.player.availablePlayers[player.selectedIndex];
	agogo.game.player1 = s;
    };

    player.onchange = f;
};

