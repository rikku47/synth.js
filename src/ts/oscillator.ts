class Oscillator {

    component: OscillatorNode;
    outputNodes: any[];

    constructor(audioContext: AudioContext, detune?: number, frequency?: number, type?: OscillatorType) {
        this.component = new OscillatorNode(audioContext, {
            detune: detune,
            frequency: frequency,
            type: type
        })

        this.outputNodes = [];
    };
    connectNode
        (
            node: Analyser
                | BiquadFilter
                | ChannelMerger
                | ChannelSplitter
                | ConstantSource
                | Convolver
                | Delay
                | DynamicsCompressor
                | Gain
                | IIRFilter
                | MediaElementAudioSource
                | MediaStreamAudioDestination
                | MediaStreamAudioSource
                | Oscillator
                | Panner
                | WaveShaper
        ) {
        this.component.connect(node.component);
        this.outputNodes.push(node);
        if (
            (node instanceof ConstantSource)
            || (node instanceof MediaElementAudioSource)
            || (node instanceof Oscillator)
        ) {
            node.outputNodes.push(this);
        } else {
            node.inputNodes.push(this);
        };
    };
};