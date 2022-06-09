"use strict";
var MediaStreamAudioDestination = /** @class */ (function () {
    function MediaStreamAudioDestination(audioContext) {
        this.component = new MediaStreamAudioDestinationNode(audioContext);
        this.inputNodes = [];
    }
    ;
    MediaStreamAudioDestination.prototype.connectNode = function (node) {
        this.component.connect(node.component);
        this.inputNodes.push(node);
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
    return MediaStreamAudioDestination;
}());
;
//# sourceMappingURL=mediaStreamAudioDestination.js.map