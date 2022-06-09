"use strict";
var Panner = /** @class */ (function () {
    function Panner(coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor, audioContext) {
        this.component = new PannerNode(audioContext, {
            coneInnerAngle: coneInnerAngle,
            coneOuterAngle: coneOuterAngle,
            coneOuterGain: coneOuterGain,
            distanceModel: distanceModel,
            maxDistance: maxDistance,
            orientationX: orientationX,
            orientationY: orientationY,
            orientationZ: orientationZ,
            panningModel: panningModel,
            positionX: positionX,
            positionY: positionY,
            positionZ: positionZ,
            refDistance: refDistance,
            rolloffFactor: rolloffFactor
        });
        this.inputNodes = [];
        this.outputNodes = [];
    }
    ;
    Panner.prototype.connectNode = function (node) {
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
    return Panner;
}());
;
//# sourceMappingURL=panner.js.map