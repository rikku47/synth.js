var Envelope = /** @class */ (function () {
    /**
     *
     */
    function Envelope() {
        this.AttackTime = 0.1;
        this.AttackPeak = 1;
        this.AttackType = "linear";
        this.DecayTime = 0.04;
        this.DecayPeak = 0.2;
        this.DecayType = "linear";
        this.SustainTime = 0.0;
        this.releaseTime = 0.04;
        this.releaseType = "linear";
    }
    Object.defineProperty(Envelope.prototype, "AttackTime", {
        get: function () {
            return this._attackTime;
        },
        set: function (value) {
            this._attackTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "AttackPeak", {
        get: function () {
            return this._attackPeak;
        },
        set: function (value) {
            this._attackPeak = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "AttackType", {
        get: function () {
            return this._attackType;
        },
        set: function (value) {
            this._attackType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "DecayTime", {
        get: function () {
            return this._decayTime;
        },
        set: function (value) {
            this._decayTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "DecayPeak", {
        get: function () {
            return this._decayPeak;
        },
        set: function (value) {
            this._decayPeak = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "DecayType", {
        get: function () {
            return this._decayType;
        },
        set: function (value) {
            this._decayType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "SustainTime", {
        get: function () {
            return this._sustainTime;
        },
        set: function (value) {
            this._sustainTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "releaseTime", {
        get: function () {
            return this._releaseTime;
        },
        set: function (value) {
            this._releaseTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "releaseType", {
        get: function () {
            return this._releaseType;
        },
        set: function (value) {
            this._releaseType = value;
        },
        enumerable: false,
        configurable: true
    });
    //#region  Envelope
    Envelope.prototype.applyEnvelope = function (oscillator) {
        var now = 0;
        var attackTime = now + this.AttackTime;
        var decayTime = now + attackTime + this.DecayTime;
        var sustainTime = now + decayTime + this.SustainTime;
        var releaseTime = now + sustainTime + this.releaseTime;
        oscillator.Amplitude.gain.cancelScheduledValues(0);
        oscillator.Amplitude.gain.value = 0;
        if (this.AttackType == "linear") {
            oscillator.Amplitude.gain.linearRampToValueAtTime(this.AttackPeak, attackTime);
        }
        else {
            oscillator.Amplitude.gain.exponentialRampToValueAtTime(this.AttackPeak, attackTime);
        }
        if (this.DecayType == "linear") {
            oscillator.Amplitude.gain.linearRampToValueAtTime(this.DecayPeak, decayTime);
        }
        else {
            oscillator.Amplitude.gain.exponentialRampToValueAtTime(this.DecayPeak, decayTime);
        }
        oscillator.Amplitude.gain.linearRampToValueAtTime(this.DecayPeak, sustainTime);
        if (this.releaseType == "linear") {
            oscillator.Amplitude.gain.linearRampToValueAtTime(0.0001, releaseTime);
        }
        else {
            oscillator.Amplitude.gain.exponentialRampToValueAtTime(0.0001, releaseTime);
        }
    };
    return Envelope;
}());
