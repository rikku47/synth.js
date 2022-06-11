"use strict";
function changeVolume(params) {
    var html = params.target;
    var value = Number(html.value);
    changeDetune(oscillator1, value);
    var elements = [slDetuneOsc1, nmDetuneOsc1];
    updateHTMLValue(elements, value);
}
//# sourceMappingURL=listeners.js.map