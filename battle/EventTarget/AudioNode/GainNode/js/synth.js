"use strict";
let audioContext = new AudioContext();
let osc1 = audioContext.createOscillator();
let osc2 = audioContext.createOscillator();
let osc3 = audioContext.createOscillator();
let osc4 = audioContext.createOscillator();
let osc1gain = audioContext.createGain();
let osc2gain = audioContext.createGain();
let osc3gain = audioContext.createGain();
let osc4gain = audioContext.createGain();
let adsr = audioContext.createGain();
let attackAmplitude = 0;
let attackTime = 0;
let decayAmplitude = 0;
let decayTime = 0;
let sustainTime = 0;
let releaseTime = 0;
let filter = audioContext.createBiquadFilter();
let stutter = audioContext.createGain();
let distortion = audioContext.createWaveShaper();
let delay = audioContext.createDelay();
let reverb = audioContext.createConvolver();
let master = audioContext.createGain();
osc1gain.gain.value = 0.125;
osc2gain.gain.value = 0.125;
osc3gain.gain.value = 0.125;
osc4gain.gain.value = 0.125;
adsr.gain.value = 0;
master.gain.value = 0.5;
filter.type = "allpass";
osc1.connect(osc1gain).connect(adsr);
osc2.connect(osc2gain).connect(adsr);
osc3.connect(osc3gain).connect(adsr);
osc4.connect(osc4gain).connect(adsr);
adsr.connect(filter);
distortion.curve = makeDistortionCurve(50, 44100);
distortion.oversample = "4x";
delay.delayTime.value = 0;
reverb.buffer = impulseResponse(2, 2, false);
filter
    // .connect(stutter)
    // .connect(distortion)
    // .connect(delay)
    // .connect(reverb)
    .connect(master)
    .connect(audioContext.destination);
function makeDistortionCurve(amount, sampleRate) {
    const k = typeof amount === "number" ? amount : 50;
    const n_samples = sampleRate;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; i++) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}
;
function impulseResponse(duration, decay, reverse) {
    var sampleRate = audioContext.sampleRate;
    var length = sampleRate * duration;
    var impulse = audioContext.createBuffer(2, length, sampleRate);
    var impulseL = impulse.getChannelData(0);
    var impulseR = impulse.getChannelData(1);
    if (!decay)
        decay = 2.0;
    for (var i = 0; i < length; i++) {
        var n = reverse ? length - i : i;
        impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }
    return impulse;
}
;
let osc1Type = document.getElementById("wave-form-osc1");
osc1Type?.addEventListener("input", () => {
    if (osc1Type.value == "sine") {
        osc1.type = "sine";
    }
    else if (osc1Type.value == "sawtooth") {
        osc1.type = "sawtooth";
    }
    else if (osc1Type.value == "triangle") {
        osc1.type = "triangle";
    }
    else if (osc1Type.value == "square") {
        osc1.type = "square";
    }
    ;
});
let osc1Frequency = document.getElementById("frequency-osc1");
osc1Frequency?.addEventListener("input", () => {
    osc1.frequency.value = Number(osc1Frequency.value);
});
let osc1Detune = document.getElementById("detune-osc1");
osc1Detune?.addEventListener("input", () => {
    console.log(osc1Detune.value);
    osc1.detune.value = Number(osc1Detune.value);
});
let osc1GainSlider = document.getElementById("gain-osc1-slider");
osc1GainSlider?.addEventListener("input", () => {
    osc1GainInput.value = osc1GainSlider.value;
    osc1gain.gain.value = Number(osc1GainSlider.value);
});
let osc1GainInput = document.getElementById("gain-osc1-input");
osc1GainInput?.addEventListener("input", () => {
    osc1GainSlider.value = osc1GainInput.value;
    osc1gain.gain.value = Number(osc1GainInput.value);
});
let osc2Type = document.getElementById("wave-form-osc2");
osc2Type?.addEventListener("input", () => {
    if (osc2Type.value == "sine") {
        osc2.type = "sine";
    }
    else if (osc2Type.value == "sawtooth") {
        osc2.type = "sawtooth";
    }
    else if (osc2Type.value == "triangle") {
        osc2.type = "triangle";
    }
    else if (osc2Type.value == "square") {
        osc2.type = "square";
    }
    ;
});
let osc2Frequency = document.getElementById("frequency-osc2");
osc2Frequency?.addEventListener("input", () => {
    osc2.frequency.value = Number(osc2Frequency.value);
});
let osc2Detune = document.getElementById("detune-osc2");
osc2Detune?.addEventListener("input", () => {
    console.log(osc2Detune.value);
    osc2.detune.value = Number(osc2Detune.value);
});
let osc2GainSlider = document.getElementById("gain-osc2-slider");
osc2GainSlider?.addEventListener("input", () => {
    osc2GainInput.value = osc2GainSlider.value;
    osc2gain.gain.value = Number(osc2GainSlider.value);
});
let osc2GainInput = document.getElementById("gain-osc2-input");
osc2GainInput?.addEventListener("input", () => {
    osc2GainSlider.value = osc2GainInput.value;
    osc2gain.gain.value = Number(osc2GainInput.value);
});
let osc3Type = document.getElementById("wave-form-osc3");
osc3Type?.addEventListener("input", () => {
    if (osc3Type.value == "sine") {
        osc3.type = "sine";
    }
    else if (osc3Type.value == "sawtooth") {
        osc3.type = "sawtooth";
    }
    else if (osc3Type.value == "triangle") {
        osc3.type = "triangle";
    }
    else if (osc3Type.value == "square") {
        osc3.type = "square";
    }
    ;
});
let osc3Frequency = document.getElementById("frequency-osc3");
osc1Frequency?.addEventListener("input", () => {
    osc3.frequency.value = Number(osc3Frequency.value);
});
let osc3Detune = document.getElementById("detune-osc3");
osc3Detune?.addEventListener("input", () => {
    console.log(osc3Detune.value);
    osc3.detune.value = Number(osc3Detune.value);
});
let osc3GainSlider = document.getElementById("gain-osc3-slider");
osc3GainSlider?.addEventListener("input", () => {
    osc3GainInput.value = osc3GainSlider.value;
    osc3gain.gain.value = Number(osc3GainSlider.value);
});
let osc3GainInput = document.getElementById("gain-osc3-input");
osc3GainInput?.addEventListener("input", () => {
    osc3GainSlider.value = osc3GainInput.value;
    osc3gain.gain.value = Number(osc3GainInput.value);
});
let osc4Type = document.getElementById("wave-form-osc4");
osc4Type?.addEventListener("input", () => {
    if (osc4Type.value == "sine") {
        osc4.type = "sine";
    }
    else if (osc4Type.value == "sawtooth") {
        osc4.type = "sawtooth";
    }
    else if (osc4Type.value == "triangle") {
        osc4.type = "triangle";
    }
    else if (osc4Type.value == "square") {
        osc4.type = "square";
    }
    ;
});
let osc4Frequency = document.getElementById("frequency-osc4");
osc1Frequency?.addEventListener("input", () => {
    osc4.frequency.value = Number(osc4Frequency.value);
});
let osc4Detune = document.getElementById("detune-osc4");
osc4Detune?.addEventListener("input", () => {
    console.log(osc4Detune.value);
    osc4.detune.value = Number(osc4Detune.value);
});
let osc4GainSlider = document.getElementById("gain-osc4-slider");
osc4GainSlider?.addEventListener("input", () => {
    osc4GainInput.value = osc4GainSlider.value;
    osc4gain.gain.value = Number(osc4GainSlider.value);
});
let osc4GainInput = document.getElementById("gain-osc4-input");
osc4GainInput?.addEventListener("input", () => {
    osc4GainSlider.value = osc4GainInput.value;
    osc4gain.gain.value = Number(osc4GainInput.value);
});
let attackSlider = document.getElementById("attack");
attackSlider?.addEventListener("input", () => {
    attackInput.value = attackSlider.value;
    attackAmplitude = Number(attackSlider.value);
});
let attackInput = document.getElementById("attack-input");
attackInput?.addEventListener("input", () => {
    attackSlider.value = attackInput.value;
    attackAmplitude = Number(attackInput.value);
});
let decaySlider = document.getElementById("decay");
decaySlider?.addEventListener("input", () => {
    decayInput.value = decaySlider.value;
    decayAmplitude = Number(decaySlider.value);
});
let decayInput = document.getElementById("decay-input");
decayInput?.addEventListener("input", () => {
    decaySlider.value = decayInput.value;
    decayAmplitude = Number(decayInput.value);
});
let sustainSlider = document.getElementById("sustain");
sustainSlider?.addEventListener("input", () => {
    sustainInput.value = sustainSlider.value;
    sustainTime = Number(sustainSlider.value);
});
let sustainInput = document.getElementById("sustain-input");
sustainInput?.addEventListener("input", () => {
    sustainSlider.value = sustainInput.value;
    sustainTime = Number(sustainInput.value);
});
let releaseSlider = document.getElementById("release");
releaseSlider?.addEventListener("input", () => {
    releaseInput.value = releaseSlider.value;
    releaseTime = Number(releaseSlider.value);
});
let releaseInput = document.getElementById("release-input");
releaseInput?.addEventListener("input", () => {
    releaseSlider.value = releaseInput.value;
    releaseTime = Number(releaseInput.value);
});
function playC(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playCD(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playD(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playDE(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playE(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playF(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playFG(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playG(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playGA(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playA(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playAB(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function playB(frequency) {
    osc1.frequency.value = frequency;
    osc2.frequency.value = frequency;
    osc3.frequency.value = frequency;
    osc4.frequency.value = frequency;
}
;
function play() {
    let actx = new AudioContext();
    let lead = actx.createOscillator();
    let leadExpression = actx.createGain();
    leadExpression.gain.value = 0;
    let voiceHigh = actx.createOscillator();
    let voiceHighExpression = actx.createGain();
    voiceHighExpression.gain.value = 0;
    let voiceMiddle = actx.createOscillator();
    let voiceMiddleExpression = actx.createGain();
    voiceMiddleExpression.gain.value = 0;
    let bass = actx.createOscillator();
    let bassExpression = actx.createGain();
    bassExpression.gain.value = 0;
    let mic1 = actx.createGain();
    mic1.gain.value = 0;
    let mic2 = actx.createGain();
    mic2.gain.value = 0;
    let mic3 = actx.createGain();
    mic3.gain.value = 0;
    let mic4 = actx.createGain();
    mic4.gain.value = 0;
    lead.connect(leadExpression).connect(mic4).connect(actx.destination);
    voiceHigh.connect(voiceHighExpression).connect(mic1).connect(actx.destination);
    voiceMiddle.connect(voiceMiddleExpression).connect(mic2).connect(actx.destination);
    bass.connect(bassExpression).connect(mic3).connect(actx.destination);
    mic1.gain.value = 0.1;
    mic2.gain.value = 0.1;
    mic3.gain.value = 0.1;
    mic4.gain.value = 0.1;
    lead.start();
    voiceHigh.start();
    voiceMiddle.start();
    bass.start();
    // let musicSheet = {
    //     informations: {
    //         baseNote,
    //         bpm,
    //         wholeNote,
    //         halfNote,
    //         quarterNote,
    //         eighthNote,
    //         sixteenthNote
    //     },
    //     bars: [{
    //         instrument: {
    //             type: lead,
    //             expression: leadExpression
    //         },
    //         notes: [
    //             {
    //                 frequency: 659.255,
    //                 duration: wholeNote
    //             }
    //         ]
    //     }, {
    //         instrument: {
    //             type: lead,
    //             expression: leadExpression
    //         },
    //         notes: [
    //             {
    //                 frequency: 587.330,
    //                 duration: quarterNote
    //             },
    //             {
    //                 frequency: 523.251,
    //                 duration: quarterNote
    //             },
    //             {
    //                 frequency: 587.330,
    //                 duration: halfNote
    //             }
    //         ]
    //     }, {
    //         instrument: {
    //             type: lead,
    //             expression: leadExpression
    //         },
    //         notes: [
    //             {
    //                 frequency: 523.251,
    //                 duration: quarterNote
    //             },
    //             {
    //                 frequency: 440,
    //                 duration: halfNote + quarterNote
    //             }
    //         ]
    //     }]
    // };
    // musicSheet.bars.forEach((bar) => {
    //     bar.notes.forEach((note) => {
    //         bar.instrument.type.frequency.setValueAtTime(actx.currentTime, bar.notes);
    //         bar.instrument.expression.gain.linearRampToValueAtTime(0.2, timeLine.note1.start);
    //         bar.instrument.expression.gain.linearRampToValueAtTime(0, timeLine.note1.start);
    //     });
    // });
    class MusicSheet {
        xAxis = 4;
        yAxis = 2;
        minute = 60;
        sampleRate = 44100;
        baseFrequency = 440;
        // in der Regel sind 4 Schläge zu 4 Viertelnoten eine ganze Note.
        _bpm = 120;
        get bpm() {
            return this._bpm;
        }
        ;
        set bpm(value) {
            this._bpm = value;
            this.totalWholeNotesPerMinute = this.bpm / this.baseBeatNoteValue;
            this.wholeNote = this.minute / this.totalWholeNotesPerMinute;
            this.halfNote = this.wholeNote / 2;
            this.quarterNote = this.wholeNote / 4;
            this.eighthNote = this.wholeNote / 8;
            this.sixteenthNote = this.wholeNote / 16;
        }
        ;
        _baseBeatNoteValue = 4;
        get baseBeatNoteValue() {
            return this._baseBeatNoteValue;
        }
        ;
        set baseBeatNoteValue(value) {
            this._baseBeatNoteValue = value;
        }
        ;
        totalWholeNotesPerMinute = 30;
        wholeNote = 2;
        halfNote = 1;
        quarterNote = 0.25;
        eighthNote = 0.125;
        sixteenthNote = 0.0625;
        constructor() {
        }
        ;
        changeBpm() {
        }
        ;
        renderer() {
        }
        ;
    }
    ;
    // let timeLine = {
    //     note1: {
    //         start: actx.currentTime + wholeNote,
    //         end: actx.currentTime + wholeNote + halfNote
    //     },
    //     note2: {
    //         start: actx.currentTime + wholeNote + halfNote + wholeNote,
    //         end: actx.currentTime + wholeNote + halfNote + wholeNote + halfNote
    //     },
    //     note3: {
    //         start: actx.currentTime + wholeNote + halfNote + wholeNote + halfNote + wholeNote,
    //         end: actx.currentTime + wholeNote + halfNote + wholeNote + halfNote + wholeNote + halfNote
    //     },
    //     note4: {
    //         start: actx.currentTime + wholeNote + halfNote + wholeNote + halfNote + wholeNote + halfNote + wholeNote,
    //         end: actx.currentTime + wholeNote + halfNote + wholeNote + halfNote + wholeNote + halfNote + wholeNote + halfNote
    //     }
    // };
    // Note1
    // voiceHigh.frequency.value = 659.255;
    // lead.frequency.value = voiceHigh.frequency.value * 2;
    // voiceMiddle.frequency.value = 523.251;
    // bass.frequency.value = 440;
    // leadExpression.gain.linearRampToValueAtTime(0.2, timeLine.note1.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0.1, timeLine.note1.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0, timeLine.note1.end);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0.1, timeLine.note1.start);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0, timeLine.note1.end);
    // bassExpression.gain.linearRampToValueAtTime(0.1, timeLine.note1.start);
    // bassExpression.gain.linearRampToValueAtTime(0, timeLine.note1.end);
    // Note2
    // voiceHigh.frequency.setValueAtTime(698.456, timeLine.note1.end);
    // lead.frequency.setValueAtTime(voiceHigh.frequency.value * 2, timeLine.note1.end);
    // voiceMiddle.frequency.setValueAtTime(523.251, timeLine.note1.end);
    // bass.frequency.setValueAtTime(440, timeLine.note1.end);
    // voiceHigh.frequency.setValueAtTime(660, timeLine.note2.start);
    // voiceMiddle.frequency.setValueAtTime(550, timeLine.note2.start);
    // bass.frequency.setValueAtTime(440, timeLine.note2.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0.1, timeLine.note2.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0, timeLine.note2.end);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0.1, timeLine.note2.start);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0, timeLine.note2.end);
    // bassExpression.gain.linearRampToValueAtTime(0.1, timeLine.note2.start);
    // bassExpression.gain.linearRampToValueAtTime(0, timeLine.note2.end);
    // // Note3
    // voiceHigh.frequency.setValueAtTime(659.255, timeLine.note2.end);
    // lead.frequency.setValueAtTime(voiceHigh.frequency.value * 2, timeLine.note2.end);
    // voiceMiddle.frequency.setValueAtTime(523.251, timeLine.note2.end);
    // bass.frequency.setValueAtTime(391.995, timeLine.note2.end);
    // voiceHigh.frequency.setValueAtTime(659.255, timeLine.note3.start);
    // voiceMiddle.frequency.setValueAtTime(554.365, timeLine.note3.start);
    // bass.frequency.setValueAtTime(440, timeLine.note3.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0.1, timeLine.note3.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0, timeLine.note3.end);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0.1, timeLine.note3.start);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0, timeLine.note3.end);
    // bassExpression.gain.linearRampToValueAtTime(0.1, timeLine.note3.start);
    // bassExpression.gain.linearRampToValueAtTime(0, timeLine.note3.end);
    // // Note4
    // voiceHigh.frequency.setValueAtTime(587.33, timeLine.note3.end);
    // lead.frequency.setValueAtTime(voiceHigh.frequency.value * 2, timeLine.note3.end);
    // voiceMiddle.frequency.setValueAtTime(493.883, timeLine.note3.end);
    // bass.frequency.setValueAtTime(391.995, timeLine.note3.end);
    // voiceHigh.frequency.setValueAtTime(660, timeLine.note4.start);
    // voiceMiddle.frequency.setValueAtTime(550, timeLine.note4.start);
    // bass.frequency.setValueAtTime(440, timeLine.note4.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0.1, timeLine.note4.start);
    // voiceHighExpression.gain.linearRampToValueAtTime(0, timeLine.note4.end);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0.1, timeLine.note4.start);
    // voiceMiddleExpression.gain.linearRampToValueAtTime(0, timeLine.note4.end);
    // bassExpression.gain.linearRampToValueAtTime(0.1, timeLine.note4.start);
    // bassExpression.gain.linearRampToValueAtTime(0, timeLine.note4.end);
}
;
//# sourceMappingURL=synth.js.map