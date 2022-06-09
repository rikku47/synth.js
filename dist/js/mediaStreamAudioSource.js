"use strict";
var MediaStreamAudioSource = /** @class */ (function () {
    function MediaStreamAudioSource(mediaStream, audioContext) {
        this.component = new MediaStreamAudioSourceNode(audioContext, { mediaStream: mediaStream });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    MediaStreamAudioSource.prototype.connectNode = function (node) {
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
    return MediaStreamAudioSource;
}());
;
//# sourceMappingURL=mediaStreamAudioSource.js.map