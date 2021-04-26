class Volume extends GainNode {
  private _inputNodes: AudioNode[] = [];
  private _outputNodes: AudioNode[] = [];
  private _isVolumeConnectedToDestinationNode: boolean = false;

  public get InputNodes(): AudioNode[] {
    return this._inputNodes;
  }

  public set InputNodes(value: AudioNode[]) {
    this._inputNodes = value;
  }

  public get OutputNodes(): AudioNode[] {
    return this._outputNodes;
  }

  public set OutputNodes(value: AudioNode[]) {
    this._outputNodes = value;
  }

  get isVolumeConnectedToDestinationNode(): boolean {
    return this._isVolumeConnectedToDestinationNode;
  }

  set isVolumeConnectedToDestinationNode(value: boolean) {
    this._isVolumeConnectedToDestinationNode = value;
  }

  /**
   *
   */
  constructor(
    context: BaseAudioContext,
    destinationNode?: AudioNode,
    inputNodes?: AudioNode[],
    options?: GainOptions
  ) {
    super(context, options);

    if (inputNodes != undefined) {
      this._inputNodes = inputNodes;
    };

    if (destinationNode != undefined) {
      this.OutputNodes.push(destinationNode);
      this.connect(destinationNode);
    };

    this.gain.value = 0.2;
  }
}

export { Volume }