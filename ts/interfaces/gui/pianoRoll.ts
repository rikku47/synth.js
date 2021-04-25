import { Synth } from "../../synth";

let keys = [{
  "PianoKeyNumber": 88,
  "NotationEN": "C8",
  "NotationDE": "c5",
  "Frequency": 4186.01
},
{
  "PianoKeyNumber": 87,
  "NotationEN": "B7",
  "NotationDE": "h4",
  "Frequency": 3951.07
}, {
  "PianoKeyNumber": 86,
  "NotationEN": "A#7/Bb7",
  "NotationDE": "ais4/b4",
  "Frequency": 3729.31
}, {
  "PianoKeyNumber": 85,
  "NotationEN": "A7",
  "NotationDE": "a4",
  "Frequency": 3520.00
}, {
  "PianoKeyNumber": 84,
  "NotationEN": "G#7/Ab7",
  "NotationDE": "gis4/as4",
  "Frequency": 3322.44
}, {
  "PianoKeyNumber": 83,
  "NotationEN": "G7",
  "NotationDE": "g4",
  "Frequency": 3135.96
}, {
  "PianoKeyNumber": 82,
  "NotationEN": "F#7/Gb7",
  "NotationDE": "fis4/ges4",
  "Frequency": 2959.96
}, {
  "PianoKeyNumber": 81,
  "NotationEN": "F7",
  "NotationDE": "f4",
  "Frequency": 2793.83
}, {
  "PianoKeyNumber": 80,
  "NotationEN": "E7",
  "NotationDE": "e4",
  "Frequency": 2637.02
}, {
  "PianoKeyNumber": 79,
  "NotationEN": "D#7/Eb7",
  "NotationDE": "dis4/es4",
  "Frequency": 2489.02
}, {
  "PianoKeyNumber": 78,
  "NotationEN": "D7",
  "NotationDE": "d4",
  "Frequency": 2349.32
}, {
  "PianoKeyNumber": 77,
  "NotationEN": "C#7/Db7",
  "NotationDE": "cis4/des4",
  "Frequency": 2217.46
}, {
  "PianoKeyNumber": 76,
  "NotationEN": "C7",
  "NotationDE": "c4",
  "Frequency": 2093.00
}, {
  "PianoKeyNumber": 75,
  "NotationEN": "B6",
  "NotationDE": "h3",
  "Frequency": 1975.53
}, {
  "PianoKeyNumber": 74,
  "NotationEN": "A#6/Bb6",
  "NotationDE": "ais3/b3",
  "Frequency": 1864.66
}, {
  "PianoKeyNumber": 73,
  "NotationEN": "A6",
  "NotationDE": "a3",
  "Frequency": 1760.00
}, {
  "PianoKeyNumber": 72,
  "NotationEN": "G#6/Ab6",
  "NotationDE": "gis3/as3",
  "Frequency": 1661.22
}, {
  "PianoKeyNumber": 71,
  "NotationEN": "G6",
  "NotationDE": "g3",
  "Frequency": 1567.98
}, {
  "PianoKeyNumber": 70,
  "NotationEN": "F#6/Gb6",
  "NotationDE": "fis3/ges3",
  "Frequency": 1479.98
}, {
  "PianoKeyNumber": 69,
  "NotationEN": "F6",
  "NotationDE": "f3",
  "Frequency": 1396.91
}, {
  "PianoKeyNumber": 68,
  "NotationEN": "E6",
  "NotationDE": "e3",
  "Frequency": 1318.51
}, {
  "PianoKeyNumber": 67,
  "NotationEN": "D#6/Eb6",
  "NotationDE": "dis3/es3",
  "Frequency": 1244.51
}, {
  "PianoKeyNumber": 66,
  "NotationEN": "D6",
  "NotationDE": "d3",
  "Frequency": 1174.66
}, {
  "PianoKeyNumber": 65,
  "NotationEN": "C#6/Db6",
  "NotationDE": "cis3/des3",
  "Frequency": 1108.73
}, {
  "PianoKeyNumber": 64,
  "NotationEN": "C6",
  "NotationDE": "c3",
  "Frequency": 1046.50
}, {
  "PianoKeyNumber": 63,
  "NotationEN": "B5",
  "NotationDE": "h2",
  "Frequency": 987.767
}, {
  "PianoKeyNumber": 62,
  "NotationEN": "A#5/Bb5",
  "NotationDE": "ais2/b2",
  "Frequency": 932.328
}, {
  "PianoKeyNumber": 61,
  "NotationEN": "A5",
  "NotationDE": "a2",
  "Frequency": 880.000
}, {
  "PianoKeyNumber": 60,
  "NotationEN": "G#5/Ab5",
  "NotationDE": "gis2/as2",
  "Frequency": 830.609
}, {
  "PianoKeyNumber": 59,
  "NotationEN": "G5",
  "NotationDE": "g2",
  "Frequency": 783.991
}, {
  "PianoKeyNumber": 58,
  "NotationEN": "F#5/Gb5",
  "NotationDE": "fis2/ges2",
  "Frequency": 739.989
}, {
  "PianoKeyNumber": 57,
  "NotationEN": "F5",
  "NotationDE": "f2",
  "Frequency": 698.456
}, {
  "PianoKeyNumber": 56,
  "NotationEN": "E5",
  "NotationDE": "e2",
  "Frequency": 659.255
}, {
  "PianoKeyNumber": 55,
  "NotationEN": "D#5/Eb5",
  "NotationDE": "dis2/es2",
  "Frequency": 622.254
}, {
  "PianoKeyNumber": 54,
  "NotationEN": "D5",
  "NotationDE": "d2",
  "Frequency": 587.330
}, {
  "PianoKeyNumber": 53,
  "NotationEN": "C#5/Db5",
  "NotationDE": "cis2/des2",
  "Frequency": 554.365
}, {
  "PianoKeyNumber": 52,
  "NotationEN": "C5",
  "NotationDE": "c2",
  "Frequency": 523.251
}, {
  "PianoKeyNumber": 51,
  "NotationEN": "B4",
  "NotationDE": "h1",
  "Frequency": 493.883
}, {
  "PianoKeyNumber": 50,
  "NotationEN": "A#4/Bb4",
  "NotationDE": "ais1/b1",
  "Frequency": 466.164
}, {
  "PianoKeyNumber": 49,
  "NotationEN": "A4",
  "NotationDE": "a1 Kammerton",
  "Frequency": 440.000
}, {
  "PianoKeyNumber": 48,
  "NotationEN": "G#4/Ab4",
  "NotationDE": "gis1/as1",
  "Frequency": 415.305
}, {
  "PianoKeyNumber": 47,
  "NotationEN": "G4",
  "NotationDE": "g1",
  "Frequency": 391.995
}, {
  "PianoKeyNumber": 46,
  "NotationEN": "F#4/Gb4",
  "NotationDE": "fis1/ges1",
  "Frequency": 369.994
}, {
  "PianoKeyNumber": 45,
  "NotationEN": "F4",
  "NotationDE": "f1",
  "Frequency": 349.228
}, {
  "PianoKeyNumber": 44,
  "NotationEN": "E4",
  "NotationDE": "e1",
  "Frequency": 329.628
}, {
  "PianoKeyNumber": 43,
  "NotationEN": "D#4/Eb4",
  "NotationDE": "dis1/es",
  "Frequency": 311.127
}, {
  "PianoKeyNumber": 42,
  "NotationEN": "D4",
  "NotationDE": "d1",
  "Frequency": 293.665
}, {
  "PianoKeyNumber": 41,
  "NotationEN": "C#4/Db4",
  "NotationDE": "cis1/des1",
  "Frequency": 277.183
}, {
  "PianoKeyNumber": 40,
  "NotationEN": "C4",
  "NotationDE": "c1",
  "Frequency": 261.626
}, {
  "PianoKeyNumber": 39,
  "NotationEN": "B3",
  "NotationDE": "c1",
  "Frequency": 246.942
}, {
  "PianoKeyNumber": 38,
  "NotationEN": "A#3/Bb3",
  "NotationDE": "ais/b",
  "Frequency": 233.082
}, {
  "PianoKeyNumber": 37,
  "NotationEN": "A3",
  "NotationDE": "a",
  "Frequency": 220.000
}, {
  "PianoKeyNumber": 36,
  "NotationEN": "G#3/Ab3",
  "NotationDE": "gis/as",
  "Frequency": 207.652
}, {
  "PianoKeyNumber": 35,
  "NotationEN": "G3",
  "NotationDE": "g",
  "Frequency": 195.998
}, {
  "PianoKeyNumber": 34,
  "NotationEN": "F#3/Gb3",
  "NotationDE": "fis/ges",
  "Frequency": 184.997
}, {
  "PianoKeyNumber": 33,
  "NotationEN": "F3",
  "NotationDE": "f",
  "Frequency": 174.614
}, {
  "PianoKeyNumber": 32,
  "NotationEN": "E3",
  "NotationDE": "e",
  "Frequency": 164.814
}, {
  "PianoKeyNumber": 31,
  "NotationEN": "D#3/Eb3",
  "NotationDE": "dis/es",
  "Frequency": 155.563
}, {
  "PianoKeyNumber": 30,
  "NotationEN": "D3",
  "NotationDE": "d",
  "Frequency": 146.832
}, {
  "PianoKeyNumber": 29,
  "NotationEN": "C#3/Db3",
  "NotationDE": "cis/des",
  "Frequency": 138.591
}, {
  "PianoKeyNumber": 28,
  "NotationEN": "C3",
  "NotationDE": "c",
  "Frequency": 130.813
}, {
  "PianoKeyNumber": 27,
  "NotationEN": "B2",
  "NotationDE": "H",
  "Frequency": 123.471
}, {
  "PianoKeyNumber": 26,
  "NotationEN": "A#2/Bb2",
  "NotationDE": "Ais/B",
  "Frequency": 116.541
}, {
  "PianoKeyNumber": 25,
  "NotationEN": "A2",
  "NotationDE": "A",
  "Frequency": 110.000
}, {
  "PianoKeyNumber": 24,
  "NotationEN": "G#2/Ab2",
  "NotationDE": "Gis/As",
  "Frequency": 103.826
}, {
  "PianoKeyNumber": 23,
  "NotationEN": "G2",
  "NotationDE": "G",
  "Frequency": 97.9989
}, {
  "PianoKeyNumber": 22,
  "NotationEN": "F#2/Gb2",
  "NotationDE": "Fis/Ges",
  "Frequency": 92.4986
}, {
  "PianoKeyNumber": 21,
  "NotationEN": "F2",
  "NotationDE": "F",
  "Frequency": 87.3071
}, {
  "PianoKeyNumber": 20,
  "NotationEN": "E2",
  "NotationDE": "E",
  "Frequency": 82.4069
}, {
  "PianoKeyNumber": 19,
  "NotationEN": "D#2/Eb2",
  "NotationDE": "Dis/Es",
  "Frequency": 77.7817
}, {
  "PianoKeyNumber": 18,
  "NotationEN": "D2",
  "NotationDE": "D",
  "Frequency": 73.4162
}, {
  "PianoKeyNumber": 17,
  "NotationEN": "C#2/Db2",
  "NotationDE": "Cis/Des",
  "Frequency": 69.2957
}, {
  "PianoKeyNumber": 16,
  "NotationEN": "C2",
  "NotationDE": "C",
  "Frequency": 65.4064
}, {
  "PianoKeyNumber": 15,
  "NotationEN": "B1",
  "NotationDE": "H1",
  "Frequency": 61.7354
}, {
  "PianoKeyNumber": 14,
  "NotationEN": "A#1/Bb1",
  "NotationDE": "Ais1/B1",
  "Frequency": 58.2705
}, {
  "PianoKeyNumber": 13,
  "NotationEN": "A1",
  "NotationDE": "A1",
  "Frequency": 55.0000
}, {
  "PianoKeyNumber": 12,
  "NotationEN": "G#1/Ab1",
  "NotationDE": "Gis1/As1",
  "Frequency": 51.9131
}, {
  "PianoKeyNumber": 11,
  "NotationEN": "G1",
  "NotationDE": "G1",
  "Frequency": 48.9994
}, {
  "PianoKeyNumber": 10,
  "NotationEN": "F#1/Gb1",
  "NotationDE": "Fis1/Ges1",
  "Frequency": 46.2493
}, {
  "PianoKeyNumber": 9,
  "NotationEN": "F1",
  "NotationDE": "F1",
  "Frequency": 43.6535
}, {
  "PianoKeyNumber": 8,
  "NotationEN": "E1",
  "NotationDE": "E1",
  "Frequency": 41.2034
}, {
  "PianoKeyNumber": 7,
  "NotationEN": "D#1/Eb1",
  "NotationDE": "Dis1/Es1",
  "Frequency": 38.8909
}, {
  "PianoKeyNumber": 6,
  "NotationEN": "D1",
  "NotationDE": "D1",
  "Frequency": 36.7081
}, {
  "PianoKeyNumber": 5,
  "NotationEN": "C#1/Db1",
  "NotationDE": "Cis1/Des1",
  "Frequency": 34.6478
}, {
  "PianoKeyNumber": 4,
  "NotationEN": "C1",
  "NotationDE": "C1",
  "Frequency": 32.7032
}, {
  "PianoKeyNumber": 3,
  "NotationEN": "B0",
  "NotationDE": "H2",
  "Frequency": 30.8677
}, {
  "PianoKeyNumber": 2,
  "NotationEN": "A#0/Bb0",
  "NotationDE": "Ais2/B2",
  "Frequency": 29.1352
}, {
  "PianoKeyNumber": 1,
  "NotationEN": "A0",
  "NotationDE": "A2",
  "Frequency": 27.5000
}, {
  "PianoKeyNumber": 0,
  "NotationEN": "G#0/Ab0",
  "NotationDE": "Gis2/As2",
  "Frequency": 25.9565
}, {
  "PianoKeyNumber": -1,
  "NotationEN": "G0",
  "NotationDE": "G2",
  "Frequency": 24.4997
}, {
  "PianoKeyNumber": -2,
  "NotationEN": "F#0/Gb0",
  "NotationDE": "Fis2/Ges2",
  "Frequency": 23.1247
}, {
  "PianoKeyNumber": -3,
  "NotationEN": "F0",
  "NotationDE": "F2",
  "Frequency": 21.8268
}, {
  "PianoKeyNumber": -4,
  "NotationEN": "E0",
  "NotationDE": "E2",
  "Frequency": 20.6017
}, {
  "PianoKeyNumber": -5,
  "NotationEN": "D#0/Eb0",
  "NotationDE": "Dis2/Es2",
  "Frequency": 19.4454
}, {
  "PianoKeyNumber": -6,
  "NotationEN": "D0",
  "NotationDE": "D2",
  "Frequency": 18.3540
}, {
  "PianoKeyNumber": -7,
  "NotationEN": "C#0/Db0",
  "NotationDE": "Cis2/Des2",
  "Frequency": 17.3239
}, {
  "PianoKeyNumber": -8,
  "NotationEN": "C0",
  "NotationDE": "C2",
  "Frequency": 16.3516
}
]

export default function createPianoRoll(synthjs: Synth, language: string) {
  let pianoRoll = document.createElement('div');

  if (pianoRoll != null) {
    let keyInOctave = 0;
    const keysReversed = keys.reverse();

    for (let index = 0; index < keysReversed.length; index++) {
      const key = keysReversed[index];

      let pianoKey = document.createElement("button");

      if (language == "en") {
        pianoKey.textContent = key.NotationEN;
      } else {
        pianoKey.textContent = key.NotationDE;
      }

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

        synthjs.Instruments.forEach((instrument) => {
          instrument.playNote(frequency)
        });
      });

      pianoRoll.appendChild(pianoKey);

      keyInOctave++;
    }
  }

  return pianoRoll;
}