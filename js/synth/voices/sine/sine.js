class Sine {
    constructor(start = 0, end = 360, increment = 1, equalize = 180) {
        this.start = start;
        this.end = end;
        this.increment = increment;
        this.equalize = equalize;
    }
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = value;
    }
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }
    get increment() {
        return this._increment;
    }
    set increment(value) {
        this._increment = value;
    }
    get equalize() {
        return this._equalize;
    }
    set equalize(value) {
        this._equalize = value;
    }
    get result() {
        return this._result;
    }
    get wavetable() {
        return this._wavetable;
    }
    calc() {
        let current;
        let y;
        let rad;
        current = this._start;
        this._result = [];
        for (; current <= this._end; current += this._increment) {
            rad = current * Math.PI / 180;
            y = Math.sin(rad);
            this._result.push(y);
        }
    }
    equalizeY() {
        this._wavetable = [];
        let x = 0;
        this._result.forEach((y) => {
            this._wavetable.push({
                x: x,
                y: y * this._equalize
            });
            x += this._increment;
        });
    }
}
