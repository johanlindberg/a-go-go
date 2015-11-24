
// Configuration Tests
// -------------------

// Labels
QUnit.test("Column labels", function( assert ) {
    assert.ok( agogo.conf.goban.getColLabel(1) === "A",
	       "First column label is A.");
    assert.ok( agogo.conf.goban.getColLabel(2) === "B",
	       "Second column label is B.");
    assert.ok( agogo.conf.goban.getColLabel(19) === "T",
	       "Last column label is T.");
});

QUnit.test("Row labels", function( assert ) {
    agogo.game.setBoardSize(9);
    assert.ok( agogo.conf.goban.getRowLabel(1) === 9,
	       "First row label on 9x9 is 9.");
    agogo.game.setBoardSize(19);
    assert.ok( agogo.conf.goban.getRowLabel(1) === 19,
	       "First row label on 19x19 is 19.");
    assert.ok( agogo.conf.goban.getRowLabel(19) === 1,
	       "Last row label on 19x19 is 1.");
});

// Vertex/Position conversions
QUnit.test("Vertex conversions", function( assert ) {
    agogo.game.setBoardSize(9);
    assert.ok( agogo.conf.goban.getVertex(1,1) === "A9",
	       "Position 1,1 on 9x9 is A9.");
    assert.ok( agogo.conf.goban.getVertex(5,3) === "E7",
	       "Position 5,3 on 9x9 is E7.");
    assert.ok( agogo.conf.goban.getVertex(9,5) === "J5",
	       "Position 9,5 on 9x9 is J5.");
    agogo.game.setBoardSize(19);
    assert.ok( agogo.conf.goban.getVertex(1,1) === "A19",
	       "Position 1,1 on 19x19 is A19.");
    assert.ok( agogo.conf.goban.getVertex(5,4) === "E16",
	       "Position 5,4 on 19x19 is E16.");
    assert.ok( agogo.conf.goban.getVertex(9,8) === "J12",
	       "Position 9,8 on 19x19 is J12.");
    assert.ok( agogo.conf.goban.getVertex(14,12) === "O8",
	       "Position 14,12 on 19x19 is O8.");
    assert.ok( agogo.conf.goban.getVertex(19,16) === "T4",
	       "Position 19,16 on 19x19 is T4.");
});

QUnit.test("Position conversions", function( assert ) {
    agogo.game.setBoardSize(9);
    assert.deepEqual( agogo.conf.goban.getPosition("A9"), {c:1,r:1},
		      "Position 1,1 on 9x9 is A9.");
    assert.deepEqual( agogo.conf.goban.getPosition("E7"), {c:5,r:3},
		      "Position 5,3 on 9x9 is E7.");
    assert.deepEqual( agogo.conf.goban.getPosition("J5"), {c:9,r:5},
		      "Position 9,5 on 9x9 is J5.");
    agogo.game.setBoardSize(19);
    assert.deepEqual( agogo.conf.goban.getPosition("A19"), {c:1,r:1},
		      "Position 1,1 on 19x19 is A19.");
    assert.deepEqual( agogo.conf.goban.getPosition("E16"), {c:5,r:4},
		      "Position 5,4 on 19x19 is E16.");
    assert.deepEqual( agogo.conf.goban.getPosition("J12"), {c:9,r:8},
		      "Position 9,8 on 19x19 is J12.");
    assert.deepEqual( agogo.conf.goban.getPosition("O8"), {c:14,r:12},
		      "Position 14,12 on 19x19 is O8.");
    assert.deepEqual( agogo.conf.goban.getPosition("T4"), {c:19,r:16},
		      "Position 19,16 on 19x19 is T4.");
});
