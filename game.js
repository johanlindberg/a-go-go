// setup NS
if (!agogo) {
    var agogo = {game: {}};
} else {
    agogo.game = {};
}

agogo.game.setBoardSize = function(size) {
    agogo.game.boardsize = size;
}
