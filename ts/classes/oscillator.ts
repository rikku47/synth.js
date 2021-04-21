class Oscillator extends OscillatorNode {

  /* #region Private fields  */

  private _destinationNode: AudioNode;
  private _isConnectedToDestinationNode: boolean = false;

  // private _envelope: Envelope;

  /* #endregion */

  //#region Getters and Setters

  get DestinationNode(): AudioNode {
    return this._destinationNode;
  }

  set DestinationNode(value: AudioNode) {
    this._destinationNode = value;
  }

  get isConnectedToDestinationNode(): boolean {
    return this._isConnectedToDestinationNode;
  }
  set isConnectedToDestinationNode(value: boolean) {
    this._isConnectedToDestinationNode = value;
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
      this._destinationNode = destinationNode;
      this.connect(destinationNode);
    } else {
      this._destinationNode = this.context.destination;
    }
  }

  changeOscillatorFrequncy(frequency: number) {
    this.frequency.value = frequency;
  }

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