//#region Waveform
function waveform(params, oscillator) {
    // #1 get src value.
    let type = params.target.value;
    // #2 Set type of oscillator.
    oscillator.type = type;
};
//#endregion

//#region Frequency
function frequency(params, oscillator, id) {
    // #1 get src value.
    let frequency = Number(params.target.value);

    // #2 Set the frequency on the oscillator.
    oscillator.frequency.setValueAtTime(frequency, synthesizerWorkbench.audioContext.currentTime);

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = frequency;
};
//#endregion

//#region Detune
function detune(params, oscillator, id) {
    // #1 get src value.
    let detune = Number(params.target.value);

    // #2 Set the detune on the oscillator.
    oscillator.detune.setValueAtTime(detune, synthesizerWorkbench.audioContext.currentTime);

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = detune;
};

//#endregion

//#region Gain
function gain(params, gain, id) {
    // #1 get src value.
    let gainValue = Number(params.target.value);

    // #2 calculate new value based on the property of the object.
    gain.gain.setValueAtTime(gainValue, synthesizerWorkbench.audioContext.currentTime);

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = gainValue;
};
//#endregion

//#region Envelope
function setTime(params, timeTableEntry, id) {
    // #1 get src value.
    let time = Number(params.target.value);

    // #2 Set the time on the entry of the time table.
    timeTableEntry.time = time;

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = time;
};


function setAmplitude(params, timeTableEntry, id) {
    // #1 get src value.
    let amplitude = Number(params.target.value);

    // #2 calculate new value based on the property of the object.
    timeTableEntry.amplitude = amplitude;

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = amplitude;

};
//#endregion

//#region Effects
function setEffect(params, effect, id) {
    // #1 get src value.
    let gainValue = Number(params.target.value);

    // #2 calculate new value based on the property of the object.
    if (effect.components.gain1 != undefined) {
        effect.components.gain1.gain.setValueAtTime(gainValue, synthesizerWorkbench.audioContext.currentTime);
    }

    if (effect.components.gain2 != undefined) {
        effect.components.gain2.gain.setValueAtTime(1 - gainValue, synthesizerWorkbench.audioContext.currentTime);
    };

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = gainValue;
};

function setDistortion(params, distortion, id) {
    // #1 get src value.
    let mix = Number(params.target.value);

    // #2 calculate new value based and set it.
    let mixIn = mix * 100;
    let mixInFine = mix * 3;
    distortion.components.waveshaper.curve = makeDistortionCurve(mixIn, mixInFine);
    distortion.components.gain1.gain.setValueAtTime(1 - mix, synthesizerWorkbench.audioContext.currentTime);

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = mix;
};

function setDelay(params, delay, id) {
    // #1 get src value.
    let time = Number(params.target.value);

    // #2 calculate new value based and set it.
    delay.components.delay.delayTime.value = time;

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = time;
};

function setReverb(params, reverb, id) {
    // #1 get src value.
    let mix = Number(params.target.value);

    // #2 calculate new value based and set it.
    
    let mixIn = mix * 100;

    reverb.components.convolver.delayTime.value = time;
    reverb.components.gain1.gain.setValueAtTime(1 - mix, synthesizerWorkbench.audioContext.currentTime);

    // #3 update depending gui elements.
    let element = document.getElementById(id);
    element.value = time;
};
//#endregion