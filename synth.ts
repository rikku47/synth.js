class Synth {

    private _context: AudioContext
    private _oscillator: OscillatorNode
    private _type: OscillatorType
    private _gainN: GainNode

    public get context(): AudioContext {
        return this._context
    }

    public set context(value: AudioContext) {
        this._context = value
    }

    public get oscillator(): OscillatorNode {
        return this._oscillator
    }

    public set oscillator(value: OscillatorNode) {
        this._oscillator = value
    }

    public get type(): OscillatorType {
        return this._type
    }

    public set type(value: OscillatorType) {
        this._type = value
    }

    public get gainN(): GainNode {
        return this._gainN
    }
    
    public set gainN(value: GainNode) {
        this._gainN = value
    }

    constructor() {
        this.context = new AudioContext()
        this.oscillator = this.context.createOscillator()
        this.oscillator.type = "sine"
        this.gainN = this.context.createGain()
    }
}

function changeType(key: string) {
    switch (key) {
        case 'triangle':
            this.oscillator.type = 'triangle'
            break;
        case 'sawtooth':
            this.oscillator.type = 'sawtooth'
            break;
        default:
            this.oscillator.type = 'sine'
            break;
    }
}