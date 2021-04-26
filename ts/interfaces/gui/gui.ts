//#region Create synth.js

import { Synth } from "../../synth";
import createPianoRoll from "../../interfaces/gui/pianoRoll";
import { Oscillator } from "../../classes/oscillator";
import { Instrument } from "../../classes/instrument";

export default function createGui(synthjs: Synth, element: HTMLElement) {

  let synthContainer = element;

  if (synthContainer != null) {

    synthContainer.appendChild(
      createVolume(synthjs.MasterVolume, "Master Volume")
    );

    synthjs.Instruments.forEach((instrument) => {

      let instrumentDiv = document.createElement("div");

      instrumentDiv.appendChild(createVolume(instrument.Volume, "Volume"));

      instrumentDiv.appendChild(createEnvelopeControl(instrument));

      let oscillatorsDiv = document.createElement("div");

      let count = 0;

      instrument.OscillatorNodes.forEach((oscillator) => {

        count++;

        let oscillatorDiv = document.createElement("div");

        let select = document.createElement("select");

        select.appendChild(createOption("sine"));
        select.appendChild(createOption("square"));
        select.appendChild(createOption("triangle"));
        select.appendChild(createOption("sawtooth"));

        select.addEventListener("change", (ev: Event) => {
          oscillator.changeType((ev.target as HTMLInputElement).value);
        });

        oscillatorDiv.appendChild(createLabel("OSC" + count, "OSC" + count));
        oscillatorDiv.appendChild(select);

        // let buttonCreate = document.createElement("button");
        // buttonCreate.addEventListener("click", () => {
        //   if (!oscillator.Exist) {
        //     oscillator = new Oscillator(instrument.Context, instrument.Envelope);
        //   };
        // });
        // buttonCreate.textContent = "Create";

        // let buttonDestroy = document.createElement("button");
        // buttonDestroy.addEventListener("click", () => {
        //   oscillator.stop();
        // });
        // buttonDestroy.textContent = "Destroy";

        let buttonDisconnect = document.createElement("button");
        buttonDisconnect.addEventListener("click", () => {
          oscillator.disconnect();
        });
        buttonDisconnect.textContent = "Disconnect";

        let buttonConnect = document.createElement("button");
        buttonConnect.addEventListener("click", () => {
          oscillator.connect(instrument.Envelope);
        });
        buttonConnect.textContent = "Connect";

        // oscillatorDiv.appendChild(buttonCreate);
        // oscillatorDiv.appendChild(buttonDestroy);
        oscillatorDiv.appendChild(buttonDisconnect);
        oscillatorDiv.appendChild(buttonConnect);

        let InputDetune = createNumberBox(oscillator.detune.minValue, oscillator.detune.maxValue, 1, oscillator.detune.value);

        InputDetune.addEventListener("input", (ev: Event) => {
          oscillator.changeDtune((ev.target as HTMLInputElement).valueAsNumber);
        });

        oscillatorDiv.appendChild(InputDetune);

        oscillatorsDiv.appendChild(oscillatorDiv);
      })
      instrumentDiv.appendChild(oscillatorsDiv);
      synthContainer.appendChild(instrumentDiv);
    });

    synthContainer.appendChild(createPianoRoll(synthjs, 'en'));
  }
  //#endregion
}

function createEnvelopeControl(instrument: Instrument) {
  let minTime = 0;
  let maxTime = 20;
  let stepTime = 0.001;

  let minPeak = 0;
  let maxPeak = 1;
  let stepPeak = 0.001;

  let envelopeDiv = document.createElement("div");

  envelopeDiv.appendChild(createH2("Envelope"));
  envelopeDiv.appendChild(createH2("Attack"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    instrument,
    "Attack Time"
  );

  createGroupOfLabelRange(
    envelopeDiv,
    minPeak,
    maxPeak,
    stepPeak,
    instrument,
    "Attack Peak"
  );

  createGroupOfLabelSelection(envelopeDiv, instrument, "Attack Type");

  envelopeDiv.appendChild(createH2("Decay"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    instrument,
    "Decay Time"
  );

  createGroupOfLabelRange(
    envelopeDiv,
    minPeak,
    maxPeak,
    stepPeak,
    instrument,
    "Decay Peak"
  );

  createGroupOfLabelSelection(envelopeDiv, instrument, "Decay Type");

  envelopeDiv.appendChild(createH2("Sustain"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    instrument,
    "Sustain Time"
  );

  envelopeDiv.appendChild(createH2("Release"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    instrument,
    "Release Time"
  );

  createGroupOfLabelSelection(envelopeDiv, instrument, "Release Type");

  return envelopeDiv;
}

function createGroupOfLabelSelection(
  divToAppend: HTMLDivElement,
  instrument: Instrument,
  label: string
) {
  divToAppend.appendChild(createLabel(label, label));

  let selection = createSelection(label, ["linear", "exp"]);

  switch (label) {
    case "Attack Type":
      selection.addEventListener("change", (ev: Event) => {
        instrument.Envelope.AttackType = (ev.target as HTMLInputElement).value;
      });
      break;

    case "Decay Type":
      selection.addEventListener("change", (ev: Event) => {
        instrument.Envelope.DecayType = (ev.target as HTMLInputElement).value;
      });
      break;

    case "Release Type":
      selection.addEventListener("change", (ev: Event) => {
        instrument.Envelope.ReleaseType = (ev.target as HTMLInputElement).value;
      });
      break;
  }

  divToAppend.appendChild(selection);
}

function createGroupOfLabelRange(
  divToAppend: HTMLDivElement,
  minTime: number,
  maxTime: number,
  stepTime: number,
  instrument: Instrument,
  label: string
) {
  divToAppend.appendChild(createLabel(label, label));
  let range = createRange(minTime, maxTime, stepTime, 0, label);

  switch (label) {
    case "Attack Time":
      range.defaultValue = instrument.Envelope.AttackTime + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.AttackTime = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;

    case "Attack Peak":
      range.defaultValue = instrument.Envelope.AttackPeak + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.AttackPeak = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;

    case "Decay Time":
      range.defaultValue = instrument.Envelope.DecayTime + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.DecayTime = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;

    case "Decay Peak":
      range.defaultValue = instrument.Envelope.DecayPeak + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.DecayPeak = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;

    case "Sustain Time":
      range.defaultValue = instrument.Envelope.SustainTime + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.SustainTime = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;

    case "Release Time":
      range.defaultValue = instrument.Envelope.ReleaseTime + "";
      range.addEventListener("input", (ev: Event) => {
        instrument.Envelope.ReleaseTime = (ev.target as HTMLInputElement).valueAsNumber;
      });
      break;
  }

  divToAppend.appendChild(range);
}

function createSelection(name: string, options: string[]) {
  let typeSelect = document.createElement("select");
  typeSelect.name = name;

  options.forEach((option) => {
    typeSelect.appendChild(createOption(option));
  });

  return typeSelect;
}

function createVolume(volume: GainNode, title: string) {
  let volumeDiv = document.createElement("div");
  let volumeh2 = document.createElement("h2");
  let volumeVolumeDiv = document.createElement("div");

  volumeh2.textContent = title;

  volumeDiv.classList.add("volume");
  volumeVolumeDiv.classList.add("volume-volume");

  let volumeSlider = createRange(0, 1, 0.001, volume.gain.value, "volume");

  volumeSlider.addEventListener("input", (ev: any) => {
    volume.gain.setValueAtTime(ev.srcElement.valueAsNumber, 0);
  });

  volumeVolumeDiv.appendChild(createLabel("Volume", "master-volume"));
  volumeVolumeDiv.appendChild(volumeSlider);
  volumeDiv.appendChild(volumeh2);
  volumeDiv.appendChild(volumeVolumeDiv);
  return volumeDiv;
}

function createLabel(text: string, htmlFor: string) {
  let label = document.createElement("label");
  label.textContent = text;
  label.htmlFor = htmlFor;
  return label;
}

function createNumberBox(
  min: number,
  max: number,
  step: number,
  defaultValue: number
) {
  let input = document.createElement("input");
  input.type = "number";
  input.min = min + "";
  input.max = max + "";
  input.step = step + "";
  input.defaultValue = defaultValue + "";
  input.classList.add("number");
  return input;
}

function createRange(
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  name: string
) {
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

function createOption(type: string) {
  let option = document.createElement("option");
  option.value = type;
  option.textContent = type;
  return option;
}

function createH2(text: string) {
  let h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}