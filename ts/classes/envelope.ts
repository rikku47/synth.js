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

export class Envelope {
  private _oscillators: Oscillator[];
  private _envelopeShape: EnvelopeShape;
  private _status: boolean;

  public get Oscillators(): Oscillator[] {
    return this._oscillators;
  }

  public set Oscillators(value: Oscillator[]) {
    this._oscillators = value;
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
  constructor(oscillators: Oscillator[]) {
    this._oscillators = oscillators;
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
  }

  //#region  Envelope

  toggle() {
    for (let index = 0; index < this.Oscillators.length; index++) {
      const oscillator = this.Oscillators[index];

      if (oscillator.Status == true) {
        let now = oscillator.context.currentTime;
        let attackTime = now + this.EnvelopeShape.attack.time;
        let decayTime = attackTime + this.EnvelopeShape.decay.time;
        let sustainTime = decayTime + this.EnvelopeShape.sustain.time;
        let releaseTime = sustainTime + this.EnvelopeShape.release.time;

        oscillator.Amplitude.gain.cancelScheduledValues(0);
        oscillator.Amplitude.gain.value = 0;

        if (this.EnvelopeShape.attack.type == "linear") {
          oscillator.Amplitude.gain.linearRampToValueAtTime(
            this.EnvelopeShape.attack.peak,
            attackTime
          );
        } else {
          oscillator.Amplitude.gain.exponentialRampToValueAtTime(
            this.EnvelopeShape.attack.peak,
            attackTime
          );
        }

        if (this.EnvelopeShape.decay.type == "linear") {
          oscillator.Amplitude.gain.linearRampToValueAtTime(
            this.EnvelopeShape.decay.peak,
            decayTime
          );
        } else {
          oscillator.Amplitude.gain.exponentialRampToValueAtTime(
            this.EnvelopeShape.decay.peak,
            decayTime
          );
        }

        oscillator.Amplitude.gain.linearRampToValueAtTime(
          this.EnvelopeShape.decay.peak,
          sustainTime
        );

        if (this.EnvelopeShape.release.type == "linear") {
          oscillator.Amplitude.gain.linearRampToValueAtTime(
            0.0001,
            releaseTime
          );
        } else {
          oscillator.Amplitude.gain.exponentialRampToValueAtTime(
            0.0001,
            releaseTime
          );
        }
      }
    }
  }
  //#endregion
}
