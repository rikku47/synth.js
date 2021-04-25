import { Volume } from "./volume";
import { Envelope } from "./envelope";
import { Oscillator } from "./oscillator";

class Instrument {

  /* #region Private fields  */

  private _context: BaseAudioContext;
  private _destinationNode: AudioNode;
  private _volume: Volume;
  private _isVolumeConnectedToDestinationNode: boolean = false;
  private _envelope: Envelope;
  private _isEnvelopeConnectedToVolume: boolean = false;
  private _oscillators: Oscillator[];

  // private _envelope: Envelope;

  /* #endregion */

  //#region Getters and Setters

  public get Context(): BaseAudioContext {
    return this._context;
  }

  public set Context(value: BaseAudioContext) {
    this._context = value;
  }

  get DestinationNode(): AudioNode {
    return this._destinationNode;
  }

  set DestinationNode(value: AudioNode) {
    this._destinationNode = value;
  }

  get Volume(): Volume {
    return this._volume;
  }

  set Volume(value: Volume) {
    this._volume = value;
  }

  get isVolumeConnectedToDestinationNode(): boolean {
    return this._isVolumeConnectedToDestinationNode;
  }

  set isVolumeConnectedToDestinationNode(value: boolean) {
    this._isVolumeConnectedToDestinationNode = value;
  }

  get Envelope(): Envelope {
    return this._envelope;
  }

  set Envelope(value: Envelope) {
    this._envelope = value;
  }

  get isEnvelopeConnectedToVolume(): boolean {
    return this._isEnvelopeConnectedToVolume;
  }

  set isEnvelopeConnectedToVolume(value: boolean) {
    this._isEnvelopeConnectedToVolume = value;
  }

  get Oscillators(): Oscillator[] {
    return this._oscillators;
  }

  set Oscillators(value: Oscillator[]) {
    this._oscillators = value;
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

    this._context = context;

    this._destinationNode = destinationNode;

    this._oscillators = [];

    this._volume = new Volume(context);

    this._envelope = new Envelope(context);

    for (let oscillator = 0; oscillator < 3; oscillator++) {
      this.Oscillators.push(new Oscillator(context, this.Envelope));
    };

    this.Envelope.connect(this.Volume).connect(this.DestinationNode);

    this.isEnvelopeConnectedToVolume = true;
    this.isVolumeConnectedToDestinationNode = true;
  }

  playNote(frequency: number) {
    this.Oscillators.forEach((oscillator) => {
      oscillator.frequency.value = frequency;
      this.Envelope.toggle();
    });
  }
  //#endregion
}

export { Instrument }