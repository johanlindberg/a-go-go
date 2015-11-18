
QUnit.test("Column labels", function( assert ) {
    assert.ok( agogo.conf.getColLabel(1) == "A", "First column label is A.");
    assert.ok( agogo.conf.getColLabel(2) == "B", "Second column label is B.");
});
