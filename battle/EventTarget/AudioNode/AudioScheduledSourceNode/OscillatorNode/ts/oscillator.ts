var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
console.log(oscillator.frequency.maxValue);
