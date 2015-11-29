// setup NS
if (!agogo) {
    var agogo = { conf:   {},
		  goban:  {},
		  game:   {},
		  player: {}, };
}

agogo.init = function() {
    agogo.game.init();
    agogo.player.init();
    agogo.goban.init();
};
