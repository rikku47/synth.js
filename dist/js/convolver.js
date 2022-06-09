"use strict";
var Convolver = /** @class */ (function () {
    function Convolver(audioContext, buffer, normalize) {
        this.component = new ConvolverNode(audioContext, {
            buffer: buffer,
            disableNormalization: normalize
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    Convolver.prototype.connectNode = function (node) {
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
    return Convolver;
}());
;
//# sourceMappingURL=convolver.js.map