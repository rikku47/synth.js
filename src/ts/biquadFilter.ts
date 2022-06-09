class BiquadFilter {

    component: BiquadFilterNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor(type: BiquadFilterType, audioContext: AudioContext) {
        this.component = new BiquadFilterNode(audioContext, {
            type: type
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