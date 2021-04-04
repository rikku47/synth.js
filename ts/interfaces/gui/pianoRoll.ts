let channels = [];

function createPianoRoll(keys: Key[], channels: Channel[]) {
  let pianoRoll = document.getElementById("pianoRoll");

  if (pianoRoll != null) {
    let keyInOctave = 0;
    const keysReversed = keys.reverse();

    for (let index = 0; index < keysReversed.length; index++) {
      const key = keysReversed[index];

      let pianoKey = document.createElement("button");

      pianoKey.textContent = key.NotationEN;
      pianoKey.value = key.Frequency + "";

      if (keyInOctave == 12) {
        keyInOctave = 0;
      }

      if (
        keyInOctave == 1 ||
        keyInOctave == 3 ||
        keyInOctave == 6 ||
        keyInOctave == 8 ||
        keyInOctave == 10
      ) {
        pianoKey.classList.add("black");
      } else {
        pianoKey.classList.add("white");
      }

      pianoKey.addEventListener("click", (ev: any) => {
        let frequency = Number(ev.currentTarget.value);

        console.log(frequency);

        channels.forEach((channel) => {
          channel.Oscillators.forEach((oscillator) => {
            oscillator.changeOscillatorFrequncy(frequency);
          });

          // channel.applyEnvelope(channel.Envelope);
        });
      });

      pianoRoll.appendChild(pianoKey);

      keyInOctave++;
    }
  }
}