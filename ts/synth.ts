import { Volume } from "./classes/volume";
import { Envelope } from "./classes/envelope";
import { Oscillator } from "./classes/oscillator";

export class Synth extends AudioContext {
  // #region Private fields

  private _oscillators: Oscillator[];
  private _envelopes: Envelope[];
  private _volumes: Volume[];
  private _masterVolume: Volume;
  // #endregion

  // #region Getter and Setters

  public get Oscillators(): Oscillator[] {
    return this._oscillators;
  }

  public set Oscillators(value: Oscillator[]) {
    this._oscillators = value;
  }

  public get Envelopes(): Envelope[] {
    return this._envelopes;
  }

  public set Envelopes(value: Envelope[]) {
    this._envelopes = value;
  }

  get Volumes(): Volume[] {
    return this._volumes;
  }

  get MasterVolume(): Volume {
    return this._masterVolume;
  }

  // #endregion */

  // #region  Constructor

  constructor(volumes = 1, envelopes = 1, oscillators = 3) {
    super();

    this._oscillators = [];
    this._envelopes = [];
    this._volumes = [];
    this._masterVolume = new Volume(this, this.destination);

    for (let oscillator = 0; oscillator < oscillators; oscillator++) {
      this.Oscillators.push(new Oscillator(this));
    };

    for (let envelope = 0; envelope < envelopes; envelope++) {
      this.Envelopes.push(new Envelope(this));
    };

    for (let volume = 0; volume < volumes; volume++) {
      this.Volumes.push(new Volume(this));
    };

    this.Oscillators.forEach((oscillator) => {
      oscillator.connect(this.Envelopes[0]).connect(this.Volumes[0]).connect(this.MasterVolume);
      oscillator.DestinationNode = this.Envelopes[0];
    });
  }

  // #endregion

  // #region  Functions

  changeVolume(volume: number, gainNode: GainNode) {
    gainNode.gain.value = volume;
  }

  // #endregion
}
