class WaveShaper {

    component: WaveShaperNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor(audioContext: AudioContext, curve?: number[] | Float32Array, oversample?: OverSampleType) {
        this.component = new WaveShaperNode(audioContext, {
            curve: curve,
            oversample: oversample
        });

        this.inputNodes = [];
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