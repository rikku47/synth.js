//#region Tone
let fsTon = document.createElement("fieldset");

let lgTon = document.createElement("legend");
lgTon.textContent = "Ton";

let btnStart = document.createElement("button");
btnStart.textContent = "Ton starten";
btnStart.type = "button";

fsTon.append(lgTon);
fsTon.append(btnStart);
document.body.append(fsTon);
//#endregion

//#region Volume
let fsVolume = document.createElement("fieldset");

let lgVolume = document.createElement("legend");
lgVolume.textContent = "Lautstärke";

let btnVolumeUp = document.createElement("button");
btnVolumeUp.textContent = "Volume Up";
btnVolumeUp.type = "button";

let btnVolumeDown = document.createElement("button");
btnVolumeDown.textContent = "Volume Down";
btnVolumeDown.type = "button";

let lblVolumeInstant = document.createElement("label");
lblVolumeInstant.htmlFor = "volume-instant-change";
lblVolumeInstant.textContent = "Instant";

let btnRadioInstant = document.createElement("input");
btnRadioInstant.id = "volume-instant-change";
btnRadioInstant.name = "volumeChangeType";
btnRadioInstant.type = "radio";

let lblVolumeLinear = document.createElement("label");
lblVolumeLinear.htmlFor = "volume-linear-change";
lblVolumeLinear.textContent = "Linear";

let btnRadioLinear = document.createElement("input");
btnRadioLinear.checked = true;
btnRadioInstant.id = "volume-linear-change";
btnRadioLinear.name = "volumeChangeType";
btnRadioLinear.type = "radio";

let lblVolumeExponential = document.createElement("label");
lblVolumeExponential.htmlFor = "volume-exponential-change";
lblVolumeExponential.textContent = "Exponential";

let btnRadioExponential = document.createElement("input");
btnRadioInstant.id = "volume-exponential-change";
btnRadioExponential.name = "volumeChangeType";
btnRadioExponential.type = "radio";

let displayVolume = document.createElement("p");

fsVolume.append(lgVolume);
fsVolume.append(btnVolumeUp);
fsVolume.append(btnVolumeDown);
fsVolume.append(lblVolumeInstant);
fsVolume.append(btnRadioInstant);
fsVolume.append(lblVolumeLinear);
fsVolume.append(btnRadioLinear);
fsVolume.append(lblVolumeExponential);
fsVolume.append(btnRadioExponential);
fsVolume.append(displayVolume);
document.body.append(fsVolume);
//#endregion

//#region Audio Graph
let fsAudioGraph = document.createElement("fieldset");

let lgAudioGraph = document.createElement("legend");
lgAudioGraph.textContent = "Audiograph";

let cvOscilloscope = document.createElement("canvas");
let cvOscilloscopeCtx = cvOscilloscope.getContext("2d");

fsAudioGraph.append(lgAudioGraph);
document.body.append(fsAudioGraph);
//#endregion

//#region Objects and Variables
let audioContext0: AudioContext;
let analyser: AnalyserNode;
let oscillator: OscillatorNode;
let volume: GainNode;
//#endregion

//#region Functions
function draw() {
    if (cvOscilloscopeCtx && analyser) {
        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        cvOscilloscopeCtx.fillStyle = "rgb(200, 200, 200)";
        cvOscilloscopeCtx.fillRect(0, 0, canvas.width, canvas.height);

        cvOscilloscopeCtx.lineWidth = 2;
        cvOscilloscopeCtx.strokeStyle = "rgb(0, 0, 0)";

        cvOscilloscopeCtx.beginPath();

        const sliceWidth = (canvas.width * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvas.height) / 2;

            if (i === 0) {
                cvOscilloscopeCtx.moveTo(x, y);
            } else {
                cvOscilloscopeCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        cvOscilloscopeCtx.lineTo(canvas.width, canvas.height / 2);
        cvOscilloscopeCtx.stroke();
    };
};

function getVolume() {
    displayVolume.textContent = volume.gain.value.toString();
};
//#endregion

//#region Eventlisteners
btnStart.addEventListener("click", () => {

    audioContext0 = new AudioContext();

    analyser = audioContext0.createAnalyser();
    oscillator = audioContext0.createOscillator();
    volume = audioContext0.createGain();

    analyser.fftSize = 2048;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    volume.gain.value = 0;

    oscillator.connect(volume).connect(analyser).connect(audioContext0.destination);

    oscillator.start();

    setInterval(getVolume, 100);
});

btnVolumeUp.addEventListener("click", () => {
    // volume.gain.setTargetAtTime(0.5, audioContext0.currentTime, 5);
    if (btnRadioInstant.checked) {
        volume.gain.setValueAtTime(0.5, audioContext0.currentTime);
    } else if (btnRadioLinear.checked) {
        volume.gain.linearRampToValueAtTime(0.5, audioContext0.currentTime + 5);
    } else if (btnRadioExponential.checked) {
        volume.gain.setValueAtTime(0.0001, audioContext0.currentTime);
        volume.gain.exponentialRampToValueAtTime(0.5, audioContext0.currentTime + 5);
    };
});

btnVolumeDown.addEventListener("click", () => {
    // volume.gain.setTargetAtTime(0.0, audioContext0.currentTime, 5);
    if (btnRadioInstant.checked) {
        volume.gain.setValueAtTime(0.0, audioContext0.currentTime);
    } else if (btnRadioLinear.checked) {
        volume.gain.linearRampToValueAtTime(0.0, audioContext0.currentTime + 5);
    } else if (btnRadioExponential.checked) {
        volume.gain.exponentialRampToValueAtTime(0.0001, audioContext0.currentTime + 5);
        volume.gain.setValueAtTime(0.0, audioContext0.currentTime + 5 + 100);
    };
});
//#endregion