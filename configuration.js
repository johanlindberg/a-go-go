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
agogo.conf.game.availableHandicaps  = [0, 2, 3, 4, 5, 6, 7, 8, 9];
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
agogo.conf.goban.stoneLineWidth  = 1;
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

// Handicap stones
agogo.conf.goban.starPointSize = 5;
agogo.conf.goban.starPoints = {
    19 : ['D4', 'Q16', 'D16', 'Q4', 'D10', 'Q10', 'K4', 'K16', 'K10'],
    13 : ['D4', 'K10', 'D10', 'K4', 'G7'],
     9 : ['C3',  'G7',  'C7', 'G3', 'E5'], };
agogo.conf.goban.handicapStones = {
    19 : { 2 : ['D4', 'Q16'],
	   3 : ['D4', 'Q16', 'D16'],
	   4 : ['D4', 'Q16', 'D16', 'Q4'],
	   5 : ['D4', 'Q16', 'D16', 'Q4', 'K10'],
	   6 : ['D4', 'Q16', 'D16', 'Q4', 'D10', 'Q10'],
	   7 : ['D4', 'Q16', 'D16', 'Q4', 'D10', 'Q10', 'K10'],
	   8 : ['D4', 'Q16', 'D16', 'Q4', 'D10', 'Q10', 'K4', 'K16'],
	   9 : ['D4', 'Q16', 'D16', 'Q4', 'D10', 'Q10', 'K4', 'K16', 'K10'], },
    13 : { 2 : ['D4', 'K10'],
	   3 : ['D4', 'K10', 'D10'],
	   4 : ['D4', 'K10', 'D10', 'K4'],
	   5 : ['D4', 'K10', 'D10', 'K4', 'G7'],
	   6 : ['D4', 'K10', 'D10', 'K4', 'D7', 'K7'],
	   7 : ['D4', 'K10', 'D10', 'K4', 'D7', 'K7', 'G7'],
	   8 : ['D4', 'K10', 'D10', 'K4', 'D7', 'K7', 'G4', 'G10'],
	   9 : ['D4', 'K10', 'D10', 'K4', 'D7', 'K7', 'G4', 'G10', 'G7'], },
     9 : { 2 : ['C3', 'G7'],
	   3 : ['C3', 'G7', 'C7'],
	   4 : ['C3', 'G7', 'C7', 'G3'],
	   5 : ['C3', 'G7', 'C7', 'G3', 'E5'],
	   6 : ['C3', 'G7', 'C7', 'G3', 'C5', 'G5'],
	   7 : ['C3', 'G7', 'C7', 'G3', 'C5', 'G5', 'E5'],
	   8 : ['C3', 'G7', 'C7', 'G3', 'C5', 'G5', 'E3', 'E7'],
	   9 : ['C3', 'G7', 'C7', 'G3', 'C5', 'G5', 'E3', 'E7', 'E5'], }, };
