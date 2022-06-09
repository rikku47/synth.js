class Analyser {

    component: AnalyserNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor(fftSize: number, minDecibels: number, maxDecibels: number, smoothingTimeConstant: number, audioContext: AudioContext) {
        this.component = new AnalyserNode(audioContext, {
            fftSize: fftSize,
            minDecibels: minDecibels,
            maxDecibels: maxDecibels,
            smoothingTimeConstant: smoothingTimeConstant
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