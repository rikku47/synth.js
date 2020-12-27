class Sine {

    private _start: number;
    private _end: number;
    private _increment: number;
    private _equalize: number;
    private _result: number[];

    private _wavetable: { x: number, y: number }[];

    public get start(): number {
        return this._start;
    }

    public set start(value: number) {
        this._start = value;
    }

    public get end(): number {
        return this._end;
    }

    public set end(value: number) {
        this._end = value;
    }

    public get increment(): number {
        return this._increment;
    }

    public set increment(value: number) {
        this._increment = value;
    }

    public get equalize(): number {
        return this._equalize;
    }

    public set equalize(value: number) {
        this._equalize = value;
    }

    public get result(): number[] {
        return this._result;
    }

    public get wavetable(): { x: number, y: number }[] {
        return this._wavetable;
    }

    constructor(
        start = 0,
        end = 360,
        increment = 1,
        equalize = 180,
    ) {
        this.start = start;
        this.end = end;
        this.increment = increment;
        this.equalize = equalize;
    }

    calc(): void {

        let current: number;
        let y: number;
        let rad: number;

        current = this._start;
        this._result = [];

        for (; current <= this._end; current += this._increment) {

            rad = current * Math.PI / 180;

            y = Math.sin(rad);

            this._result.push(y);
        }
    }

    equalizeY(): void {

        this._wavetable = [];
        let x: number = 0;

        this._result.forEach((y: number) => {

            this._wavetable.push({
                x: x,
                y: y * this._equalize
            });

            x+= this._increment;
        });
    }
}