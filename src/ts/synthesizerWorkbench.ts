// extends from AudioContext?
class SynthesizerWorkbench {

    // Definition
    audioContext: AudioContext;
    analysers: Analyser[];
    biquadFilters: BiquadFilter[];
    channelMergers: ChannelMerger[];
    channelSplitters: ChannelSplitter[];
    constantSources: ConstantSource[];
    convolvers: Convolver[];
    delays: Delay[];
    dynamicsCompressors: DynamicsCompressor[];
    gains: Gain[];
    iirFilters: IIRFilter[];
    mediaElementAudioSources: MediaElementAudioSource[];
    mediaStreamAudioDestinations: MediaStreamAudioDestination[];
    mediaStreamAudioSources: MediaStreamAudioSource[];
    oscillators: Oscillator[];
    panners: Panner[];
    waveShapers: WaveShaper[];

    modules: {
        oscillators: {
            oscillator1: Oscillator,
            oscillator2: Oscillator,
            oscillator3: Oscillator,
            oscillator4: Oscillator,
        },
        mixer: {
            mixer1: Gain,
            mixer2: Gain,
            mixer3: Gain,
            mixer4: Gain,
        },
        envelope: {
            timeTable: {
                attack: {
                    time: number,
                    amplitude: number,
                    type: string
                },
                decay: {
                    time: number,
                    amplitude: number,
                    type: string
                },
                sustain: {
                    time: number,
                    amplitude: number,
                    type: string
                },
                release: {
                    time: number,
                    amplitude: number,
                    type: string
                }
            },
            components: {
                gain: Gain
            },
            play: (synthesizerWorkbench: SynthesizerWorkbench) => void
        },
        effects: {
            distortion: {
                components: {
                    waveshaper: WaveShaper,
                    gain1: Gain,
                    gain2: Gain,
                }
            },
            delay: {
                components: {
                    delay: Delay
                }
            },
            reverb: {
                components: {
                    connvolver: Convolver,
                    gain1: Gain,
                    gain2: Gain,
                }
            }
        },
        channels: {
            channel1: Gain,
            channel2: Gain,
            channel3: Gain,
            channel4: Gain,
            channelMaster: Gain
        }
    };

    constructor() {
        AudioNode
        /** @type AudioContext */
        this.audioContext = new AudioContext();         // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
        /** @type Analyser[] */
        this.analysers = [];                            // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
        /** @type BiquadFilter[] */
        this.biquadFilters = [];                        // https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
        /** @type ChannelMerger[] */
        this.channelMergers = [];                       // https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode
        /** @type ChannelSplitter[] */
        this.channelSplitters = [];                     // https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode
        /** @type ConstantSource[] */
        this.constantSources = [];                      // https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode
        /** @type Convolver[] */
        this.convolvers = [];                           // https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
        /** @type Delay[] */
        this.delays = [];                               // https://developer.mozilla.org/en-US/docs/Web/API/DelayNode
        /** @type DynamicsCompressor[] */
        this.dynamicsCompressors = [];                  // https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode
        /** @type GainNode[] */
        this.gains = [];                                // https://developer.mozilla.org/en-US/docs/Web/API/GainNode
        /** @type IIRFilter[] */
        this.iirFilters = [];                           // https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode
        /** @type MediaElementAudioSource[] */
        this.mediaElementAudioSources = [];             // https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode
        /** @type MediaStreamAudioDestination[] */
        this.mediaStreamAudioDestinations = [];         // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode
        /** @type MediaStreamAudioSource[] */
        this.mediaStreamAudioSources = [];              // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode
        /** @type Oscillator[] */
        this.oscillators = [];                          // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
        /** @type Panner[] */
        this.panners = [];                              // https://developer.mozilla.org/en-US/docs/Web/API/PannerNode
        /** @type WaveShaper[] */
        this.waveShapers = [];                          // https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode

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
                        gain1: new Gain(this.audioContext, 0),
                        gain2: new Gain(this.audioContext, 1),
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
                        gain1: new Gain(this.audioContext, 0),
                        gain2: new Gain(this.audioContext, 1)
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
        this.modules.oscillators.oscillator3.connectNode(this.modules.mixer.mixer3);
        this.modules.oscillators.oscillator2.connectNode(this.modules.mixer.mixer2);
        this.modules.oscillators.oscillator4.connectNode(this.modules.mixer.mixer4);

        this.modules.mixer.mixer1.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer2.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer3.connectNode(this.modules.envelope.components.gain);
        this.modules.mixer.mixer4.connectNode(this.modules.envelope.components.gain);

        this.modules.envelope.components.gain.connectNode(this.modules.effects.distortion.components.waveshaper);
        this.modules.envelope.components.gain.connectNode(this.modules.effects.distortion.components.gain2);

        this.modules.effects.distortion.components.waveshaper.connectNode(this.modules.effects.distortion.components.gain1);

        this.modules.effects.distortion.components.gain1.connectNode(this.modules.effects.delay.components.delay);
        this.modules.effects.distortion.components.gain2.connectNode(this.modules.effects.delay.components.delay);

        this.modules.effects.delay.components.delay.connectNode(this.modules.effects.reverb.components.connvolver);
        this.modules.effects.delay.components.delay.connectNode(this.modules.effects.reverb.components.gain2);

        this.modules.effects.reverb.components.connvolver.connectNode(this.modules.effects.reverb.components.gain1);

        this.modules.effects.reverb.components.gain1.connectNode(this.modules.channels.channelMaster);
        this.modules.effects.reverb.components.gain2.connectNode(this.modules.channels.channelMaster);

        this.modules.channels.channelMaster.component.connect(this.audioContext.destination);

        this.modules.oscillators.oscillator1.component.start();
        this.modules.oscillators.oscillator3.component.start();
        this.modules.oscillators.oscillator2.component.start();
        this.modules.oscillators.oscillator4.component.start();

        this.modules.effects.distortion.components.waveshaper.component.curve = makeDistortionCurve(40, 3);
        this.modules.effects.distortion.components.waveshaper.component.oversample = '4x';
        this.modules.effects.reverb.components.connvolver.component.buffer = createReverb(1, 2, this.audioContext.sampleRate, this.audioContext);

        // this.modules.channels.channelMaster.component.disconnect(this.audioContext.destination);
    }
}