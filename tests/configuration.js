
QUnit.test("Column labels", function( assert ) {
    assert.ok( agogo.conf.getColLabel(1) === "A", "First column label is A.");
    assert.ok( agogo.conf.getColLabel(2) === "B", "Second column label is B.");
    assert.ok( agogo.conf.getColLabel(19) === "T", "Last column label is T.");
});

QUnit.test("Row labels", function( assert ) {
    agogo.game.setBoardSize(9);
    assert.ok( agogo.conf.getRowLabel(1) === 9, "First row label on 9x9 is 9.");
    agogo.game.setBoardSize(19);
    assert.ok( agogo.conf.getRowLabel(1) === 19, "First row label on 19x19 is 19.");
    assert.ok( agogo.conf.getRowLabel(19) === 1, "Last row label on 19x19 is 1.");
});
