var channels = [];
function createPianoRoll(keys, channels) {
    var pianoRoll = document.getElementById("pianoRoll");
    if (pianoRoll != null) {
        var keyInOctave = 0;
        var keysReversed = keys.reverse();
        for (var index = 0; index < keysReversed.length; index++) {
            var key = keysReversed[index];
            var pianoKey = document.createElement("button");
            pianoKey.textContent = key.NotationEN;
            pianoKey.value = key.Frequency + "";
            if (keyInOctave == 12) {
                keyInOctave = 0;
            }
            if (keyInOctave == 1 ||
                keyInOctave == 3 ||
                keyInOctave == 6 ||
                keyInOctave == 8 ||
                keyInOctave == 10) {
                pianoKey.classList.add("black");
            }
            else {
                pianoKey.classList.add("white");
            }
            pianoKey.addEventListener("click", function (ev) {
                var frequency = Number(ev.currentTarget.value);
                console.log(frequency);
                channels.forEach(function (channel) {
                    channel.Oscillators.forEach(function (oscillator) {
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
