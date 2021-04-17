"use strict";
//#region Create synth.js
exports.__esModule = true;
exports.createSynth = void 0;
function createSynth(synthjs, element) {
    var synthContainer = element;
    if (synthContainer != null) {
        var oscillatorsDiv_1 = document.createElement("div");
        synthjs.Oscillators.forEach(function (oscillator) {
            var oscillatorDiv = document.createElement("div");
            var select = document.createElement("select");
            select.appendChild(createOption("sine"));
            select.appendChild(createOption("square"));
            select.appendChild(createOption("triangle"));
            select.appendChild(createOption("sawtooth"));
            select.addEventListener("change", function (ev) {
                oscillator.changeOscillatorType(ev.srcElement.value);
            });
            oscillatorDiv.appendChild(createLabel("OSC", "OSC"));
            oscillatorDiv.appendChild(select);
            var buttonStart = document.createElement("button");
            buttonStart.addEventListener("click", function () {
                if (oscillator.Status) {
                    oscillator.connect(oscillator.Amplitude);
                }
                else {
                    oscillator.start();
                    oscillator.Status = true;
                }
            });
            buttonStart.textContent = "Start";
            var buttonStop = document.createElement("button");
            buttonStop.addEventListener("click", function () {
                oscillator.disconnect();
                // oscillator.stop(); // remain it?
                // oscillator.Status = false;
            });
            buttonStop.textContent = "Stop";
            oscillatorDiv.appendChild(buttonStart);
            oscillatorDiv.appendChild(buttonStop);
            oscillatorsDiv_1.appendChild(oscillatorDiv);
        });
        synthContainer.appendChild(oscillatorsDiv_1);
        synthContainer.appendChild(createEnvelopeControl(synthjs.Envelope));
        var buttonStartEnvelope = document.createElement("button");
        buttonStartEnvelope.addEventListener("click", function () {
            synthjs.Envelope.toggle();
        });
        buttonStartEnvelope.textContent = "Toggle Envelope";
        synthContainer.appendChild(buttonStartEnvelope);
        var channelsDiv_1 = document.createElement("div");
        synthjs.Channels.forEach(function (channel) {
            channelsDiv_1.appendChild(createChannel(channel, "Channel"));
        });
        synthContainer.appendChild(channelsDiv_1);
        synthContainer.appendChild(createChannel(synthjs.MasterChannel, "Master Channel"));
        // createPianoRoll(synthjs.Keys, synthjs.Channels);
    }
    //#endregion
}
exports.createSynth = createSynth;
function createEnvelopeControl(envelope) {
    var minTime = 0;
    var maxTime = 20;
    var stepTime = 0.001;
    var minPeak = 0;
    var maxPeak = 1;
    var stepPeak = 0.001;
    var envelopeDiv = document.createElement("div");
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
    var selection = createSelection(label, ["linear", "exp"]);
    switch (label) {
        case "Attack Type":
            selection.addEventListener("change", function (ev) {
                envelope.EnvelopeShape.attack.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Type":
            selection.addEventListener("change", function (ev) {
                envelope.EnvelopeShape.decay.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Release Type":
            selection.addEventListener("change", function (ev) {
                envelope.EnvelopeShape.release.type = ev.target.value;
                logEnvelopeOnConsole(envelope);
            });
            break;
    }
    divToAppend.appendChild(selection);
}
function createGroupOfLabelRange(divToAppend, minTime, maxTime, stepTime, envelope, label) {
    divToAppend.appendChild(createLabel(label, label));
    var range = createRange(minTime, maxTime, stepTime, 0, label);
    switch (label) {
        case "Attack Time":
            range.defaultValue = envelope.EnvelopeShape.attack.time + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.attack.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Attack Peak":
            range.defaultValue = envelope.EnvelopeShape.attack.peak + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.attack.peak = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Time":
            range.defaultValue = envelope.EnvelopeShape.decay.time + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.decay.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Decay Peak":
            range.defaultValue = envelope.EnvelopeShape.decay.peak + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.decay.peak = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Sustain Time":
            range.defaultValue = envelope.EnvelopeShape.sustain.time + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.sustain.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
        case "Release Time":
            range.defaultValue = envelope.EnvelopeShape.release.time + "";
            range.addEventListener("input", function (ev) {
                envelope.EnvelopeShape.release.time = ev.target.valueAsNumber;
                logEnvelopeOnConsole(envelope);
            });
            break;
    }
    divToAppend.appendChild(range);
}
function createSelection(name, options) {
    var typeSelect = document.createElement("select");
    typeSelect.name = name;
    options.forEach(function (option) {
        typeSelect.appendChild(createOption(option));
    });
    return typeSelect;
}
function createChannel(channel, title) {
    var channelDiv = document.createElement("div");
    var channelh2 = document.createElement("h2");
    var channelVolumeDiv = document.createElement("div");
    channelh2.textContent = title;
    channelDiv.classList.add("channel");
    channelVolumeDiv.classList.add("channel-volume");
    var volumeSlider = createRange(0, 1, 0.001, channel.gain.value, "volume");
    volumeSlider.addEventListener("input", function (ev) {
        channel.gain.setValueAtTime(ev.srcElement.valueAsNumber, 0);
    });
    channelVolumeDiv.appendChild(createLabel("Volume", "master-volume"));
    channelVolumeDiv.appendChild(volumeSlider);
    channelDiv.appendChild(channelh2);
    channelDiv.appendChild(channelVolumeDiv);
    return channelDiv;
}
function createLabel(text, htmlFor) {
    var label = document.createElement("label");
    label.textContent = text;
    label.htmlFor = htmlFor;
    return label;
}
function createNumberBox(min, max, step, defaultValue) {
    var input = document.createElement("input");
    input.type = "number";
    input.min = min + "";
    input.max = max + "";
    input.step = step + "";
    input.defaultValue = defaultValue + "";
    input.classList.add("number");
    return input;
}
function createRange(min, max, step, defaultValue, name) {
    var input = document.createElement("input");
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
    var option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    return option;
}
function createH2(text) {
    var h2 = document.createElement("h2");
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
