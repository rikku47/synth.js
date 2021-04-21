import { Volume } from "./classes/volume";
import { Instrument } from "./classes/instrument";

export class Synth extends AudioContext {
  // #region Private fields

  private _masterVolume: Volume;
  private _instruments: Instrument[];

  // #endregion

  // #region Getter and Setters

  get MasterVolume(): Volume {
    return this._masterVolume;
  }

  public get Instruments(): Instrument[] {
    return this._instruments;
  }

  public set Instruments(value: Instrument[]) {
    this._instruments = value;
  }

  // #endregion */

  // #region  Constructor

  constructor(instruments = 3) {
    super();
    this._masterVolume = new Volume(this, this.destination);

    this._instruments = [];

    for (let index = 0; index < instruments; index++) {
      this.Instruments.push(new Instrument(this, this.MasterVolume));
    }
  }

  // #endregion

  // #region  Functions

  changeVolume(volume: number, gainNode: GainNode) {
    gainNode.gain.value = volume;
  }

  // #endregion
}
