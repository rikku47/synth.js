class Panner {

    component: PannerNode;
    inputNodes: any[];
    outputNodes: any[];

    constructor
        (
            coneInnerAngle: number,
            coneOuterAngle: number,
            coneOuterGain: number,
            distanceModel: DistanceModelType,
            maxDistance: number,
            orientationX: number,
            orientationY: number,
            orientationZ: number,
            panningModel: PanningModelType,
            positionX: number,
            positionY: number,
            positionZ: number,
            refDistance: number,
            rolloffFactor: number,
            audioContext: AudioContext
        ) {
        this.component = new PannerNode(audioContext, {
            coneInnerAngle: coneInnerAngle,
            coneOuterAngle: coneOuterAngle,
            coneOuterGain: coneOuterGain,
            distanceModel: distanceModel,
            maxDistance: maxDistance,
            orientationX: orientationX,
            orientationY: orientationY,
            orientationZ: orientationZ,
            panningModel: panningModel,
            positionX: positionX,
            positionY: positionY,
            positionZ: positionZ,
            refDistance: refDistance,
            rolloffFactor: rolloffFactor

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