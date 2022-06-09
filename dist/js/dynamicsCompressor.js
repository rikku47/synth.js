"use strict";
var DynamicsCompressor = /** @class */ (function () {
    function DynamicsCompressor(audioContext) {
        this.component = new DynamicsCompressorNode(audioContext);
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    DynamicsCompressor.prototype.connectNode = function (node) {
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
    return DynamicsCompressor;
}());
;
//# sourceMappingURL=dynamicsCompressor.js.map