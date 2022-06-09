"use strict";
var ConstantSource = /** @class */ (function () {
    function ConstantSource(offset, audioContext) {
        this.component = new ConstantSourceNode(audioContext, {
            offset: offset
        });
        this.outputNodes = [];
    }
    ;
    ConstantSource.prototype.connectNode = function (node) {
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
    return ConstantSource;
}());
;
//# sourceMappingURL=constantSource.js.map