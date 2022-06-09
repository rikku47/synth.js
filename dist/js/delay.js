"use strict";
var Delay = /** @class */ (function () {
    function Delay(audioContext, time, maxDelayTime) {
        this.component = new DelayNode(audioContext, { delayTime: time, maxDelayTime: maxDelayTime });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    Delay.prototype.connectNode = function (node) {
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
    return Delay;
}());
;
//# sourceMappingURL=delay.js.map