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
exports.Synth = void 0;
var channel_1 = require("./classes/channel");
var envelope_1 = require("./classes/envelope");
var oscillator_1 = require("./classes/oscillator");
var Synth = /** @class */ (function (_super) {
    __extends(Synth, _super);
    // #endregion */
    // #region  Constructor
    function Synth(channels, oscillators) {
        if (channels === void 0) { channels = 1; }
        if (oscillators === void 0) { oscillators = 9; }
        var _this = _super.call(this) || this;
        _this._masterChannel = new channel_1.Channel(_this.destination, _this, { gain: 0.0 });
        _this._channels = [];
        for (var channel = 0; channel < channels; channel++) {
            var channel_2 = new channel_1.Channel(_this.MasterChannel, _this, { gain: 0.0 });
            _this.Channels.push(channel_2);
        }
        _this._oscillators = [];
        for (var oscillator = 0; oscillator < oscillators; oscillator++) {
            _this.Oscillators.push(new oscillator_1.Oscillator(_this, _this.Channels[0]));
        }
        _this._envelope = new envelope_1.Envelope(_this.Oscillators);
        return _this;
    }
    Object.defineProperty(Synth.prototype, "Oscillators", {
        // #endregion
        // #region Getter and Setters
        get: function () {
            return this._oscillators;
        },
        set: function (value) {
            this._oscillators = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Synth.prototype, "Envelope", {
        get: function () {
            return this._envelope;
        },
        set: function (value) {
            this._envelope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Synth.prototype, "MasterChannel", {
        get: function () {
            return this._masterChannel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Synth.prototype, "Channels", {
        get: function () {
            return this._channels;
        },
        enumerable: false,
        configurable: true
    });
    // #endregion
    // #region  Functions
    Synth.prototype.changeVolume = function (volume, gainNode) {
        gainNode.gain.value = volume;
    };
    return Synth;
}(AudioContext));
exports.Synth = Synth;
