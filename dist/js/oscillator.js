"use strict";
var Oscillator = /** @class */ (function () {
    function Oscillator(audioContext, detune, frequency, type) {
        this.component = new OscillatorNode(audioContext, {
            detune: detune,
            frequency: frequency,
            type: type
        });
        this.outputNodes = [];
    }
    ;
    Oscillator.prototype.connectNode = function (node) {
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
    return Oscillator;
}());
;
//# sourceMappingURL=oscillator.js.map