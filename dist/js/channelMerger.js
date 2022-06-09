"use strict";
var ChannelMerger = /** @class */ (function () {
    function ChannelMerger(audioContext) {
        this.component = new ChannelMergerNode(audioContext);
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    ChannelMerger.prototype.connectNode = function (node) {
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
    return ChannelMerger;
}());
;
//# sourceMappingURL=channelMerger.js.map