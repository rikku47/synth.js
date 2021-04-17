/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scsscss/synth.css":
/*!*******************************!*\
  !*** ./src/scsscss/synth.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/classes/envelope.ts":
/*!************************************!*\
  !*** ./src/ts/classes/envelope.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Envelope": () => (/* binding */ Envelope)
/* harmony export */ });
class Envelope extends GainNode {
    constructor(context, inputNodes, outputNodes, options) {
        super(context, options);
        this._inputNodes = [];
        this._outputNodes = [];
        if (inputNodes != undefined) {
            this._inputNodes = inputNodes;
        }
        if (outputNodes != undefined) {
            this._outputNodes = outputNodes;
        }
        this._envelopeShape = {
            attack: {
                time: 0.1,
                peak: 1,
                type: "linear",
            },
            decay: {
                time: 0.04,
                peak: 0.2,
                type: "linear",
            },
            sustain: {
                time: 0.0,
            },
            release: {
                time: 0.04,
                type: "linear",
            },
        };
        this._status = false;
    }
    get InputNodes() {
        return this._inputNodes;
    }
    set InputNodes(value) {
        this._inputNodes = value;
    }
    get OutputNodes() {
        return this._outputNodes;
    }
    set OutputNodes(value) {
        this._outputNodes = value;
    }
    get EnvelopeShape() {
        return this._envelopeShape;
    }
    set EnvelopeShape(value) {
        this._envelopeShape = value;
    }
    get Status() {
        return this._status;
    }
    set Status(value) {
        this._status = value;
    }
    toggle() {
        let now = this.context.currentTime;
        let attackTime = now + this.EnvelopeShape.attack.time;
        let decayTime = attackTime + this.EnvelopeShape.decay.time;
        let sustainTime = decayTime + this.EnvelopeShape.sustain.time;
        let releaseTime = sustainTime + this.EnvelopeShape.release.time;
        this.gain.cancelScheduledValues(0);
        this.gain.value = 0;
        if (this.EnvelopeShape.attack.type == "linear") {
            this.gain.linearRampToValueAtTime(this.EnvelopeShape.attack.peak, attackTime);
        }
        else {
            this.gain.exponentialRampToValueAtTime(this.EnvelopeShape.attack.peak, attackTime);
        }
        if (this.EnvelopeShape.decay.type == "linear") {
            this.gain.linearRampToValueAtTime(this.EnvelopeShape.decay.peak, decayTime);
        }
        else {
            this.gain.exponentialRampToValueAtTime(this.EnvelopeShape.decay.peak, decayTime);
        }
        this.gain.linearRampToValueAtTime(this.EnvelopeShape.decay.peak, sustainTime);
        if (this.EnvelopeShape.release.type == "linear") {
            this.gain.linearRampToValueAtTime(0.0001, releaseTime);
        }
        else {
            this.gain.exponentialRampToValueAtTime(0.0001, releaseTime);
        }
    }
}


/***/ }),

/***/ "./src/ts/classes/oscillator.ts":
/*!**************************************!*\
  !*** ./src/ts/classes/oscillator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oscillator": () => (/* binding */ Oscillator)
/* harmony export */ });
class Oscillator extends OscillatorNode {
    constructor(context, destinationNode, options) {
        super(context, options);
        if (destinationNode != undefined) {
            this._destinationNode = destinationNode;
        }
        else {
            this._destinationNode = this.context.destination;
        }
    }
    get DestinationNode() {
        return this._destinationNode;
    }
    set DestinationNode(value) {
        this._destinationNode = value;
    }
    changeOscillatorType(type) {
        this.type = type;
    }
}



/***/ }),

/***/ "./src/ts/classes/volume.ts":
/*!**********************************!*\
  !*** ./src/ts/classes/volume.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Volume": () => (/* binding */ Volume)
/* harmony export */ });
class Volume extends GainNode {
    constructor(context, destinationNode, inputNodes, options) {
        super(context, options);
        this._inputNodes = [];
        this._outputNodes = [];
        if (inputNodes != undefined) {
            this._inputNodes = inputNodes;
        }
        ;
        if (destinationNode != undefined) {
            this.OutputNodes.push(destinationNode);
            this.connect(destinationNode);
        }
        ;
        this.gain.value = 0.2;
    }
    get InputNodes() {
        return this._inputNodes;
    }
    set InputNodes(value) {
        this._inputNodes = value;
    }
    get OutputNodes() {
        return this._outputNodes;
    }
    set OutputNodes(value) {
        this._outputNodes = value;
    }
}



/***/ }),

/***/ "./src/ts/interfaces/gui/gui.ts":
/*!**************************************!*\
  !*** ./src/ts/interfaces/gui/gui.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSynth": () => (/* binding */ createSynth)
/* harmony export */ });
function createSynth(synthjs, element) {
    let synthContainer = element;
    if (synthContainer != null) {
        let oscillatorsDiv = document.createElement("div");
        synthjs.Oscillators.forEach((oscillator) => {
            let oscillatorDiv = document.createElement("div");
            let select = document.createElement("select");
            select.appendChild(createOption("sine"));
            select.appendChild(createOption("square"));
            select.appendChild(createOption("triangle"));
            select.appendChild(createOption("sawtooth"));
            select.addEventListener("change", (ev) => {
                oscillator.changeOscillatorType(ev.srcElement.value);
            });
            oscillatorDiv.appendChild(createLabel("OSC", "OSC"));
            oscillatorDiv.appendChild(select);
            let buttonStart = document.createElement("button");
            buttonStart.addEventListener("click", () => {
                oscillator.start();
            });
            buttonStart.textContent = "Start (Create)";
            let buttonDisconnect = document.createElement("button");
            buttonDisconnect.addEventListener("click", () => {
                oscillator.disconnect();
            });
            buttonDisconnect.textContent = "Disconnect";
            let buttonConnect = document.createElement("button");
            buttonConnect.addEventListener("click", () => {
                oscillator.connect(oscillator.DestinationNode);
            });
            buttonConnect.textContent = "Connect";
            oscillatorDiv.appendChild(buttonStart);
            oscillatorDiv.appendChild(buttonDisconnect);
            oscillatorDiv.appendChild(buttonConnect);
            oscillatorsDiv.appendChild(oscillatorDiv);
        });
        synthContainer.appendChild(oscillatorsDiv);
        synthContainer.appendChild(createEnvelopeControl(synthjs.Envelopes[0]));
        let buttonStartEnvelope = document.createElement("button");
        buttonStartEnvelope.addEventListener("click", () => {
            synthjs.Envelopes[0].toggle();
        });
        buttonStartEnvelope.textContent = "Toggle Envelope";
        synthContainer.appendChild(buttonStartEnvelope);
        let channelsDiv = document.createElement("div");
        synthjs.Volumes.forEach((volume) => {
            channelsDiv.appendChild(createChannel(volume, "Volume"));
        });
        synthContainer.appendChild(channelsDiv);
        synthContainer.appendChild(createChannel(synthjs.MasterVolume, "Master Channel"));
    }
}
function createEnvelopeControl(envelope) {
    let minTime = 0;
    let maxTime = 20;
    let stepTime = 0.001;
    let minPeak = 0;
    let maxPeak = 1;
    let stepPeak = 0.001;
    let envelopeDiv = document.createElement("div");
    envelopeDiv.appendChild(createH2("Envelope"));
    envelopeDiv.appendChild(createH2("Attack"));
    createGroupOfLabelRange(envelopeDiv, minTime, maxTime, stepTime, envelope, "Attack Time");
    createGroupOfLabelRange(envelopeDiv, minPeak, maxPeak, stepPeak, envelope, "Attack Peak");
    createGroupOfLabelSelection(envelopeDiv, envelope, "Attack Type");
    envelopeDiv.appendChild(createH2("Decay"));
    createGroupOfLabelRange(envelopeDiv, minTime, maxTime, stepTime, envelope, "Decay Time");
    createGroupOfLabelRange(envelopeDiv, minPeak, maxPeak, stepPeak, envelope, "Decay Peak");
    createGroupOfLabelSelection(envelopeDiv, envelope, "Decay Type");
    envelopeDiv.appendChild(createH2("Sustain"));
    createGroupOfLabelRange(envelopeDiv, minTime, maxTime, stepTime, envelope, "Sustain Time");
    envelopeDiv.appendChild(createH2("Release"));
    createGroupOfLabelRange(envelopeDiv, minTime, maxTime, stepTime, envelope, "Release Time");
    createGroupOfLabelSelection(envelopeDiv, envelope, "Release Type");
    return envelopeDiv;
}
function createGroupOfLabelSelection(divToAppend, envelope, label) {
    divToAppend.appendChild(createLabel(label, label));
    let selection = createSelection(label, ["linear", "exp"]);
    switch (label) {
        case "Attack Type":
            selection.addEventListener("change", (ev) => {
                envelope.EnvelopeShape.attack.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Type":
            selection.addEventListener("change", (ev) => {
                envelope.EnvelopeShape.decay.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Release Type":
            selection.addEventListener("change", (ev) => {
                envelope.EnvelopeShape.release.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
    }
    divToAppend.appendChild(selection);
}
function createGroupOfLabelRange(divToAppend, minTime, maxTime, stepTime, envelope, label) {
    divToAppend.appendChild(createLabel(label, label));
    let range = createRange(minTime, maxTime, stepTime, 0, label);
    switch (label) {
        case "Attack Time":
            range.defaultValue = envelope.EnvelopeShape.attack.time + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.attack.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Attack Peak":
            range.defaultValue = envelope.EnvelopeShape.attack.peak + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.attack.peak = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Time":
            range.defaultValue = envelope.EnvelopeShape.decay.time + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.decay.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Peak":
            range.defaultValue = envelope.EnvelopeShape.decay.peak + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.decay.peak = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Sustain Time":
            range.defaultValue = envelope.EnvelopeShape.sustain.time + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.sustain.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Release Time":
            range.defaultValue = envelope.EnvelopeShape.release.time + "";
            range.addEventListener("input", (ev) => {
                envelope.EnvelopeShape.release.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
    }
    divToAppend.appendChild(range);
}
function createSelection(name, options) {
    let typeSelect = document.createElement("select");
    typeSelect.name = name;
    options.forEach((option) => {
        typeSelect.appendChild(createOption(option));
    });
    return typeSelect;
}
function createChannel(channel, title) {
    let channelDiv = document.createElement("div");
    let channelh2 = document.createElement("h2");
    let channelVolumeDiv = document.createElement("div");
    channelh2.textContent = title;
    channelDiv.classList.add("channel");
    channelVolumeDiv.classList.add("channel-volume");
    let volumeSlider = createRange(0, 1, 0.001, channel.gain.value, "volume");
    volumeSlider.addEventListener("input", (ev) => {
        channel.gain.setValueAtTime(ev.srcElement.valueAsNumber, 0);
    });
    channelVolumeDiv.appendChild(createLabel("Volume", "master-volume"));
    channelVolumeDiv.appendChild(volumeSlider);
    channelDiv.appendChild(channelh2);
    channelDiv.appendChild(channelVolumeDiv);
    return channelDiv;
}
function createLabel(text, htmlFor) {
    let label = document.createElement("label");
    label.textContent = text;
    label.htmlFor = htmlFor;
    return label;
}
function createNumberBox(min, max, step, defaultValue) {
    let input = document.createElement("input");
    input.type = "number";
    input.min = min + "";
    input.max = max + "";
    input.step = step + "";
    input.defaultValue = defaultValue + "";
    input.classList.add("number");
    return input;
}
function createRange(min, max, step, defaultValue, name) {
    let input = document.createElement("input");
    input.type = "range";
    input.min = min + "";
    input.max = max + "";
    input.step = step + "";
    input.defaultValue = defaultValue + "";
    input.name = name;
    input.classList.add("range");
    return input;
}
function createOption(type) {
    let option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    return option;
}
function createH2(text) {
    let h2 = document.createElement("h2");
    h2.textContent = text;
    return h2;
}
function logEnvelopeOnConsole(envelope) {
    console.clear();
    console.log("Attack Time");
    console.log(envelope.EnvelopeShape.attack.time);
    console.log("Attack Peak");
    console.log(envelope.EnvelopeShape.attack.peak);
    console.log("Attack Type");
    console.log(envelope.EnvelopeShape.attack.type);
    console.log("Decay Time");
    console.log(envelope.EnvelopeShape.decay.time);
    console.log("Decay Peak");
    console.log(envelope.EnvelopeShape.decay.peak);
    console.log("Decay Type");
    console.log(envelope.EnvelopeShape.decay.type);
    console.log("Sustain Time");
    console.log(envelope.EnvelopeShape.sustain.time);
    console.log("Release Time");
    console.log(envelope.EnvelopeShape.release.time);
    console.log("Release Type");
    console.log(envelope.EnvelopeShape.release.type);
}


/***/ }),

/***/ "./src/ts/synth.ts":
/*!*************************!*\
  !*** ./src/ts/synth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Synth": () => (/* binding */ Synth)
/* harmony export */ });
/* harmony import */ var _classes_volume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/volume */ "./src/ts/classes/volume.ts");
/* harmony import */ var _classes_envelope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/envelope */ "./src/ts/classes/envelope.ts");
/* harmony import */ var _classes_oscillator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/oscillator */ "./src/ts/classes/oscillator.ts");



class Synth extends AudioContext {
    constructor(volumes = 1, envelopes = 1, oscillators = 3) {
        super();
        this._oscillators = [];
        this._envelopes = [];
        this._volumes = [];
        this._masterVolume = new _classes_volume__WEBPACK_IMPORTED_MODULE_0__.Volume(this, this.destination);
        for (let oscillator = 0; oscillator < oscillators; oscillator++) {
            this.Oscillators.push(new _classes_oscillator__WEBPACK_IMPORTED_MODULE_2__.Oscillator(this));
        }
        ;
        for (let envelope = 0; envelope < envelopes; envelope++) {
            this.Envelopes.push(new _classes_envelope__WEBPACK_IMPORTED_MODULE_1__.Envelope(this));
        }
        ;
        for (let volume = 0; volume < volumes; volume++) {
            this.Volumes.push(new _classes_volume__WEBPACK_IMPORTED_MODULE_0__.Volume(this));
        }
        ;
        this.Oscillators.forEach((oscillator) => {
            oscillator.connect(this.Envelopes[0]).connect(this.Volumes[0]).connect(this.MasterVolume);
            oscillator.DestinationNode = this.Envelopes[0];
        });
    }
    get Oscillators() {
        return this._oscillators;
    }
    set Oscillators(value) {
        this._oscillators = value;
    }
    get Envelopes() {
        return this._envelopes;
    }
    set Envelopes(value) {
        this._envelopes = value;
    }
    get Volumes() {
        return this._volumes;
    }
    get MasterVolume() {
        return this._masterVolume;
    }
    changeVolume(volume, gainNode) {
        gainNode.gain.value = volume;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scsscss_synth_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scsscss/synth.css */ "./src/scsscss/synth.css");
/* harmony import */ var _ts_synth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/synth */ "./src/ts/synth.ts");
/* harmony import */ var _ts_interfaces_gui_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/interfaces/gui/gui */ "./src/ts/interfaces/gui/gui.ts");



function start() {
    let synthjs = document.createElement("div");
    synthjs.id = "synthjs";
    let h1 = document.createElement("h1");
    h1.textContent = "synth.js";
    synthjs.appendChild(h1);
    let h2 = document.createElement("h1");
    h2.textContent = "Introduction";
    synthjs.appendChild(h2);
    let p = document.createElement("p");
    let br = document.createElement("br");
    let a = document.createElement("a");
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
    let startSynth = document.createElement("button");
    startSynth.id = "start-synth";
    startSynth.textContent = "Start";
    startSynth.addEventListener("click", () => {
        let synthjs = document.getElementById("synthjs");
        if (synthjs != null) {
            while (synthjs.lastChild) {
                synthjs.lastChild.remove();
            }
            const synth = new _ts_synth__WEBPACK_IMPORTED_MODULE_1__.Synth();
            (0,_ts_interfaces_gui_gui__WEBPACK_IMPORTED_MODULE_2__.createSynth)(synth, synthjs);
        }
    });
    synthjs.appendChild(startSynth);
    return synthjs;
}
document.body.appendChild(start());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aC5qcy8uL3NyYy9zY3NzY3NzL3N5bnRoLmNzcz9hMWJkIiwid2VicGFjazovL3N5bnRoLmpzLy4vc3JjL3RzL2NsYXNzZXMvZW52ZWxvcGUudHMiLCJ3ZWJwYWNrOi8vc3ludGguanMvLi9zcmMvdHMvY2xhc3Nlcy9vc2NpbGxhdG9yLnRzIiwid2VicGFjazovL3N5bnRoLmpzLy4vc3JjL3RzL2NsYXNzZXMvdm9sdW1lLnRzIiwid2VicGFjazovL3N5bnRoLmpzLy4vc3JjL3RzL2ludGVyZmFjZXMvZ3VpL2d1aS50cyIsIndlYnBhY2s6Ly9zeW50aC5qcy8uL3NyYy90cy9zeW50aC50cyIsIndlYnBhY2s6Ly9zeW50aC5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zeW50aC5qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ludGguanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zeW50aC5qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N5bnRoLmpzLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3NCTyxNQUFNLFFBQVMsU0FBUSxRQUFRO0lBMENwQyxZQUNFLE9BQXlCLEVBQ3pCLFVBQXVCLEVBQ3ZCLFdBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUE5Q2xCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQStDckMsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxXQUFXLElBQUksU0FB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LENBQUM7UUFFakQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM1QjtZQUVELE1BQU0sS0FBSyxHQUFHLElBQUksNENBQUssRUFBRSxDQUFDO1lBQzFCLG1FQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IE9zY2lsbGF0b3IgfSBmcm9tIFwiLi9vc2NpbGxhdG9yXCI7XG5cbmludGVyZmFjZSBFbnZlbG9wZVNoYXBlIHtcbiAgYXR0YWNrOiB7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIHBlYWs6IG51bWJlcjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH07XG4gIGRlY2F5OiB7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIHBlYWs6IG51bWJlcjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH07XG4gIHN1c3RhaW46IHtcbiAgICB0aW1lOiBudW1iZXI7XG4gIH07XG4gIHJlbGVhc2U6IHtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRW52ZWxvcGUgZXh0ZW5kcyBHYWluTm9kZSB7XG5cbiAgcHJpdmF0ZSBfaW5wdXROb2RlczogR2Fpbk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIF9vdXRwdXROb2RlczogQXVkaW9Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBfZW52ZWxvcGVTaGFwZTogRW52ZWxvcGVTaGFwZTtcbiAgcHJpdmF0ZSBfc3RhdHVzOiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgSW5wdXROb2RlcygpOiBHYWluTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXROb2RlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgSW5wdXROb2Rlcyh2YWx1ZTogR2Fpbk5vZGVbXSkge1xuICAgIHRoaXMuX2lucHV0Tm9kZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgT3V0cHV0Tm9kZXMoKTogQXVkaW9Ob2RlW10ge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXROb2RlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgT3V0cHV0Tm9kZXModmFsdWU6IEF1ZGlvTm9kZVtdKSB7XG4gICAgdGhpcy5fb3V0cHV0Tm9kZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgRW52ZWxvcGVTaGFwZSgpOiBFbnZlbG9wZVNoYXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZW52ZWxvcGVTaGFwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgRW52ZWxvcGVTaGFwZSh2YWx1ZTogRW52ZWxvcGVTaGFwZSkge1xuICAgIHRoaXMuX2VudmVsb3BlU2hhcGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgU3RhdHVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IFN0YXR1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb250ZXh0OiBCYXNlQXVkaW9Db250ZXh0LFxuICAgIGlucHV0Tm9kZXM/OiBHYWluTm9kZVtdLFxuICAgIG91dHB1dE5vZGVzPzogQXVkaW9Ob2RlW10sXG4gICAgb3B0aW9ucz86IEdhaW5PcHRpb25zXG4gICkge1xuICAgIHN1cGVyKGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKGlucHV0Tm9kZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9pbnB1dE5vZGVzID0gaW5wdXROb2RlcztcbiAgICB9XG5cbiAgICBpZiAob3V0cHV0Tm9kZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9vdXRwdXROb2RlcyA9IG91dHB1dE5vZGVzO1xuICAgIH1cblxuICAgIHRoaXMuX2VudmVsb3BlU2hhcGUgPSB7XG4gICAgICBhdHRhY2s6IHtcbiAgICAgICAgdGltZTogMC4xLFxuICAgICAgICBwZWFrOiAxLFxuICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxuICAgICAgfSxcbiAgICAgIGRlY2F5OiB7XG4gICAgICAgIHRpbWU6IDAuMDQsXG4gICAgICAgIHBlYWs6IDAuMixcbiAgICAgICAgdHlwZTogXCJsaW5lYXJcIixcbiAgICAgIH0sXG4gICAgICBzdXN0YWluOiB7XG4gICAgICAgIHRpbWU6IDAuMCxcbiAgICAgIH0sXG4gICAgICByZWxlYXNlOiB7XG4gICAgICAgIHRpbWU6IDAuMDQsXG4gICAgICAgIHR5cGU6IFwibGluZWFyXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5fc3RhdHVzID0gZmFsc2U7XG4gIH1cblxuICAvLyNyZWdpb24gIEVudmVsb3BlXG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCBub3cgPSB0aGlzLmNvbnRleHQuY3VycmVudFRpbWU7XG4gICAgbGV0IGF0dGFja1RpbWUgPSBub3cgKyB0aGlzLkVudmVsb3BlU2hhcGUuYXR0YWNrLnRpbWU7XG4gICAgbGV0IGRlY2F5VGltZSA9IGF0dGFja1RpbWUgKyB0aGlzLkVudmVsb3BlU2hhcGUuZGVjYXkudGltZTtcbiAgICBsZXQgc3VzdGFpblRpbWUgPSBkZWNheVRpbWUgKyB0aGlzLkVudmVsb3BlU2hhcGUuc3VzdGFpbi50aW1lO1xuICAgIGxldCByZWxlYXNlVGltZSA9IHN1c3RhaW5UaW1lICsgdGhpcy5FbnZlbG9wZVNoYXBlLnJlbGVhc2UudGltZTtcblxuICAgIHRoaXMuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoMCk7XG4gICAgdGhpcy5nYWluLnZhbHVlID0gMDtcblxuICAgIGlmICh0aGlzLkVudmVsb3BlU2hhcGUuYXR0YWNrLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgdGhpcy5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFxuICAgICAgICB0aGlzLkVudmVsb3BlU2hhcGUuYXR0YWNrLnBlYWssXG4gICAgICAgIGF0dGFja1RpbWVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKFxuICAgICAgICB0aGlzLkVudmVsb3BlU2hhcGUuYXR0YWNrLnBlYWssXG4gICAgICAgIGF0dGFja1RpbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuRW52ZWxvcGVTaGFwZS5kZWNheS50eXBlID09IFwibGluZWFyXCIpIHtcbiAgICAgIHRoaXMuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZShcbiAgICAgICAgdGhpcy5FbnZlbG9wZVNoYXBlLmRlY2F5LnBlYWssXG4gICAgICAgIGRlY2F5VGltZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoXG4gICAgICAgIHRoaXMuRW52ZWxvcGVTaGFwZS5kZWNheS5wZWFrLFxuICAgICAgICBkZWNheVRpbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFxuICAgICAgdGhpcy5FbnZlbG9wZVNoYXBlLmRlY2F5LnBlYWssXG4gICAgICBzdXN0YWluVGltZVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5FbnZlbG9wZVNoYXBlLnJlbGVhc2UudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICB0aGlzLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoXG4gICAgICAgIDAuMDAwMSxcbiAgICAgICAgcmVsZWFzZVRpbWVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKFxuICAgICAgICAwLjAwMDEsXG4gICAgICAgIHJlbGVhc2VUaW1lXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRvZ2dsZSgpIHtcbiAgLy8gICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5JbnB1dE5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAvLyAgICAgY29uc3QgaW5wdXROb2RlID0gdGhpcy5JbnB1dE5vZGVzW2luZGV4XTtcblxuICAvLyAgICAgICBsZXQgbm93ID0gaW5wdXROb2RlLmNvbnRleHQuY3VycmVudFRpbWU7XG4gIC8vICAgICAgIGxldCBhdHRhY2tUaW1lID0gbm93ICsgdGhpcy5FbnZlbG9wZVNoYXBlLmF0dGFjay50aW1lO1xuICAvLyAgICAgICBsZXQgZGVjYXlUaW1lID0gYXR0YWNrVGltZSArIHRoaXMuRW52ZWxvcGVTaGFwZS5kZWNheS50aW1lO1xuICAvLyAgICAgICBsZXQgc3VzdGFpblRpbWUgPSBkZWNheVRpbWUgKyB0aGlzLkVudmVsb3BlU2hhcGUuc3VzdGFpbi50aW1lO1xuICAvLyAgICAgICBsZXQgcmVsZWFzZVRpbWUgPSBzdXN0YWluVGltZSArIHRoaXMuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnRpbWU7XG5cbiAgLy8gICAgICAgaW5wdXROb2RlLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKDApO1xuICAvLyAgICAgICBpbnB1dE5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgLy8gICAgICAgaWYgKHRoaXMuRW52ZWxvcGVTaGFwZS5hdHRhY2sudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gIC8vICAgICAgICAgaW5wdXROb2RlLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoXG4gIC8vICAgICAgICAgICB0aGlzLkVudmVsb3BlU2hhcGUuYXR0YWNrLnBlYWssXG4gIC8vICAgICAgICAgICBhdHRhY2tUaW1lXG4gIC8vICAgICAgICAgKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpbnB1dE5vZGUuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKFxuICAvLyAgICAgICAgICAgdGhpcy5FbnZlbG9wZVNoYXBlLmF0dGFjay5wZWFrLFxuICAvLyAgICAgICAgICAgYXR0YWNrVGltZVxuICAvLyAgICAgICAgICk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBpZiAodGhpcy5FbnZlbG9wZVNoYXBlLmRlY2F5LnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAvLyAgICAgICAgIGlucHV0Tm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFxuICAvLyAgICAgICAgICAgdGhpcy5FbnZlbG9wZVNoYXBlLmRlY2F5LnBlYWssXG4gIC8vICAgICAgICAgICBkZWNheVRpbWVcbiAgLy8gICAgICAgICApO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIGlucHV0Tm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoXG4gIC8vICAgICAgICAgICB0aGlzLkVudmVsb3BlU2hhcGUuZGVjYXkucGVhayxcbiAgLy8gICAgICAgICAgIGRlY2F5VGltZVxuICAvLyAgICAgICAgICk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBpbnB1dE5vZGUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZShcbiAgLy8gICAgICAgICB0aGlzLkVudmVsb3BlU2hhcGUuZGVjYXkucGVhayxcbiAgLy8gICAgICAgICBzdXN0YWluVGltZVxuICAvLyAgICAgICApO1xuXG4gIC8vICAgICAgIGlmICh0aGlzLkVudmVsb3BlU2hhcGUucmVsZWFzZS50eXBlID09IFwibGluZWFyXCIpIHtcbiAgLy8gICAgICAgICBpbnB1dE5vZGUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZShcbiAgLy8gICAgICAgICAgIDAuMDAwMSxcbiAgLy8gICAgICAgICAgIHJlbGVhc2VUaW1lXG4gIC8vICAgICAgICAgKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpbnB1dE5vZGUuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKFxuICAvLyAgICAgICAgICAgMC4wMDAxLFxuICAvLyAgICAgICAgICAgcmVsZWFzZVRpbWVcbiAgLy8gICAgICAgICApO1xuICAvLyAgICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vI2VuZHJlZ2lvblxufVxuIiwiY2xhc3MgT3NjaWxsYXRvciBleHRlbmRzIE9zY2lsbGF0b3JOb2RlIHtcblxuICAvKiAjcmVnaW9uIFByaXZhdGUgZmllbGRzICAqL1xuXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uTm9kZTogQXVkaW9Ob2RlO1xuXG4gIC8vIHByaXZhdGUgX2VudmVsb3BlOiBFbnZlbG9wZTtcblxuICAvKiAjZW5kcmVnaW9uICovXG5cbiAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcblxuICBwdWJsaWMgZ2V0IERlc3RpbmF0aW9uTm9kZSgpOiBBdWRpb05vZGUge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbk5vZGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IERlc3RpbmF0aW9uTm9kZSh2YWx1ZTogQXVkaW9Ob2RlKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Ob2RlID0gdmFsdWU7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRleHQ6IEJhc2VBdWRpb0NvbnRleHQsXG4gICAgZGVzdGluYXRpb25Ob2RlPzogQXVkaW9Ob2RlLFxuICAgIG9wdGlvbnM/OiBPc2NpbGxhdG9yT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbk5vZGUgPSBkZXN0aW5hdGlvbk5vZGVcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uTm9kZSA9IHRoaXMuY29udGV4dC5kZXN0aW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIC8vIGNoYW5nZU9zY2lsbGF0b3JGcmVxdW5jeShmcmVxdWVuY3k6IG51bWJlcikge1xuICAvLyAgIHRoaXMuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5O1xuICAvLyB9XG5cbiAgY2hhbmdlT3NjaWxsYXRvclR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZSBhcyBPc2NpbGxhdG9yVHlwZTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vIGNyZWF0ZUdhaW5Ob2RlKHZvbHVtZTogbnVtYmVyLCBkZXN0aW5hdGlvbjogQXVkaW9Ob2RlKSB7XG4gIC8vICAgbGV0IGdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgLy8gICBnYWluTm9kZS5nYWluLnZhbHVlID0gdm9sdW1lO1xuICAvLyAgIGdhaW5Ob2RlLmNvbm5lY3QoZGVzdGluYXRpb24pO1xuICAvLyAgIHJldHVybiBnYWluTm9kZTtcbiAgLy8gfVxufVxuXG5leHBvcnQgeyBPc2NpbGxhdG9yIH0iLCJjbGFzcyBWb2x1bWUgZXh0ZW5kcyBHYWluTm9kZSB7XG4gIHByaXZhdGUgX2lucHV0Tm9kZXM6IEF1ZGlvTm9kZVtdID0gW107XG4gIHByaXZhdGUgX291dHB1dE5vZGVzOiBBdWRpb05vZGVbXSA9IFtdO1xuXG4gIHB1YmxpYyBnZXQgSW5wdXROb2RlcygpOiBBdWRpb05vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0Tm9kZXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IElucHV0Tm9kZXModmFsdWU6IEF1ZGlvTm9kZVtdKSB7XG4gICAgdGhpcy5faW5wdXROb2RlcyA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBPdXRwdXROb2RlcygpOiBBdWRpb05vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGVzO1xuICB9XG5cbiAgcHVibGljIHNldCBPdXRwdXROb2Rlcyh2YWx1ZTogQXVkaW9Ob2RlW10pIHtcbiAgICB0aGlzLl9vdXRwdXROb2RlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb250ZXh0OiBCYXNlQXVkaW9Db250ZXh0LFxuICAgIGRlc3RpbmF0aW9uTm9kZT86IEF1ZGlvTm9kZSxcbiAgICBpbnB1dE5vZGVzPzogQXVkaW9Ob2RlW10sXG4gICAgb3B0aW9ucz86IEdhaW5PcHRpb25zXG4gICkge1xuICAgIHN1cGVyKGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKGlucHV0Tm9kZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9pbnB1dE5vZGVzID0gaW5wdXROb2RlcztcbiAgICB9O1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uTm9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuT3V0cHV0Tm9kZXMucHVzaChkZXN0aW5hdGlvbk5vZGUpO1xuICAgICAgdGhpcy5jb25uZWN0KGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2Fpbi52YWx1ZSA9IDAuMjtcbiAgfVxufVxuXG5leHBvcnQgeyBWb2x1bWUgfSIsIi8vI3JlZ2lvbiBDcmVhdGUgc3ludGguanNcblxuaW1wb3J0IHsgVm9sdW1lIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdm9sdW1lXCI7XG5pbXBvcnQgeyBFbnZlbG9wZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2VudmVsb3BlXCI7XG5pbXBvcnQgeyBTeW50aCB9IGZyb20gXCIuLi8uLi9zeW50aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ludGgoc3ludGhqczogU3ludGgsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIFxuICBsZXQgc3ludGhDb250YWluZXIgPSBlbGVtZW50O1xuXG4gIGlmIChzeW50aENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgbGV0IG9zY2lsbGF0b3JzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHN5bnRoanMuT3NjaWxsYXRvcnMuZm9yRWFjaCgob3NjaWxsYXRvcikgPT4ge1xuICAgICAgbGV0IG9zY2lsbGF0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihcInNpbmVcIikpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihcInNxdWFyZVwiKSk7XG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKFwidHJpYW5nbGVcIikpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihcInNhd3Rvb3RoXCIpKTtcblxuICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgb3NjaWxsYXRvci5jaGFuZ2VPc2NpbGxhdG9yVHlwZShldi5zcmNFbGVtZW50LnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBvc2NpbGxhdG9yRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKFwiT1NDXCIsIFwiT1NDXCIpKTtcbiAgICAgIG9zY2lsbGF0b3JEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICAgICAgbGV0IGJ1dHRvblN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvblN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgb3NjaWxsYXRvci5zdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBidXR0b25TdGFydC50ZXh0Q29udGVudCA9IFwiU3RhcnQgKENyZWF0ZSlcIjtcblxuICAgICAgbGV0IGJ1dHRvbkRpc2Nvbm5lY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uRGlzY29ubmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBvc2NpbGxhdG9yLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0pO1xuICAgICAgYnV0dG9uRGlzY29ubmVjdC50ZXh0Q29udGVudCA9IFwiRGlzY29ubmVjdFwiO1xuXG4gICAgICBsZXQgYnV0dG9uQ29ubmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b25Db25uZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG9zY2lsbGF0b3IuY29ubmVjdChvc2NpbGxhdG9yLkRlc3RpbmF0aW9uTm9kZSk7XG4gICAgICB9KTtcbiAgICAgIGJ1dHRvbkNvbm5lY3QudGV4dENvbnRlbnQgPSBcIkNvbm5lY3RcIjtcblxuICAgICAgb3NjaWxsYXRvckRpdi5hcHBlbmRDaGlsZChidXR0b25TdGFydCk7XG4gICAgICBvc2NpbGxhdG9yRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpc2Nvbm5lY3QpO1xuICAgICAgb3NjaWxsYXRvckRpdi5hcHBlbmRDaGlsZChidXR0b25Db25uZWN0KTtcblxuICAgICAgb3NjaWxsYXRvcnNEaXYuYXBwZW5kQ2hpbGQob3NjaWxsYXRvckRpdik7XG4gICAgfSk7XG5cbiAgICBzeW50aENvbnRhaW5lci5hcHBlbmRDaGlsZChvc2NpbGxhdG9yc0Rpdik7XG4gICAgc3ludGhDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRW52ZWxvcGVDb250cm9sKHN5bnRoanMuRW52ZWxvcGVzWzBdKSk7XG5cbiAgICBsZXQgYnV0dG9uU3RhcnRFbnZlbG9wZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uU3RhcnRFbnZlbG9wZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3ludGhqcy5FbnZlbG9wZXNbMF0udG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uU3RhcnRFbnZlbG9wZS50ZXh0Q29udGVudCA9IFwiVG9nZ2xlIEVudmVsb3BlXCI7XG5cbiAgICBzeW50aENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25TdGFydEVudmVsb3BlKTtcblxuICAgIGxldCBjaGFubmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzeW50aGpzLlZvbHVtZXMuZm9yRWFjaCgodm9sdW1lKSA9PiB7XG4gICAgICBjaGFubmVsc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVDaGFubmVsKHZvbHVtZSwgXCJWb2x1bWVcIikpO1xuICAgIH0pO1xuXG4gICAgc3ludGhDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbm5lbHNEaXYpO1xuXG4gICAgc3ludGhDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVDaGFubmVsKHN5bnRoanMuTWFzdGVyVm9sdW1lLCBcIk1hc3RlciBDaGFubmVsXCIpXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZVBpYW5vUm9sbChzeW50aGpzLktleXMsIHN5bnRoanMuQ2hhbm5lbHMpO1xuICB9XG4gIC8vI2VuZHJlZ2lvblxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbnZlbG9wZUNvbnRyb2woZW52ZWxvcGU6IEVudmVsb3BlKSB7XG4gIGxldCBtaW5UaW1lID0gMDtcbiAgbGV0IG1heFRpbWUgPSAyMDtcbiAgbGV0IHN0ZXBUaW1lID0gMC4wMDE7XG5cbiAgbGV0IG1pblBlYWsgPSAwO1xuICBsZXQgbWF4UGVhayA9IDE7XG4gIGxldCBzdGVwUGVhayA9IDAuMDAxO1xuXG4gIGxldCBlbnZlbG9wZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZW52ZWxvcGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJFbnZlbG9wZVwiKSk7XG4gIGVudmVsb3BlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiQXR0YWNrXCIpKTtcblxuICBjcmVhdGVHcm91cE9mTGFiZWxSYW5nZShcbiAgICBlbnZlbG9wZURpdixcbiAgICBtaW5UaW1lLFxuICAgIG1heFRpbWUsXG4gICAgc3RlcFRpbWUsXG4gICAgZW52ZWxvcGUsXG4gICAgXCJBdHRhY2sgVGltZVwiXG4gICk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsUmFuZ2UoXG4gICAgZW52ZWxvcGVEaXYsXG4gICAgbWluUGVhayxcbiAgICBtYXhQZWFrLFxuICAgIHN0ZXBQZWFrLFxuICAgIGVudmVsb3BlLFxuICAgIFwiQXR0YWNrIFBlYWtcIlxuICApO1xuXG4gIGNyZWF0ZUdyb3VwT2ZMYWJlbFNlbGVjdGlvbihlbnZlbG9wZURpdiwgZW52ZWxvcGUsIFwiQXR0YWNrIFR5cGVcIik7XG5cbiAgZW52ZWxvcGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJEZWNheVwiKSk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsUmFuZ2UoXG4gICAgZW52ZWxvcGVEaXYsXG4gICAgbWluVGltZSxcbiAgICBtYXhUaW1lLFxuICAgIHN0ZXBUaW1lLFxuICAgIGVudmVsb3BlLFxuICAgIFwiRGVjYXkgVGltZVwiXG4gICk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsUmFuZ2UoXG4gICAgZW52ZWxvcGVEaXYsXG4gICAgbWluUGVhayxcbiAgICBtYXhQZWFrLFxuICAgIHN0ZXBQZWFrLFxuICAgIGVudmVsb3BlLFxuICAgIFwiRGVjYXkgUGVha1wiXG4gICk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsU2VsZWN0aW9uKGVudmVsb3BlRGl2LCBlbnZlbG9wZSwgXCJEZWNheSBUeXBlXCIpO1xuXG4gIGVudmVsb3BlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiU3VzdGFpblwiKSk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsUmFuZ2UoXG4gICAgZW52ZWxvcGVEaXYsXG4gICAgbWluVGltZSxcbiAgICBtYXhUaW1lLFxuICAgIHN0ZXBUaW1lLFxuICAgIGVudmVsb3BlLFxuICAgIFwiU3VzdGFpbiBUaW1lXCJcbiAgKTtcblxuICBlbnZlbG9wZURpdi5hcHBlbmRDaGlsZChjcmVhdGVIMihcIlJlbGVhc2VcIikpO1xuXG4gIGNyZWF0ZUdyb3VwT2ZMYWJlbFJhbmdlKFxuICAgIGVudmVsb3BlRGl2LFxuICAgIG1pblRpbWUsXG4gICAgbWF4VGltZSxcbiAgICBzdGVwVGltZSxcbiAgICBlbnZlbG9wZSxcbiAgICBcIlJlbGVhc2UgVGltZVwiXG4gICk7XG5cbiAgY3JlYXRlR3JvdXBPZkxhYmVsU2VsZWN0aW9uKGVudmVsb3BlRGl2LCBlbnZlbG9wZSwgXCJSZWxlYXNlIFR5cGVcIik7XG5cbiAgcmV0dXJuIGVudmVsb3BlRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cE9mTGFiZWxTZWxlY3Rpb24oXG4gIGRpdlRvQXBwZW5kOiBIVE1MRGl2RWxlbWVudCxcbiAgZW52ZWxvcGU6IEVudmVsb3BlLFxuICBsYWJlbDogc3RyaW5nXG4pIHtcbiAgZGl2VG9BcHBlbmQuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwobGFiZWwsIGxhYmVsKSk7XG5cbiAgbGV0IHNlbGVjdGlvbiA9IGNyZWF0ZVNlbGVjdGlvbihsYWJlbCwgW1wibGluZWFyXCIsIFwiZXhwXCJdKTtcblxuICBzd2l0Y2ggKGxhYmVsKSB7XG4gICAgY2FzZSBcIkF0dGFjayBUeXBlXCI6XG4gICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGVudmVsb3BlLkVudmVsb3BlU2hhcGUuYXR0YWNrLnR5cGUgPSAoZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBsb2dFbnZlbG9wZU9uQ29uc29sZShlbnZlbG9wZSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkRlY2F5IFR5cGVcIjpcbiAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5kZWNheS50eXBlID0gKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgbG9nRW52ZWxvcGVPbkNvbnNvbGUoZW52ZWxvcGUpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJSZWxlYXNlIFR5cGVcIjpcbiAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnR5cGUgPSAoZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBsb2dFbnZlbG9wZU9uQ29uc29sZShlbnZlbG9wZSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgZGl2VG9BcHBlbmQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBPZkxhYmVsUmFuZ2UoXG4gIGRpdlRvQXBwZW5kOiBIVE1MRGl2RWxlbWVudCxcbiAgbWluVGltZTogbnVtYmVyLFxuICBtYXhUaW1lOiBudW1iZXIsXG4gIHN0ZXBUaW1lOiBudW1iZXIsXG4gIGVudmVsb3BlOiBFbnZlbG9wZSxcbiAgbGFiZWw6IHN0cmluZ1xuKSB7XG4gIGRpdlRvQXBwZW5kLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKGxhYmVsLCBsYWJlbCkpO1xuICBsZXQgcmFuZ2UgPSBjcmVhdGVSYW5nZShtaW5UaW1lLCBtYXhUaW1lLCBzdGVwVGltZSwgMCwgbGFiZWwpO1xuXG4gIHN3aXRjaCAobGFiZWwpIHtcbiAgICBjYXNlIFwiQXR0YWNrIFRpbWVcIjpcbiAgICAgIHJhbmdlLmRlZmF1bHRWYWx1ZSA9IGVudmVsb3BlLkVudmVsb3BlU2hhcGUuYXR0YWNrLnRpbWUgKyBcIlwiO1xuICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5hdHRhY2sudGltZSA9IChldi50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcbiAgICAgICAgbG9nRW52ZWxvcGVPbkNvbnNvbGUoZW52ZWxvcGUpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJBdHRhY2sgUGVha1wiOlxuICAgICAgcmFuZ2UuZGVmYXVsdFZhbHVlID0gZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5hdHRhY2sucGVhayArIFwiXCI7XG4gICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICBlbnZlbG9wZS5FbnZlbG9wZVNoYXBlLmF0dGFjay5wZWFrID0gKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuICAgICAgICBsb2dFbnZlbG9wZU9uQ29uc29sZShlbnZlbG9wZSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkRlY2F5IFRpbWVcIjpcbiAgICAgIHJhbmdlLmRlZmF1bHRWYWx1ZSA9IGVudmVsb3BlLkVudmVsb3BlU2hhcGUuZGVjYXkudGltZSArIFwiXCI7XG4gICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICBlbnZlbG9wZS5FbnZlbG9wZVNoYXBlLmRlY2F5LnRpbWUgPSAoZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG4gICAgICAgIGxvZ0VudmVsb3BlT25Db25zb2xlKGVudmVsb3BlKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRGVjYXkgUGVha1wiOlxuICAgICAgcmFuZ2UuZGVmYXVsdFZhbHVlID0gZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5kZWNheS5wZWFrICsgXCJcIjtcbiAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGVudmVsb3BlLkVudmVsb3BlU2hhcGUuZGVjYXkucGVhayA9IChldi50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcbiAgICAgICAgbG9nRW52ZWxvcGVPbkNvbnNvbGUoZW52ZWxvcGUpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJTdXN0YWluIFRpbWVcIjpcbiAgICAgIHJhbmdlLmRlZmF1bHRWYWx1ZSA9IGVudmVsb3BlLkVudmVsb3BlU2hhcGUuc3VzdGFpbi50aW1lICsgXCJcIjtcbiAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGVudmVsb3BlLkVudmVsb3BlU2hhcGUuc3VzdGFpbi50aW1lID0gKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZUFzTnVtYmVyO1xuICAgICAgICBsb2dFbnZlbG9wZU9uQ29uc29sZShlbnZlbG9wZSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIlJlbGVhc2UgVGltZVwiOlxuICAgICAgcmFuZ2UuZGVmYXVsdFZhbHVlID0gZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnRpbWUgKyBcIlwiO1xuICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnRpbWUgPSAoZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlQXNOdW1iZXI7XG4gICAgICAgIGxvZ0VudmVsb3BlT25Db25zb2xlKGVudmVsb3BlKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBkaXZUb0FwcGVuZC5hcHBlbmRDaGlsZChyYW5nZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdGlvbihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKSB7XG4gIGxldCB0eXBlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdHlwZVNlbGVjdC5uYW1lID0gbmFtZTtcblxuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKG9wdGlvbikpO1xuICB9KTtcblxuICByZXR1cm4gdHlwZVNlbGVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChjaGFubmVsOiBWb2x1bWUsIHRpdGxlOiBzdHJpbmcpIHtcbiAgbGV0IGNoYW5uZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgY2hhbm5lbGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsZXQgY2hhbm5lbFZvbHVtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY2hhbm5lbGgyLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgY2hhbm5lbERpdi5jbGFzc0xpc3QuYWRkKFwiY2hhbm5lbFwiKTtcbiAgY2hhbm5lbFZvbHVtZURpdi5jbGFzc0xpc3QuYWRkKFwiY2hhbm5lbC12b2x1bWVcIik7XG5cbiAgbGV0IHZvbHVtZVNsaWRlciA9IGNyZWF0ZVJhbmdlKDAsIDEsIDAuMDAxLCBjaGFubmVsLmdhaW4udmFsdWUsIFwidm9sdW1lXCIpO1xuXG4gIHZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2OiBhbnkpID0+IHtcbiAgICBjaGFubmVsLmdhaW4uc2V0VmFsdWVBdFRpbWUoZXYuc3JjRWxlbWVudC52YWx1ZUFzTnVtYmVyLCAwKTtcbiAgfSk7XG5cbiAgY2hhbm5lbFZvbHVtZURpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChcIlZvbHVtZVwiLCBcIm1hc3Rlci12b2x1bWVcIikpO1xuICBjaGFubmVsVm9sdW1lRGl2LmFwcGVuZENoaWxkKHZvbHVtZVNsaWRlcik7XG4gIGNoYW5uZWxEaXYuYXBwZW5kQ2hpbGQoY2hhbm5lbGgyKTtcbiAgY2hhbm5lbERpdi5hcHBlbmRDaGlsZChjaGFubmVsVm9sdW1lRGl2KTtcbiAgcmV0dXJuIGNoYW5uZWxEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKHRleHQ6IHN0cmluZywgaHRtbEZvcjogc3RyaW5nKSB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJCb3goXG4gIG1pbjogbnVtYmVyLFxuICBtYXg6IG51bWJlcixcbiAgc3RlcDogbnVtYmVyLFxuICBkZWZhdWx0VmFsdWU6IG51bWJlclxuKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Lm1pbiA9IG1pbiArIFwiXCI7XG4gIGlucHV0Lm1heCA9IG1heCArIFwiXCI7XG4gIGlucHV0LnN0ZXAgPSBzdGVwICsgXCJcIjtcbiAgaW5wdXQuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlICsgXCJcIjtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm51bWJlclwiKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYW5nZShcbiAgbWluOiBudW1iZXIsXG4gIG1heDogbnVtYmVyLFxuICBzdGVwOiBudW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmdcbikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInJhbmdlXCI7XG4gIGlucHV0Lm1pbiA9IG1pbiArIFwiXCI7XG4gIGlucHV0Lm1heCA9IG1heCArIFwiXCI7XG4gIGlucHV0LnN0ZXAgPSBzdGVwICsgXCJcIjtcbiAgaW5wdXQuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlICsgXCJcIjtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJyYW5nZVwiKTtcblxuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbih0eXBlOiBzdHJpbmcpIHtcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi52YWx1ZSA9IHR5cGU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHR5cGU7XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgyKHRleHQ6IHN0cmluZykge1xuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGgyO1xufVxuXG5mdW5jdGlvbiBsb2dFbnZlbG9wZU9uQ29uc29sZShlbnZlbG9wZTogRW52ZWxvcGUpIHtcbiAgY29uc29sZS5jbGVhcigpO1xuICBjb25zb2xlLmxvZyhcIkF0dGFjayBUaW1lXCIpO1xuICBjb25zb2xlLmxvZyhlbnZlbG9wZS5FbnZlbG9wZVNoYXBlLmF0dGFjay50aW1lKTtcbiAgY29uc29sZS5sb2coXCJBdHRhY2sgUGVha1wiKTtcbiAgY29uc29sZS5sb2coZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5hdHRhY2sucGVhayk7XG4gIGNvbnNvbGUubG9nKFwiQXR0YWNrIFR5cGVcIik7XG4gIGNvbnNvbGUubG9nKGVudmVsb3BlLkVudmVsb3BlU2hhcGUuYXR0YWNrLnR5cGUpO1xuICBjb25zb2xlLmxvZyhcIkRlY2F5IFRpbWVcIik7XG4gIGNvbnNvbGUubG9nKGVudmVsb3BlLkVudmVsb3BlU2hhcGUuZGVjYXkudGltZSk7XG4gIGNvbnNvbGUubG9nKFwiRGVjYXkgUGVha1wiKTtcbiAgY29uc29sZS5sb2coZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5kZWNheS5wZWFrKTtcbiAgY29uc29sZS5sb2coXCJEZWNheSBUeXBlXCIpO1xuICBjb25zb2xlLmxvZyhlbnZlbG9wZS5FbnZlbG9wZVNoYXBlLmRlY2F5LnR5cGUpO1xuICBjb25zb2xlLmxvZyhcIlN1c3RhaW4gVGltZVwiKTtcbiAgY29uc29sZS5sb2coZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5zdXN0YWluLnRpbWUpO1xuICBjb25zb2xlLmxvZyhcIlJlbGVhc2UgVGltZVwiKTtcbiAgY29uc29sZS5sb2coZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnRpbWUpO1xuICBjb25zb2xlLmxvZyhcIlJlbGVhc2UgVHlwZVwiKTtcbiAgY29uc29sZS5sb2coZW52ZWxvcGUuRW52ZWxvcGVTaGFwZS5yZWxlYXNlLnR5cGUpO1xufVxuIiwiaW1wb3J0IHsgVm9sdW1lIH0gZnJvbSBcIi4vY2xhc3Nlcy92b2x1bWVcIjtcbmltcG9ydCB7IEVudmVsb3BlIH0gZnJvbSBcIi4vY2xhc3Nlcy9lbnZlbG9wZVwiO1xuaW1wb3J0IHsgT3NjaWxsYXRvciB9IGZyb20gXCIuL2NsYXNzZXMvb3NjaWxsYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgU3ludGggZXh0ZW5kcyBBdWRpb0NvbnRleHQge1xuICAvLyAjcmVnaW9uIFByaXZhdGUgZmllbGRzXG5cbiAgcHJpdmF0ZSBfb3NjaWxsYXRvcnM6IE9zY2lsbGF0b3JbXTtcbiAgcHJpdmF0ZSBfZW52ZWxvcGVzOiBFbnZlbG9wZVtdO1xuICBwcml2YXRlIF92b2x1bWVzOiBWb2x1bWVbXTtcbiAgcHJpdmF0ZSBfbWFzdGVyVm9sdW1lOiBWb2x1bWU7XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIEdldHRlciBhbmQgU2V0dGVyc1xuXG4gIHB1YmxpYyBnZXQgT3NjaWxsYXRvcnMoKTogT3NjaWxsYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy5fb3NjaWxsYXRvcnM7XG4gIH1cblxuICBwdWJsaWMgc2V0IE9zY2lsbGF0b3JzKHZhbHVlOiBPc2NpbGxhdG9yW10pIHtcbiAgICB0aGlzLl9vc2NpbGxhdG9ycyA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBFbnZlbG9wZXMoKTogRW52ZWxvcGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudmVsb3BlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgRW52ZWxvcGVzKHZhbHVlOiBFbnZlbG9wZVtdKSB7XG4gICAgdGhpcy5fZW52ZWxvcGVzID0gdmFsdWU7XG4gIH1cblxuICBnZXQgVm9sdW1lcygpOiBWb2x1bWVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZXM7XG4gIH1cblxuICBnZXQgTWFzdGVyVm9sdW1lKCk6IFZvbHVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb24gKi9cblxuICAvLyAjcmVnaW9uICBDb25zdHJ1Y3RvclxuXG4gIGNvbnN0cnVjdG9yKHZvbHVtZXMgPSAxLCBlbnZlbG9wZXMgPSAxLCBvc2NpbGxhdG9ycyA9IDMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fb3NjaWxsYXRvcnMgPSBbXTtcbiAgICB0aGlzLl9lbnZlbG9wZXMgPSBbXTtcbiAgICB0aGlzLl92b2x1bWVzID0gW107XG4gICAgdGhpcy5fbWFzdGVyVm9sdW1lID0gbmV3IFZvbHVtZSh0aGlzLCB0aGlzLmRlc3RpbmF0aW9uKTtcblxuICAgIGZvciAobGV0IG9zY2lsbGF0b3IgPSAwOyBvc2NpbGxhdG9yIDwgb3NjaWxsYXRvcnM7IG9zY2lsbGF0b3IrKykge1xuICAgICAgdGhpcy5Pc2NpbGxhdG9ycy5wdXNoKG5ldyBPc2NpbGxhdG9yKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgZW52ZWxvcGUgPSAwOyBlbnZlbG9wZSA8IGVudmVsb3BlczsgZW52ZWxvcGUrKykge1xuICAgICAgdGhpcy5FbnZlbG9wZXMucHVzaChuZXcgRW52ZWxvcGUodGhpcykpO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB2b2x1bWUgPSAwOyB2b2x1bWUgPCB2b2x1bWVzOyB2b2x1bWUrKykge1xuICAgICAgdGhpcy5Wb2x1bWVzLnB1c2gobmV3IFZvbHVtZSh0aGlzKSk7XG4gICAgfTtcblxuICAgIHRoaXMuT3NjaWxsYXRvcnMuZm9yRWFjaCgob3NjaWxsYXRvcikgPT4ge1xuICAgICAgb3NjaWxsYXRvci5jb25uZWN0KHRoaXMuRW52ZWxvcGVzWzBdKS5jb25uZWN0KHRoaXMuVm9sdW1lc1swXSkuY29ubmVjdCh0aGlzLk1hc3RlclZvbHVtZSk7XG4gICAgICBvc2NpbGxhdG9yLkRlc3RpbmF0aW9uTm9kZSA9IHRoaXMuRW52ZWxvcGVzWzBdO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gIEZ1bmN0aW9uc1xuXG4gIGNoYW5nZVZvbHVtZSh2b2x1bWU6IG51bWJlciwgZ2Fpbk5vZGU6IEdhaW5Ob2RlKSB7XG4gICAgZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgXCIuL3Njc3Njc3Mvc3ludGguY3NzXCI7XG5pbXBvcnQgeyBTeW50aCB9IGZyb20gXCIuL3RzL3N5bnRoXCI7XG5pbXBvcnQgeyBjcmVhdGVTeW50aCB9IGZyb20gXCIuL3RzL2ludGVyZmFjZXMvZ3VpL2d1aVwiO1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgbGV0IHN5bnRoanMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzeW50aGpzLmlkID0gXCJzeW50aGpzXCI7XG5cbiAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwic3ludGguanNcIjtcbiAgc3ludGhqcy5hcHBlbmRDaGlsZChoMSk7XG5cbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XG4gIHN5bnRoanMuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBwLmlubmVySFRNTCA9XG4gICAgXCJIaSwgdGhpcyBzb2Z0d2FyZS1zeW50aGVzaXplciBpcyBqdXN0IGF0IHRoZSBiZWdpbm5pbmcuIEkgc3RhcnRlZCB3aXRoIFwiO1xuXG4gIGEuaHJlZiA9IFwiaHR0cHM6Ly93d3cubW96aWxsYS5vcmcvZW4tVVMvZmlyZWZveC9uZXcvXCI7XG4gIGEuaW5uZXJIVE1MID0gXCJGaXJlZm94XCI7XG4gIHAuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgcC5pbm5lckhUTUwgKz0gXCIgYW5kIHN3aXRjaGVkIHRvIFwiO1xuXG4gIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID1cbiAgICBcImh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Nocm9tZS9hbnN3ZXIvOTUzNDY/Y289R0VOSUUuUGxhdGZvcm0lM0REZXNrdG9wJmhsPWVuXCI7XG4gIGEuaW5uZXJIVE1MID0gXCJDaHJvbWUsXCI7XG4gIHAuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgcC5pbm5lckhUTUwgKz0gXCIgICByZXNwZWN0aXZlbHkgYWRkZWQgQ2hyb21lLlwiO1xuXG4gIHN5bnRoanMuYXBwZW5kQ2hpbGQocCk7XG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBwLmlubmVySFRNTCArPSBcIlJlYXNvbjogQ29tcGF0aWJpbGl0eTogXCI7XG4gIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID0gXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQXVkaW9Db250ZXh0XCI7XG4gIGEuaW5uZXJIVE1MID0gXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQXVkaW9Db250ZXh0XCI7XG4gIHAuYXBwZW5kQ2hpbGQoYSk7XG4gIHAuaW5uZXJIVE1MICs9IFwiIGxvb2sgYXQgdGhlIGJvdHRvbSBhbmQgdGhlIGJlaGF2aW9yLlwiO1xuXG4gIHN5bnRoanMuYXBwZW5kQ2hpbGQocCk7XG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBwLmlubmVySFRNTCArPVxuICAgIFwiRm9yIGV4YW1wbGUgaW4gQ2hyb21lIHlvdSBoYXZlIHRvIHN0YXJ0IHRoZSBBdWRpb0NvbnRleHQgd2l0aCBhIGdlc3R1cmUsIGxpa2UgYSB0YXAgLyBjbGljay4gSW4gRmlyZWZveCBpcyB0aGUgcG9saWN5IG5vdCBzbyByZXN0cmljdGVkLlwiO1xuXG4gIHN5bnRoanMuYXBwZW5kQ2hpbGQocCk7XG5cbiAgbGV0IHN0YXJ0U3ludGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydFN5bnRoLmlkID0gXCJzdGFydC1zeW50aFwiO1xuICBzdGFydFN5bnRoLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICBzdGFydFN5bnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHN5bnRoanMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bnRoanNcIik7XG5cbiAgICBpZiAoc3ludGhqcyAhPSBudWxsKSB7XG4gICAgICB3aGlsZSAoc3ludGhqcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgc3ludGhqcy5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN5bnRoID0gbmV3IFN5bnRoKCk7XG4gICAgICBjcmVhdGVTeW50aChzeW50aCwgc3ludGhqcyk7XG4gICAgfVxuICB9KTtcblxuICBzeW50aGpzLmFwcGVuZENoaWxkKHN0YXJ0U3ludGgpO1xuXG4gIHJldHVybiBzeW50aGpzO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXJ0KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==