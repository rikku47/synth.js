import { Oscillator } from "./oscillator";

export class Channel extends GainNode {
  // private _oscillators: Oscillator[];

  // public get Oscillators(): Oscillator[] {
  //   return this._oscillators;
  // }

  // public set Oscillators(value: Oscillator[]) {
  //   this._oscillators = value;
  // }

  /**
   *
   */
  constructor(
    destinationNode: AudioNode,
    context: BaseAudioContext,
    // oscillators: Oscillator[],
    options?: GainOptions
  ) {
    super(context, options);
    this.connect(destinationNode);
    // this._oscillators = oscillators;
  }
}
