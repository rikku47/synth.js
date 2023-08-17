"use strict";
let sampleRate = document.getElementById("sample-rate");
let frequency = document.getElementById("frequency");
let detune = document.getElementById("detune");
let gain = document.getElementById("gain");
let type = document.getElementById("type");
let btnStart = document.getElementById("btnStart");
var audioContext;
var oscillator;
var volume;
function start() {
    audioContext = new AudioContext();
    oscillator = audioContext.createOscillator();
    oscillator.start();
    volume = audioContext.createGain();
    volume.gain.value = 0;
    oscillator.connect(volume).connect(audioContext.destination);
    sampleRate.value = audioContext.sampleRate.toString();
    frequency.max = oscillator.frequency.maxValue.toString();
    frequency.min = oscillator.frequency.minValue.toString();
    frequency.placeholder = oscillator.frequency.value.toString();
    frequency.step = "0.001";
    frequency.value = oscillator.frequency.value.toString();
    detune.max = oscillator.detune.maxValue.toString();
    detune.min = oscillator.detune.minValue.toString();
    detune.placeholder = oscillator.detune.value.toString();
    detune.step = "1";
    detune.value = oscillator.detune.value.toString();
    type.value = oscillator.type;
}
;
frequency.addEventListener("input", () => {
    oscillator.frequency.setValueAtTime(Number(frequency.value), audioContext.currentTime);
});
detune.addEventListener("input", () => {
    oscillator.detune.setValueAtTime(Number(detune.value), audioContext.currentTime);
});
type.addEventListener("input", () => {
    oscillator.type = type.value;
});
gain.addEventListener("input", () => {
    volume.gain.setValueAtTime(Number(gain.value), audioContext.currentTime);
});
//# sourceMappingURL=oscillator.js.map