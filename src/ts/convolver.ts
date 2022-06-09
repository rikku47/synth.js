class Convolver {

    component: ConvolverNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor(audioContext: AudioContext, buffer?: AudioBuffer, normalize?: boolean) {
        this.component = new ConvolverNode(audioContext, {
            buffer: buffer,
            disableNormalization: normalize
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