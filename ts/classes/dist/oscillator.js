"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Oscillator = void 0;
var Oscillator = /** @class */ (function (_super) {
    __extends(Oscillator, _super);
    //#endregion
    /**
     *
     */
    function Oscillator(context, destinationNode, options) {
        var _this = _super.call(this, context, options) || this;
        _this._amplitude = _this.createGainNode(1, destinationNode);
        _this.connect(_this.Amplitude);
        _this._status = false;
        return _this;
    }
    Object.defineProperty(Oscillator.prototype, "Amplitude", {
        // private _envelope: Envelope;
        /* #endregion */
        //#region Getters and Setters
        get: function () {
            return this._amplitude;
        },
        set: function (value) {
            this._amplitude = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oscillator.prototype, "Status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Oscillator.prototype.changeOscillatorFrequncy = function (frequency) {
        this.frequency.value = frequency;
    };
    Oscillator.prototype.changeOscillatorType = function (type) {
        this.type = type;
    };
    //#endregion
    Oscillator.prototype.createGainNode = function (volume, destination) {
        var gainNode = this.context.createGain();
        gainNode.gain.value = volume;
        gainNode.connect(destination);
        return gainNode;
    };
    Oscillator.prototype.toggleEnvelope = function () { };
    return Oscillator;
}(OscillatorNode));
exports.Oscillator = Oscillator;
