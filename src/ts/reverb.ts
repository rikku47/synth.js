function createReverb(decay: number, duration: number, sampleRate: number, audioContext: AudioContext) {
    let reverse = false;
    let length = sampleRate * duration;

    let arrayBuffer = audioContext.createBuffer(2, length, sampleRate);

    let buffer0 = arrayBuffer.getChannelData(0);
    let buffer1 = arrayBuffer.getChannelData(1);

    for (let i = 0; i < length; i++) {
        let n = reverse ? length - i : i;
        buffer0[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        buffer1[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }

    return arrayBuffer;
};