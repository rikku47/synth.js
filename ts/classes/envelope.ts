class Envelope extends GainNode {

  private _inputNodes: GainNode[] = [];
  private _outputNodes: AudioNode[] = [];
  private _attackTime: number;
  private _attackPeak: number;
  private _attackType: string;
  private _decayTime: number;
  private _decayPeak: number;
  private _decayType: string;
  private _sustainTime: number;
  private _releaseTime: number;
  private _releaseType: string;
  private _status: boolean;

  public get InputNodes(): GainNode[] {
    return this._inputNodes;
  }

  public set InputNodes(value: GainNode[]) {
    this._inputNodes = value;
  }

  public get OutputNodes(): AudioNode[] {
    return this._outputNodes;
  }

  public set OutputNodes(value: AudioNode[]) {
    this._outputNodes = value;
  }

  public get AttackTime(): number {
    return this._attackTime;
  }

  public set AttackTime(value: number) {
    this._attackTime = value;
  }

  public get AttackPeak(): number {
    return this._attackPeak;
  }

  public set AttackPeak(value: number) {
    this._attackPeak = value;
  }

  public get AttackType(): string {
    return this._attackType;
  }

  public set AttackType(value: string) {
    this._attackType = value;
  }

  public get DecayTime(): number {
    return this._decayTime;
  }

  public set DecayTime(value: number) {
    this._decayTime = value;
  }

  public get DecayPeak(): number {
    return this._decayPeak;
  }

  public set DecayPeak(value: number) {
    this._decayPeak = value;
  }

  public get DecayType(): string {
    return this._decayType;
  }

  public set DecayType(value: string) {
    this._decayType = value;
  }

  public get SustainTime(): number {
    return this._sustainTime;
  }

  public set SustainTime(value: number) {
    this._sustainTime = value;
  }

  public get ReleaseTime(): number {
    return this._releaseTime;
  }

  public set ReleaseTime(value: number) {
    this._releaseTime = value;
  }

  public get ReleaseType(): string {
    return this._releaseType;
  }

  public set ReleaseType(value: string) {
    this._releaseType = value;
  }

  public get Status(): boolean {
    return this._status;
  }

  public set Status(value: boolean) {
    this._status = value;
  }

  /**
   *
   */
  constructor(
    context: BaseAudioContext,
    inputNodes?: GainNode[],
    outputNodes?: AudioNode[],
    options?: GainOptions
  ) {
    super(context, options);

    if (inputNodes != undefined) {
      this._inputNodes = inputNodes;
    }

    if (outputNodes != undefined) {
      this._outputNodes = outputNodes;
    }

    this._attackTime = 0.1;
    this._attackPeak = 1;
    this._attackType = "linear";

    this._decayTime = 0.04;
    this._decayPeak = 0.2;
    this._decayType = "linear";

    this._sustainTime = 0.0;

    this._releaseTime = 0.04;
    this._releaseType = "linear";

    this._status = false;

    this.gain.value = 0;
  }

  //#region  Envelope

  toggle() {
    let now = this.context.currentTime;
    let attackTime = now + this.AttackTime;
    let decayTime = attackTime + this.DecayTime;
    let sustainTime = decayTime + this.SustainTime;
    let releaseTime = sustainTime + this.ReleaseTime;

    this.gain.cancelScheduledValues(0);
    this.gain.value = 0;

    if (this.AttackType == "linear") {
      this.gain.linearRampToValueAtTime(
        this.AttackPeak,
        attackTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        this.AttackPeak,
        attackTime
      );
    }

    if (this.DecayType == "linear") {
      this.gain.linearRampToValueAtTime(
        this.DecayPeak,
        decayTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        this.DecayPeak,
        decayTime
      );
    }

    this.gain.linearRampToValueAtTime(
      this.DecayPeak,
      sustainTime
    );

    if (this.ReleaseType == "linear") {
      this.gain.linearRampToValueAtTime(
        0.0001,
        releaseTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        0.0001,
        releaseTime
      );
    }
  }

  // toggle() {
  //   for (let index = 0; index < this.InputNodes.length; index++) {
  //     const inputNode = this.InputNodes[index];

  //       let now = inputNode.context.currentTime;
  //       let attackTime = now + this.EnvelopeShape.attack.time;
  //       let decayTime = attackTime + this.EnvelopeShape.decay.time;
  //       let sustainTime = decayTime + this.EnvelopeShape.sustain.time;
  //       let releaseTime = sustainTime + this.EnvelopeShape.release.time;

  //       inputNode.gain.cancelScheduledValues(0);
  //       inputNode.gain.value = 0;

  //       if (this.EnvelopeShape.attack.type == "linear") {
  //         inputNode.gain.linearRampToValueAtTime(
  //           this.EnvelopeShape.attack.peak,
  //           attackTime
  //         );
  //       } else {
  //         inputNode.gain.exponentialRampToValueAtTime(
  //           this.EnvelopeShape.attack.peak,
  //           attackTime
  //         );
  //       }

  //       if (this.EnvelopeShape.decay.type == "linear") {
  //         inputNode.gain.linearRampToValueAtTime(
  //           this.EnvelopeShape.decay.peak,
  //           decayTime
  //         );
  //       } else {
  //         inputNode.gain.exponentialRampToValueAtTime(
  //           this.EnvelopeShape.decay.peak,
  //           decayTime
  //         );
  //       }

  //       inputNode.gain.linearRampToValueAtTime(
  //         this.EnvelopeShape.decay.peak,
  //         sustainTime
  //       );

  //       if (this.EnvelopeShape.release.type == "linear") {
  //         inputNode.gain.linearRampToValueAtTime(
  //           0.0001,
  //           releaseTime
  //         );
  //       } else {
  //         inputNode.gain.exponentialRampToValueAtTime(
  //           0.0001,
  //           releaseTime
  //         );
  //       }
  //   }
  // }
  //#endregion
}

export {Envelope}