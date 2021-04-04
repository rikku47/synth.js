//#region Create synth.js

import { Channel } from "../../classes/channel";
import { Envelope } from "../../classes/envelope";
import { Synth } from "../../synth";

export function createSynth(synthjs: Synth) {
  let synthContainer = document.getElementById("synth");

  if (synthContainer != null) {
    let oscillatorsDiv = document.createElement("div");

    synthjs.Oscillators.forEach((oscillator) => {
      let oscillatorDiv = document.createElement("div");

      let select = document.createElement("select");

      select.appendChild(createOption("sine"));
      select.appendChild(createOption("square"));
      select.appendChild(createOption("triangle"));
      select.appendChild(createOption("sawtooth"));

      select.addEventListener("change", (ev: any) => {
        oscillator.changeOscillatorType(ev.srcElement.value);
      });

      oscillatorDiv.appendChild(createLabel("OSC", "OSC"));
      oscillatorDiv.appendChild(select);

      let buttonStart = document.createElement("button");
      buttonStart.addEventListener("click", () => {
        if (oscillator.Status) {
          oscillator.connect(oscillator.Amplitude);
        } else {
          oscillator.start();
          oscillator.Status = true;
        }
      });
      buttonStart.textContent = "Start";

      let buttonStop = document.createElement("button");
      buttonStop.addEventListener("click", () => {
        oscillator.disconnect();
        // oscillator.stop(); // remain it?
        // oscillator.Status = false;
      });
      buttonStop.textContent = "Stop";

      oscillatorDiv.appendChild(buttonStart);
      oscillatorDiv.appendChild(buttonStop);

      oscillatorsDiv.appendChild(oscillatorDiv);
    });

    synthContainer.appendChild(oscillatorsDiv);
    synthContainer.appendChild(createEnvelopeControl(synthjs.Envelope));

    let buttonStartEnvelope = document.createElement("button");
    buttonStartEnvelope.addEventListener("click", () => {
      synthjs.Envelope.toggle();
    });
    buttonStartEnvelope.textContent = "Toggle Envelope";

    synthContainer.appendChild(buttonStartEnvelope);

    let channelsDiv = document.createElement("div");

    synthjs.Channels.forEach((channel) => {
      channelsDiv.appendChild(createChannel(channel, "Channel"));
    });

    synthContainer.appendChild(channelsDiv);

    synthContainer.appendChild(
      createChannel(synthjs.MasterChannel, "Master Channel")
    );

    // createPianoRoll(synthjs.Keys, synthjs.Channels);
  }
  //#endregion
}

function createEnvelopeControl(envelope: Envelope) {
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
    envelope,
    "Attack Time"
  );

  createGroupOfLabelRange(
    envelopeDiv,
    minPeak,
    maxPeak,
    stepPeak,
    envelope,
    "Attack Peak"
  );

  createGroupOfLabelSelection(envelopeDiv, envelope, "Attack Type");

  envelopeDiv.appendChild(createH2("Decay"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    envelope,
    "Decay Time"
  );

  createGroupOfLabelRange(
    envelopeDiv,
    minPeak,
    maxPeak,
    stepPeak,
    envelope,
    "Decay Peak"
  );

  createGroupOfLabelSelection(envelopeDiv, envelope, "Decay Type");

  envelopeDiv.appendChild(createH2("Sustain"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    envelope,
    "Sustain Time"
  );

  envelopeDiv.appendChild(createH2("Release"));

  createGroupOfLabelRange(
    envelopeDiv,
    minTime,
    maxTime,
    stepTime,
    envelope,
    "Release Time"
  );

  createGroupOfLabelSelection(envelopeDiv, envelope, "Release Type");

  return envelopeDiv;
}

function createGroupOfLabelSelection(
  divToAppend: HTMLDivElement,
  envelope: Envelope,
  label: string
) {
  divToAppend.appendChild(createLabel(label, label));

  let selection = createSelection(label, ["linear", "exp"]);

  switch (label) {
    case "Attack Type":
      selection.addEventListener("change", (ev: Event) => {
        envelope.EnvelopeShape.attack.type = (ev.target as HTMLInputElement).value;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Decay Type":
      selection.addEventListener("change", (ev: Event) => {
        envelope.EnvelopeShape.decay.type = (ev.target as HTMLInputElement).value;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Release Type":
      selection.addEventListener("change", (ev: Event) => {
        envelope.EnvelopeShape.release.type = (ev.target as HTMLInputElement).value;
        logEnvelopeOnConsole(envelope);
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
  envelope: Envelope,
  label: string
) {
  divToAppend.appendChild(createLabel(label, label));
  let range = createRange(minTime, maxTime, stepTime, 0, label);

  switch (label) {
    case "Attack Time":
      range.defaultValue = envelope.EnvelopeShape.attack.time + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.attack.time = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Attack Peak":
      range.defaultValue = envelope.EnvelopeShape.attack.peak + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.attack.peak = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Decay Time":
      range.defaultValue = envelope.EnvelopeShape.decay.time + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.decay.time = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Decay Peak":
      range.defaultValue = envelope.EnvelopeShape.decay.peak + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.decay.peak = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Sustain Time":
      range.defaultValue = envelope.EnvelopeShape.sustain.time + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.sustain.time = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
      });
      break;

    case "Release Time":
      range.defaultValue = envelope.EnvelopeShape.release.time + "";
      range.addEventListener("input", (ev: Event) => {
        envelope.EnvelopeShape.release.time = (ev.target as HTMLInputElement).valueAsNumber;
        logEnvelopeOnConsole(envelope);
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

function createChannel(channel: Channel, title: string) {
  let channelDiv = document.createElement("div");
  let channelh2 = document.createElement("h2");
  let channelVolumeDiv = document.createElement("div");

  channelh2.textContent = title;

  channelDiv.classList.add("channel");
  channelVolumeDiv.classList.add("channel-volume");

  let volumeSlider = createRange(0, 1, 0.001, channel.gain.value, "volume");

  volumeSlider.addEventListener("input", (ev: any) => {
    channel.gain.setValueAtTime(ev.srcElement.valueAsNumber, 0);
  });

  channelVolumeDiv.appendChild(createLabel("Volume", "master-volume"));
  channelVolumeDiv.appendChild(volumeSlider);
  channelDiv.appendChild(channelh2);
  channelDiv.appendChild(channelVolumeDiv);
  return channelDiv;
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

function logEnvelopeOnConsole(envelope: Envelope) {
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
