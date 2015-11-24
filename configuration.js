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
agogo.conf.goban.gridSize        = 30;
agogo.conf.goban.gridColor       = '#000000';
agogo.conf.goban.gridWidth       = 2;
agogo.conf.goban.gridBorderWidth = 1.5 * agogo.conf.goban.gridSize;

// Stones
agogo.conf.goban.stoneSize       = 14;
agogo.conf.goban.stoneLineWidth  = 2;
agogo.conf.goban.stoneLineColor  = '#000000';
agogo.conf.goban.stoneFillColor1 = '#000000';
agogo.conf.goban.stoneFillColor2 = '#ffffff';

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

// Vertex/Position
agogo.conf.goban.getVertex = function(col, row) {
    return agogo.conf.goban.getColLabel(col) +
	   agogo.conf.goban.getRowLabel(row);
};

agogo.conf.goban.getPosition = function(vertex) {
    var col = agogo.conf.goban._colLabels.indexOf(vertex[0]) + 1;
    var row = agogo.game.boardsize - parseInt(vertex.slice(1), 10) + 1;
    return { c: col, r: row };
};
