class ConstantSource {

    component: ConstantSourceNode;
    outputNodes: any[];

    constructor(offset: number, audioContext: AudioContext) {
        this.component = new ConstantSourceNode(audioContext, {
            offset: offset
        });

        this.outputNodes = [];
    };

    connectNode
        (node: Analyser
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