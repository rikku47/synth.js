class Oscillator extends OscillatorNode {

  /* #region Private fields  */

  private _destinationNode: AudioNode;

  // private _envelope: Envelope;

  /* #endregion */

  //#region Getters and Setters

  public get DestinationNode(): AudioNode {
    return this._destinationNode;
  }

  public set DestinationNode(value: AudioNode) {
    this._destinationNode = value;
  }

  //#endregion

  /**
   *
   */
  constructor(
    context: BaseAudioContext,
    destinationNode?: AudioNode,
    options?: OscillatorOptions
  ) {
    super(context, options);

    if (destinationNode != undefined) {
      this._destinationNode = destinationNode
    }else{
      this._destinationNode = this.context.destination
    }
  }

  // changeOscillatorFrequncy(frequency: number) {
  //   this.frequency.value = frequency;
  // }

  changeOscillatorType(type: string) {
    this.type = type as OscillatorType;
  }

  //#endregion

  // createGainNode(volume: number, destination: AudioNode) {
  //   let gainNode = this.context.createGain();
  //   gainNode.gain.value = volume;
  //   gainNode.connect(destination);
  //   return gainNode;
  // }
}

export { Oscillator }