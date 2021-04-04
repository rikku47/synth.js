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
exports.Channel = void 0;
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    // private _oscillators: Oscillator[];
    // public get Oscillators(): Oscillator[] {
    //   return this._oscillators;
    // }
    // public set Oscillators(value: Oscillator[]) {
    //   this._oscillators = value;
    // }
    /**
     *
     */
    function Channel(destinationNode, context, 
    // oscillators: Oscillator[],
    options) {
        var _this = _super.call(this, context, options) || this;
        _this.connect(destinationNode);
        return _this;
        // this._oscillators = oscillators;
    }
    return Channel;
}(GainNode));
exports.Channel = Channel;
