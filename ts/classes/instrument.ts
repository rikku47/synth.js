import { Volume } from "./volume";
import { Envelope } from "./envelope";
import { Oscillator } from "./oscillator";

class Instrument {

  /* #region Private fields  */

  private _audioNodes: AudioNode[] = [];
  private _context: BaseAudioContext;
  private _destinationNode: AudioNode;
  private _volume: Volume;
  private _envelope: Envelope;
  private _oscillatorNodes: OscillatorNode[] = [];

  // private _envelope: Envelope;

  /* #endregion */

  //#region Getters and Setters

  public get AudioNodes(): AudioNode[] {
    return this._audioNodes;
  }

  public get Context(): BaseAudioContext {
    return this._context;
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

  set Envelope(value: Envelope) {
    this._envelope = value;
  }

  get OscillatorNodes(): OscillatorNode[] {
    return this._oscillatorNodes;
  }

  //#endregion

  /**
   *
   */
  constructor(
    context: BaseAudioContext,
    destinationNode: AudioNode,
    oscillators = 4,
    options?: OscillatorOptions
  ) {
    this._context = context;
    this._destinationNode = destinationNode;
    this._volume = new Volume(context);
    this._envelope = new Envelope(context);

    for (let oscillator = 0; oscillator < oscillators; oscillator++) {
      this.OscillatorNodes.push(new OscillatorNode(this.Context));
    };

    this.AudioNodes.push(this.Volume, this.Envelope);

    this.connectAudioNodes(this.AudioNodes);
  }

  playNote(frequency: number) {
    this.OscillatorNodes.forEach((oscillatorNode) => {
      oscillatorNode.frequency.value = frequency;
      this.Envelope.toggle();
    });
  }

  connectAudioNodes(audioNodes: AudioNode[]) {
    if (audioNodes.length > 1) {
      for (
        let index1 = 0, index2 = 1;
        index1 < audioNodes.length;
        index1++, index2++
      ) {
        const audioNode1 = audioNodes[index1];
        const audioNode2 = audioNodes[index2];
        audioNode1.connect(audioNode2);
      }
    }
  }

  connectOscillatorNodesToAudio(oscillatorNodes: OscillatorNode[], audioNode: AudioNode) {
    if (oscillatorNodes.length > 1 && audioNode != undefined) {
      oscillatorNodes.forEach(oscillatorNode => {
        oscillatorNode.connect(audioNode)
      });
    };
  }
  //#endregion
}

export { Instrument }