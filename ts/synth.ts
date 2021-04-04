import { Channel } from "./classes/channel";
import { Envelope } from "./classes/envelope";
import { Oscillator } from "./classes/oscillator";

export class Synth extends AudioContext {
  // #region Private fields

  private _oscillators: Oscillator[];
  private _envelope: Envelope;
  private _masterChannel: Channel;
  private _channels: Channel[];

  // #endregion

  // #region Getter and Setters

  public get Oscillators(): Oscillator[] {
    return this._oscillators;
  }

  public set Oscillators(value: Oscillator[]) {
    this._oscillators = value;
  }

  public get Envelope(): Envelope {
    return this._envelope;
  }

  public set Envelope(value: Envelope) {
    this._envelope = value;
  }

  get MasterChannel(): Channel {
    return this._masterChannel;
  }

  get Channels(): Channel[] {
    return this._channels;
  }

  // #endregion */

  // #region  Constructor

  constructor(channels = 1, oscillators = 9) {
    super();

    this._masterChannel = new Channel(this.destination, this, { gain: 0.0 });
    this._channels = [];

    for (let channel = 0; channel < channels; channel++) {
      let channel = new Channel(this.MasterChannel, this, { gain: 0.0 });

      this.Channels.push(channel);
    }

    this._oscillators = [];
    
    for (let oscillator = 0; oscillator < oscillators; oscillator++) {
      this.Oscillators.push(new Oscillator(this, this.Channels[0]));
    }

    this._envelope = new Envelope(this.Oscillators);
  }

  // #endregion

  // #region  Functions

  changeVolume(volume: number, gainNode: GainNode) {
    gainNode.gain.value = volume;
  }

  // #endregion
}
