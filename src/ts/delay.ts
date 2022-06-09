class Delay {

    component: DelayNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor(audioContext: AudioContext, time?: number, maxDelayTime?: number) {
        this.component = new DelayNode(audioContext, { delayTime: time, maxDelayTime: maxDelayTime });

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