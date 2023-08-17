//ANCHOR - synth
import * as _ from "lodash";
import "./scsscss/synth.css";
import { Synth } from "./ts/synth";

function start() {
  let synthjs = document.createElement("div");
  synthjs.id = "synthjs";

  let h1 = document.createElement("h1");
  h1.textContent = "synth.js";
  synthjs.appendChild(h1);

  let h2 = document.createElement("h1");
  h2.textContent = "Introduction";
  synthjs.appendChild(h2);

  let p = document.createElement("p");
  let br = document.createElement("br");
  let a = document.createElement("a");

  p.innerHTML =
    "Hi, this software-synthesizer is just at the beginning. I started with ";

  a.href = "https://www.mozilla.org/en-US/firefox/new/";
  a.innerHTML = "Firefox";
  p.appendChild(a);

  p.innerHTML += " and switched to ";

  a = document.createElement("a");
  a.href =
    "https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en";
  a.innerHTML = "Chrome,";
  p.appendChild(a);

  p.innerHTML += "   respectively added Chrome.";

  synthjs.appendChild(p);
  p = document.createElement("p");

  p.innerHTML += "Reason: Compatibility: ";
  a = document.createElement("a");
  a.href = "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext";
  a.innerHTML = "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext";
  p.appendChild(a);
  p.innerHTML += " look at the bottom and the behavior.";

  synthjs.appendChild(p);
  p = document.createElement("p");

  p.innerHTML +=
    "For example in Chrome you have to start the AudioContext with a gesture, like a tap / click. In Firefox is the policy not so restricted.";

  synthjs.appendChild(p);

  let startSynth = document.createElement("button");
  startSynth.id = "start-synth";
  startSynth.textContent = "Start";
  startSynth.addEventListener("click", () => {
    let container = document.getElementById("synthjs");

    if (container != null) {
      while (container.lastChild) {
        container.lastChild.remove();
      }

      const synth = new Synth();
      synth.createGui(container);
    }
  });

  synthjs.appendChild(startSynth);

  return synthjs;
}

document.body.appendChild(start());
