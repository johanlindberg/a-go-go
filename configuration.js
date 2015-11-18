// setup NS
var agogo = { conf: {}};

agogo.conf.colLabels = "ABCDEFGHJKLMNOPQRST";
agogo.conf.getColLabel = function(col) {
    return agogo.conf.colLabels[col-1];
};
