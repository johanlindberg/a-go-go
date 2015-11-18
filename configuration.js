// setup NS
if (!agogo) {
    var agogo = {conf: {}};
} else {
    agogo.conf = {};
}


agogo.conf.colLabels = "ABCDEFGHJKLMNOPQRST";
agogo.conf.getColLabel = function(col) {
    return agogo.conf.colLabels[col-1];
};

agogo.conf.getRowLabel = function(row) {
    return agogo.game.boardsize - row + 1;
};
