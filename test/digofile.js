﻿var digo = require("digo");

exports.default = function () {
    digo.src("fixtures/*.scss").pipe("../");
};
