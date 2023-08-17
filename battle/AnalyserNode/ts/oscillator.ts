//#region HTML elements
let sampleRate = document.getElementById("sample-rate") as HTMLInputElement;
let frequency = document.getElementById("frequency") as HTMLInputElement;
let detune = document.getElementById("detune") as HTMLInputElement;
let gain = document.getElementById("gain") as HTMLInputElement;
let type = document.getElementById("type") as HTMLSelectElement;
let btnStart = document.getElementById("btnStart") as HTMLButtonElement;
//#endregion

//#region Objects and variables
var audioContext: AudioContext;
var oscillator: OscillatorNode;
var volume: GainNode;
var analyser: AnalyserNode;
//#endregion

//#region Functions
function start() {
    audioContext = new AudioContext();

    oscillator = audioContext.createOscillator();
    oscillator.start();

    volume = audioContext.createGain();
    volume.gain.value = 0;

    analyser = audioContext.createAnalyser();


    
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
};
//#endregion

//#region Eventlisteners
frequency.addEventListener("input", ()=>{
oscillator.frequency.setValueAtTime(Number(frequency.value), audioContext.currentTime);
});

detune.addEventListener("input", ()=>{
    oscillator.detune.setValueAtTime(Number(detune.value), audioContext.currentTime);
});

type.addEventListener("input", ()=>{
    oscillator.type = type.value as OscillatorType;
});

gain.addEventListener("input", () => {
    volume.gain.setValueAtTime(Number(gain.value), audioContext.currentTime);
});
//#endregion