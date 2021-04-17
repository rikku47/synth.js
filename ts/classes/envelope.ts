import { Oscillator } from "./oscillator";

interface EnvelopeShape {
  attack: {
    time: number;
    peak: number;
    type: string;
  };
  decay: {
    time: number;
    peak: number;
    type: string;
  };
  sustain: {
    time: number;
  };
  release: {
    time: number;
    type: string;
  };
}

export class Envelope extends GainNode {

  private _inputNodes: GainNode[] = [];
  private _outputNodes: AudioNode[] = [];
  private _envelopeShape: EnvelopeShape;
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

  public get EnvelopeShape(): EnvelopeShape {
    return this._envelopeShape;
  }

  public set EnvelopeShape(value: EnvelopeShape) {
    this._envelopeShape = value;
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
<<<<<<< HEAD
    } 
    
    if (outputNodes != undefined) {
      this._outputNodes = outputNodes;
    } 
=======
    }

    if (outputNodes != undefined) {
      this._outputNodes = outputNodes;
    }
>>>>>>> 5c4bea71bc4d2ced05ee67d2108ace3000123719

    this._envelopeShape = {
      attack: {
        time: 0.1,
        peak: 1,
        type: "linear",
      },
      decay: {
        time: 0.04,
        peak: 0.2,
        type: "linear",
      },
      sustain: {
        time: 0.0,
      },
      release: {
        time: 0.04,
        type: "linear",
      },
    };
    this._status = false;

    this.gain.value = 0;
  }

  //#region  Envelope

  toggle() {
<<<<<<< HEAD
    for (let index = 0; index < this.InputNodes.length; index++) {
      const inputNode = this.InputNodes[index];

        let now = inputNode.context.currentTime;
        let attackTime = now + this.EnvelopeShape.attack.time;
        let decayTime = attackTime + this.EnvelopeShape.decay.time;
        let sustainTime = decayTime + this.EnvelopeShape.sustain.time;
        let releaseTime = sustainTime + this.EnvelopeShape.release.time;

        inputNode.gain.cancelScheduledValues(0);
        inputNode.gain.value = 0;

        if (this.EnvelopeShape.attack.type == "linear") {
          inputNode.gain.linearRampToValueAtTime(
            this.EnvelopeShape.attack.peak,
            attackTime
          );
        } else {
          inputNode.gain.exponentialRampToValueAtTime(
            this.EnvelopeShape.attack.peak,
            attackTime
          );
        }

        if (this.EnvelopeShape.decay.type == "linear") {
          inputNode.gain.linearRampToValueAtTime(
            this.EnvelopeShape.decay.peak,
            decayTime
          );
        } else {
          inputNode.gain.exponentialRampToValueAtTime(
            this.EnvelopeShape.decay.peak,
            decayTime
          );
        }

        inputNode.gain.linearRampToValueAtTime(
          this.EnvelopeShape.decay.peak,
          sustainTime
        );

        if (this.EnvelopeShape.release.type == "linear") {
          inputNode.gain.linearRampToValueAtTime(
            0.0001,
            releaseTime
          );
        } else {
          inputNode.gain.exponentialRampToValueAtTime(
            0.0001,
            releaseTime
          );
        }
=======
    let now = this.context.currentTime;
    let attackTime = now + this.EnvelopeShape.attack.time;
    let decayTime = attackTime + this.EnvelopeShape.decay.time;
    let sustainTime = decayTime + this.EnvelopeShape.sustain.time;
    let releaseTime = sustainTime + this.EnvelopeShape.release.time;

    this.gain.cancelScheduledValues(0);
    this.gain.value = 0;

    if (this.EnvelopeShape.attack.type == "linear") {
      this.gain.linearRampToValueAtTime(
        this.EnvelopeShape.attack.peak,
        attackTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        this.EnvelopeShape.attack.peak,
        attackTime
      );
    }

    if (this.EnvelopeShape.decay.type == "linear") {
      this.gain.linearRampToValueAtTime(
        this.EnvelopeShape.decay.peak,
        decayTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        this.EnvelopeShape.decay.peak,
        decayTime
      );
    }

    this.gain.linearRampToValueAtTime(
      this.EnvelopeShape.decay.peak,
      sustainTime
    );

    if (this.EnvelopeShape.release.type == "linear") {
      this.gain.linearRampToValueAtTime(
        0.0001,
        releaseTime
      );
    } else {
      this.gain.exponentialRampToValueAtTime(
        0.0001,
        releaseTime
      );
>>>>>>> 5c4bea71bc4d2ced05ee67d2108ace3000123719
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
