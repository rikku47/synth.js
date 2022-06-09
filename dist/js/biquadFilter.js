"use strict";
var BiquadFilter = /** @class */ (function () {
    function BiquadFilter(type, audioContext) {
        this.component = new BiquadFilterNode(audioContext, {
            type: type
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    BiquadFilter.prototype.connectNode = function (node) {
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
    return BiquadFilter;
}());
;
//# sourceMappingURL=biquadFilter.js.map