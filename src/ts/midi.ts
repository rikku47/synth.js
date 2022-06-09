// function onMIDISuccess(midiAccess) {
//     console.log("MIDI ready!");
//     midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
//     listInputsAndOutputs(midi);
//     startLoggingMIDIInput(midi, null);
// };

// function onMIDIFailure(msg) {
//     console.log("Failed to get MIDI access - " + msg);
// };

// function listInputsAndOutputs(midiAccess: ) {
//     for (var entry of midiAccess.inputs) {
//         var input = entry[1];
//         console.log("Input port [type:'" + input.type + "'] id:'" + input.id +
//             "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
//             "' version:'" + input.version + "'");
//     };

//     for (var entry of midiAccess.outputs) {
//         var output = entry[1];
//         console.log("Output port [type:'" + output.type + "'] id:'" + output.id +
//             "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
//             "' version:'" + output.version + "'");
//     };
// };

// function onMIDIMessage(event) {
//     if (event.data[0] == 144 & event.data[2] > 0) {
//         switch (event.data[1]) {
//             case 21:
//                 voices[0].play();
//                 break;
//             case 22:
//                 voices[1].play();
//                 break;
//             case 23:
//                 voices[2].play();
//                 break;
//             case 24:
//                 voices[3].play();
//                 break;
//             case 25:
//                 voices[4].play();
//                 break;
//             case 26:
//                 voices[5].play();
//                 break;
//             case 27:
//                 voices[6].play();
//                 break;
//             case 28:
//                 voices[7].play();
//                 break;
//             case 29:
//                 voices[8].play();
//                 break;
//             case 30:
//                 voices[9].play();
//                 break;
//             case 31:
//                 voices[10].play();
//                 break;
//             case 32:
//                 voices[11].play();
//                 break;
//             case 33:
//                 voices[12].play();
//                 break;
//             case 34:
//                 voices[13].play();
//                 break;
//             case 35:
//                 voices[14].play();
//                 break;
//             case 36:
//                 voices[15].play();
//                 break;
//             case 37:
//                 voices[16].play();
//                 break;
//             case 38:
//                 voices[17].play();
//                 break;
//             case 39:
//                 voices[18].play();
//                 break;
//             case 40:
//                 voices[19].play();
//                 break;
//             case 41:
//                 voices[20].play();
//                 break;
//             case 42:
//                 voices[21].play();
//                 break;
//             case 43:
//                 voices[22].play();
//                 break;
//             case 44:
//                 voices[23].play();
//                 break;
//             case 45:
//                 voices[24].play();
//                 break;
//             case 46:
//                 voices[25].play();
//                 break;
//             case 47:
//                 voices[26].play();
//                 break;
//             case 48:
//                 voices[27].play();
//                 break;
//             case 49:
//                 voices[28].play();
//                 break;
//             case 50:
//                 voices[29].play();
//                 break;
//             case 51:
//                 voices[30].play();
//                 break;
//             case 52:
//                 voices[31].play();
//                 break;
//             case 53:
//                 voices[32].play();
//                 break;
//             case 54:
//                 voices[33].play();
//                 break;
//             case 55:
//                 voices[34].play();
//                 break;
//             case 56:
//                 voices[35].play();
//                 break;
//             case 57:
//                 voices[36].play();
//                 break;
//             case 58:
//                 voices[37].play();
//                 break;
//             case 59:
//                 voices[38].play();
//                 break;
//             case 60:
//                 voices[39].play();
//                 break;
//             case 61:
//                 voices[40].play();
//                 break;
//             case 62:
//                 voices[41].play();
//                 break;
//             case 63:
//                 voices[42].play();
//                 break;
//             case 64:
//                 voices[43].play();
//                 break;
//             case 65:
//                 voices[44].play();
//                 break;
//             case 66:
//                 voices[45].play();
//                 break;
//             case 67:
//                 voices[46].play();
//                 break;
//             case 68:
//                 voices[47].play();
//                 break;
//             case 69:
//                 voices[48].play();
//                 break;
//             case 70:
//                 voices[49].play();
//                 break;
//             case 71:
//                 voices[50].play();
//                 break;
//             case 72:
//                 voices[51].play();
//                 break;
//             case 73:
//                 voices[52].play();
//                 break;
//             case 74:
//                 voices[53].play();
//                 break;
//             case 75:
//                 voices[54].play();
//                 break;
//             case 76:
//                 voices[55].play();
//                 break;
//             case 77:
//                 voices[56].play();
//                 break;
//             case 78:
//                 voices[57].play();
//                 break;
//             case 79:
//                 voices[58].play();
//                 break;
//             case 80:
//                 voices[59].play();
//                 break;
//             case 81:
//                 voices[60].play();
//                 break;
//             case 82:
//                 voices[61].play();
//                 break;
//             case 83:
//                 voices[62].play();
//                 break;
//             case 84:
//                 voices[63].play();
//                 break;
//             case 85:
//                 voices[64].play();
//                 break;
//             case 86:
//                 voices[65].play();
//                 break;
//             case 87:
//                 voices[66].play();
//                 break;
//             case 88:
//                 voices[67].play();
//                 break;
//             case 89:
//                 voices[68].play();
//                 break;
//             case 90:
//                 voices[69].play();
//                 break;
//             case 91:
//                 voices[70].play();
//                 break;
//             case 92:
//                 voices[71].play();
//                 break;
//             case 93:
//                 voices[72].play();
//                 break;
//             case 94:
//                 voices[73].play();
//                 break;
//             case 95:
//                 voices[74].play();
//                 break;
//             case 96:
//                 voices[75].play();
//                 break;
//             case 97:
//                 voices[76].play();
//                 break;
//             case 98:
//                 voices[77].play();
//                 break;
//             case 99:
//                 voices[78].play();
//                 break;
//             case 100:
//                 voices[79].play();
//                 break;
//             case 101:
//                 voices[80].play();
//                 break;
//             case 102:
//                 voices[81].play();
//                 break;
//             case 103:
//                 voices[82].play();
//                 break;
//             case 104:
//                 voices[83].play();
//                 break;
//             case 105:
//                 voices[84].play();
//                 break;
//             case 106:
//                 voices[85].play();
//                 break;
//             case 107:
//                 voices[86].play();
//                 break;
//             case 108:
//                 voices[87].play();
//                 break;
//         };
//     };
// };

// function startLoggingMIDIInput(midiAccess) {
//     midiAccess.inputs.forEach(function (entry) { entry.onmidimessage = onMIDIMessage; });
// };