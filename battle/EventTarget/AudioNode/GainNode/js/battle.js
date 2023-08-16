"use strict";
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
//#region Objects and Variables
let audioContext0;
let oscillator;
let volume;
//#endregion
//#region Functions
function getVolume() {
    displayVolume.textContent = volume.gain.value.toString();
}
;
//#endregion
//#region Eventlisteners
btnStart.addEventListener("click", () => {
    audioContext0 = new AudioContext();
    oscillator = audioContext0.createOscillator();
    volume = audioContext0.createGain();
    volume.gain.value = 0;
    oscillator.connect(volume).connect(audioContext0.destination);
    oscillator.start();
    setInterval(getVolume, 100);
});
btnVolumeUp.addEventListener("click", () => {
    // volume.gain.setTargetAtTime(0.5, audioContext0.currentTime, 5);
    if (btnRadioInstant.checked) {
        volume.gain.setValueAtTime(0.5, audioContext0.currentTime);
    }
    else if (btnRadioLinear.checked) {
        volume.gain.linearRampToValueAtTime(0.5, audioContext0.currentTime + 5);
    }
    else if (btnRadioExponential.checked) {
        volume.gain.setValueAtTime(0.0001, audioContext0.currentTime);
        volume.gain.exponentialRampToValueAtTime(0.5, audioContext0.currentTime + 5);
    }
    ;
});
btnVolumeDown.addEventListener("click", () => {
    // volume.gain.setTargetAtTime(0.0, audioContext0.currentTime, 5);
    if (btnRadioInstant.checked) {
        volume.gain.setValueAtTime(0.0, audioContext0.currentTime);
    }
    else if (btnRadioLinear.checked) {
        volume.gain.linearRampToValueAtTime(0.0, audioContext0.currentTime + 5);
    }
    else if (btnRadioExponential.checked) {
        volume.gain.exponentialRampToValueAtTime(0.0001, audioContext0.currentTime + 5);
        volume.gain.setValueAtTime(0.0, audioContext0.currentTime + 5 + 100);
    }
    ;
});
//#endregion
//# sourceMappingURL=battle.js.map