"use strict";
var WaveShaper = /** @class */ (function () {
    function WaveShaper(audioContext, curve, oversample) {
        this.component = new WaveShaperNode(audioContext, {
            curve: curve,
            oversample: oversample
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    WaveShaper.prototype.connectNode = function (node) {
        this.component.connect(node.component);
        this.outputNodes.push(node);
        if ((node instanceof ConstantSource)
            || (node instanceof MediaElementAudioSource)
            || (node instanceof Oscillator)) {
            node.outputNodes.push(this);
        }
        else {
            node.inputNodes.push(this);
        }
        ;
    };
    ;
    return WaveShaper;
}());
;
//# sourceMappingURL=waveShaper.js.map