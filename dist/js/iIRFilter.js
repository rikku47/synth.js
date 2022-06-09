"use strict";
var IIRFilter = /** @class */ (function () {
    function IIRFilter(audioContext, feedback, feedforward) {
        this.component = new IIRFilterNode(audioContext, {
            feedback: feedback,
            feedforward: feedforward
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    IIRFilter.prototype.connectNode = function (node) {
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
    return IIRFilter;
}());
;
//# sourceMappingURL=iIRFilter.js.map