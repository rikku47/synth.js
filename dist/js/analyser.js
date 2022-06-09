"use strict";
var Analyser = /** @class */ (function () {
    function Analyser(fftSize, minDecibels, maxDecibels, smoothingTimeConstant, audioContext) {
        this.component = new AnalyserNode(audioContext, {
            fftSize: fftSize,
            minDecibels: minDecibels,
            maxDecibels: maxDecibels,
            smoothingTimeConstant: smoothingTimeConstant
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    Analyser.prototype.connectNode = function (node) {
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
    return Analyser;
}());
;
//# sourceMappingURL=analyser.js.map