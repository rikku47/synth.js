"use strict";
exports.__esModule = true;
exports.Envelope = void 0;
var Envelope = /** @class */ (function () {
    /**
     *
     */
    function Envelope(oscillators) {
        this._oscillators = oscillators;
        this._envelopeShape = {
            attack: {
                time: 0.1,
                peak: 1,
                type: "linear"
            },
            decay: {
                time: 0.04,
                peak: 0.2,
                type: "linear"
            },
            sustain: {
                time: 0.0
            },
            release: {
                time: 0.04,
                type: "linear"
            }
        };
        this._status = false;
    }
    Object.defineProperty(Envelope.prototype, "Oscillators", {
        get: function () {
            return this._oscillators;
        },
        set: function (value) {
            this._oscillators = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "EnvelopeShape", {
        get: function () {
            return this._envelopeShape;
        },
        set: function (value) {
            this._envelopeShape = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "Status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    //#region  Envelope
    Envelope.prototype.toggle = function () {
        for (var index = 0; index < this.Oscillators.length; index++) {
            var oscillator = this.Oscillators[index];
            if (oscillator.Status == true) {
                var now = oscillator.context.currentTime;
                var attackTime = now + this.EnvelopeShape.attack.time;
                var decayTime = attackTime + this.EnvelopeShape.decay.time;
                var sustainTime = decayTime + this.EnvelopeShape.sustain.time;
                var releaseTime = sustainTime + this.EnvelopeShape.release.time;
                oscillator.Amplitude.gain.cancelScheduledValues(0);
                oscillator.Amplitude.gain.value = 0;
                if (this.EnvelopeShape.attack.type == "linear") {
                    oscillator.Amplitude.gain.linearRampToValueAtTime(this.EnvelopeShape.attack.peak, attackTime);
                }
                else {
                    oscillator.Amplitude.gain.exponentialRampToValueAtTime(this.EnvelopeShape.attack.peak, attackTime);
                }
                if (this.EnvelopeShape.decay.type == "linear") {
                    oscillator.Amplitude.gain.linearRampToValueAtTime(this.EnvelopeShape.decay.peak, decayTime);
                }
                else {
                    oscillator.Amplitude.gain.exponentialRampToValueAtTime(this.EnvelopeShape.decay.peak, decayTime);
                }
                oscillator.Amplitude.gain.linearRampToValueAtTime(this.EnvelopeShape.decay.peak, sustainTime);
                if (this.EnvelopeShape.release.type == "linear") {
                    oscillator.Amplitude.gain.linearRampToValueAtTime(0.0001, releaseTime);
                }
                else {
                    oscillator.Amplitude.gain.exponentialRampToValueAtTime(0.0001, releaseTime);
                }
            }
        }
    };
    return Envelope;
}());
exports.Envelope = Envelope;
