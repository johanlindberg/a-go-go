// setup NS
if (!agogo) {
    var agogo = { conf:  {},
		  goban: {},
		  game:  {}, };
}

agogo.init = function() {
    agogo.goban.init();
};
