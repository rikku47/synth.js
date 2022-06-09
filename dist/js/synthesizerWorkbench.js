"use strict";
// extends from AudioContext?
var SynthesizerWorkbench = /** @class */ (function () {
    function SynthesizerWorkbench() {
        AudioNode;
        /** @type AudioContext */
        this.audioContext = new AudioContext(); // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
        /** @type Analyser[] */
        this.analysers = []; // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
        /** @type BiquadFilter[] */
        this.biquadFilters = []; // https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
        /** @type ChannelMerger[] */
        this.channelMergers = []; // https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode
        /** @type ChannelSplitter[] */
        this.channelSplitters = []; // https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode
        /** @type ConstantSource[] */
        this.constantSources = []; // https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode
        /** @type Convolver[] */
        this.convolvers = []; // https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
        /** @type Delay[] */
        this.delays = []; // https://developer.mozilla.org/en-US/docs/Web/API/DelayNode
        /** @type DynamicsCompressor[] */
        this.dynamicsCompressors = []; // https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode
        /** @type GainNode[] */
        this.gains = []; // https://developer.mozilla.org/en-US/docs/Web/API/GainNode
        /** @type IIRFilter[] */
        this.iirFilters = []; // https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode
        /** @type MediaElementAudioSource[] */
        this.mediaElementAudioSources = []; // https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode
        /** @type MediaStreamAudioDestination[] */
        this.mediaStreamAudioDestinations = []; // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode
        /** @type MediaStreamAudioSource[] */
        this.mediaStreamAudioSources = []; // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode
        /** @type Oscillator[] */
        this.oscillators = []; // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
        /** @type Panner[] */
        this.panners = []; // https://developer.mozilla.org/en-US/docs/Web/API/PannerNode
        /** @type WaveShaper[] */
        this.waveShapers = []; // https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
        this.modules = {
            oscillators: {
                oscillator1: new Oscillator(this.audioContext),
                oscillator2: new Oscillator(this.audioContext),
                oscillator3: new Oscillator(this.audioContext),
                oscillator4: new Oscillator(this.audioContext)
            },
            mixer: {
                mixer1: new Gain(this.audioContext, 0.3),
                mixer2: new Gain(this.audioContext, 0.3),
                mixer3: new Gain(this.audioContext, 0.3),
                mixer4: new Gain(this.audioContext, 0.3),
            },
            envelope: {
                timeTable: {
                    attack: {
                        time: 0.3,
                        amplitude: 1,
                        type: "linear"
                    },
                    decay: {
                        time: 0.3,
                        amplitude: 0.5,
                        type: "exponential"
                    },
                    sustain: {
                        time: 0.3,
                        amplitude: 0.5,
                        type: "linear"
                    },
                    release: {
                        time: 0.3,
                        amplitude: 0,
                        type: "exponential"
                    }
                },
                components: {
                    gain: new Gain(this.audioContext, 0)
                },
                play: applyEnvelope
            },
            effects: {
                distortion: {
                    components: {
                        waveshaper: new WaveShaper(this.audioContext),
                        gain: new Gain(this.audioContext, 1),
                    }
                },
                delay: {
                    components: {
                        delay: new Delay(this.audioContext)
                    }
                },
                reverb: {
                    components: {
                        connvolver: new Convolver(this.audioContext),
                        gain: new Gain(this.audioContext, 1)
                    }
                }
            },
            channels: {
                channel1: new Gain(this.audioContext, 0.3),
                channel2: new Gain(this.audioContext, 0.3),
                channel3: new Gain(this.audioContext, 0.3),
                channel4: new Gain(this.audioContext, 0.3),
                channelMaster: new Gain(this.audioContext, 0.5)
            }
        };
        this.modules.oscillators.oscillator1.connectNode(this.modules.mixer.mixer1);
        this.modules.oscillators.oscillator2.connectNode(this.modules.mixer.mixer2);
        this.modules.oscillators.oscillator3.connectNode(this.modules.mixer.mixer3);
        this.modules.oscillators.oscillator4.connectNode(this.modules.mixer.mixer4);
        this.modules.mixer.mixer1.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer2.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer3.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer4.connectNode(this.modules.envelope.components.gain);
        this.modules.envelope.components.gain.connectNode(this.modules.effects.distortion.components.waveshaper);
        this.modules.envelope.components.gain.connectNode(this.modules.effects.distortion.components.gain);
        this.modules.effects.distortion.components.waveshaper.connectNode(this.modules.effects.delay.components.delay);
        this.modules.effects.distortion.components.gain.connectNode(this.modules.effects.delay.components.delay);
        this.modules.effects.delay.components.delay.connectNode(this.modules.channels.channelMaster);
        this.modules.channels.channelMaster.component.connect(this.audioContext.destination);
        // this.modules.channels.channelMaster.component.disconnect(this.audioContext.destination);
    }
    return SynthesizerWorkbench;
}());
//# sourceMappingURL=synthesizerWorkbench.js.map