// setup NS
if (!agogo) {
    var agogo = {conf: { game: {}, goban: {}}};
} else {
    agogo.conf = { game: {},
		   goban: {}, };
}

// Game configurations
// -------------------

agogo.conf.game.availableBoardSizes = [9, 13, 19];
agogo.conf.game.availableHandicaps  = [2, 3, 4, 5, 6, 7, 8, 9];
agogo.conf.game.availableKomis      = [0.5, 6.5];
agogo.conf.game.availableRules      = ['AGA (Area)',
				       'AGA (Territory)',
				       'Japanese'];

// Goban configurations
// --------------------

// Grid
agogo.conf.goban.gridSize  = 30;
agogo.conf.goban.gridColor = '#000000';
agogo.conf.goban.gridWidth = 2;

// Stones
agogo.conf.goban.stoneSize = 26;

// Board
agogo.conf.goban.backgroundColor = '#DDBC6B'

// Labels
agogo.conf.goban.labelFont = '20px sans-serif';

agogo.conf.goban._colLabels = 'ABCDEFGHJKLMNOPQRST';
agogo.conf.goban.getColLabel = function(col) {
    return agogo.conf.goban._colLabels[col-1];
};

agogo.conf.goban.getRowLabel = function(row) {
    return agogo.game.boardsize - row + 1;
};
