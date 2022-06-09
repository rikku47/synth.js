"use strict";
var MediaElementAudioSource = /** @class */ (function () {
    function MediaElementAudioSource(audioContext, mediaElement) {
        this.component = new MediaElementAudioSourceNode(audioContext, { mediaElement: mediaElement });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    MediaElementAudioSource.prototype.connectNode = function (node) {
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
    return MediaElementAudioSource;
}());
;
//# sourceMappingURL=mediaElementAudioSource.js.map