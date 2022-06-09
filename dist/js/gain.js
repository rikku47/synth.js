"use strict";
var Gain = /** @class */ (function () {
    function Gain(audioContext, gain) {
        this.component = new GainNode(audioContext, {
            gain: gain
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    Gain.prototype.connectNode = function (node) {
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
    return Gain;
}());
;
//# sourceMappingURL=gain.js.map