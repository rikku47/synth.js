import * as _ from "lodash";
import "./scsscss/synth.css";
import { Synth } from "./ts/synth";
import { createSynth } from "./ts/interfaces/gui/gui";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.id = "synth";

  return element;
}

function start() {
  let startSynth = document.createElement("button");
  startSynth.addEventListener("click", () => {
    const synth = new Synth();
    createSynth(synth);
  });
  startSynth.textContent = "Start";
  return startSynth;
}

document.body.appendChild(start());
document.body.appendChild(component());