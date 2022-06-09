"use strict";
function createReverb(decay, duration, sampleRate, audioContext) {
    var reverse = false;
    var length = sampleRate * duration;
    var arrayBuffer = audioContext.createBuffer(2, length, sampleRate);
    var buffer0 = arrayBuffer.getChannelData(0);
    var buffer1 = arrayBuffer.getChannelData(1);
    for (var i = 0; i < length; i++) {
        var n = reverse ? length - i : i;
        buffer0[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        buffer1[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }
    return arrayBuffer;
}
;
//# sourceMappingURL=reverb.js.map