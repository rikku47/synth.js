"use strict";
exports.__esModule = true;
require("./scsscss/synth.css");
var synth_1 = require("./ts/synth");
var gui_1 = require("./ts/interfaces/gui/gui");
function component() {
    var element = document.createElement("div");
    // Lodash, now imported by this script
    element.id = "synth";
    return element;
}
function start() {
    var startSynth = document.createElement("button");
    startSynth.addEventListener("click", function () {
        var synth = new synth_1.Synth();
        gui_1.createSynth(synth);
    });
    startSynth.textContent = "Start";
    return startSynth;
}
document.body.appendChild(start());
document.body.appendChild(component());
