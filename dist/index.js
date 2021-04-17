"use strict";
exports.__esModule = true;
require("./scsscss/synth.css");
var synth_1 = require("./ts/synth");
var gui_1 = require("./ts/interfaces/gui/gui");
function start() {
    var synthjs = document.createElement("div");
    synthjs.id = "synthjs";
    var h1 = document.createElement("h1");
    h1.textContent = "synth.js";
    synthjs.appendChild(h1);
    var h2 = document.createElement("h1");
    h2.textContent = "Introduction";
    synthjs.appendChild(h2);
    var p = document.createElement("p");
    var br = document.createElement("br");
    var a = document.createElement("a");
    p.innerHTML =
        "Hi, this software-synthesizer is just at the beginning. I started with ";
    a.href = "https://www.mozilla.org/en-US/firefox/new/";
    a.innerHTML = "Firefox";
    p.appendChild(a);
    p.innerHTML += " and switched to ";
    a = document.createElement("a");
    a.href =
        "https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en";
    a.innerHTML = "Chrome,";
    p.appendChild(a);
    p.innerHTML += "   respectively added Chrome.";
    synthjs.appendChild(p);
    p = document.createElement("p");
    p.innerHTML += "Reason: Compatibility: ";
    a = document.createElement("a");
    a.href = "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext";
    a.innerHTML = "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext";
    p.appendChild(a);
    p.innerHTML += " look at the bottom and the behavior.";
    synthjs.appendChild(p);
    p = document.createElement("p");
    p.innerHTML +=
        "For example in Chrome you have to start the AudioContext with a gesture, like a tap / click. In Firefox is the policy not so restricted.";
    synthjs.appendChild(p);
    var startSynth = document.createElement("button");
    startSynth.id = "start-synth";
    startSynth.textContent = "Start";
    startSynth.addEventListener("click", function () {
        var synthjs = document.getElementById("synthjs");
        if (synthjs != null) {
            while (synthjs.lastChild) {
                synthjs.lastChild.remove();
            }
            var synth = new synth_1.Synth();
            gui_1.createSynth(synth, synthjs);
        }
    });
    synthjs.appendChild(startSynth);
    return synthjs;
}
document.body.appendChild(start());
