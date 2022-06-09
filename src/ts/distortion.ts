/** 
 * @param {Number} amount 
 * @param {Number} fine
 */
function makeDistortionCurve(amount: number, fine: number) {
    var k = typeof amount === 'number' ? amount : 50.0,
        n_samples = 44100,
        curve = new Float32Array(n_samples),
        deg = Math.PI / 180,
        i = 0,
        x;
    for (; i < n_samples; ++i) {
        x = i * 2 / n_samples - 1;
        curve[i] = (fine + k) * x * 20.0 * deg / (Math.PI + k * Math.abs(x));
    }
    return curve;
};