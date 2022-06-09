"use strict";
var ChannelSplitter = /** @class */ (function () {
    function ChannelSplitter(audioContext) {
        this.component = new ChannelSplitterNode(audioContext);
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    ChannelSplitter.prototype.connectNode = function (node) {
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
    return ChannelSplitter;
}());
;
//# sourceMappingURL=channelSplitter.js.map