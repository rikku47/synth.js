import { Envelope } from "./envelope";

export class Oscillator extends OscillatorNode {
  
  /* #region Private fields  */

  private _amplitude: GainNode;
  private _status: boolean;
  
  // private _envelope: Envelope;

  /* #endregion */

  //#region Getters and Setters

  public get Amplitude(): GainNode {
    return this._amplitude;
  }

  public set Amplitude(value: GainNode) {
    this._amplitude = value;
  }

  public get Status(): boolean {
    return this._status;
  }

  public set Status(value: boolean) {
    this._status = value;
  }
  //#endregion

  /**
   *
   */
  constructor(
    context: BaseAudioContext,
    destinationNode: AudioNode,
    options?: OscillatorOptions
  ) {
    super(context, options);
    this._amplitude = this.createGainNode(1, destinationNode);
    this.connect(this.Amplitude);
    this._status = false;
  }

  changeOscillatorFrequncy(frequency: number) {
    this.frequency.value = frequency;
  }

  changeOscillatorType(type: string) {
    this.type = type as OscillatorType;
  }

  //#endregion

  createGainNode(volume: number, destination: AudioNode) {
    let gainNode = this.context.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(destination);
    return gainNode;
  }

  toggleEnvelope(){}
}