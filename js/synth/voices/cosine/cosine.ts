class CoSine {

    private _start: number;
    private _end: number;
    private _equalize: number;
    private _result: number[];

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

    public get equalize(): number {
        return this._equalize;
    }

    public set equalize(value: number) {
        this._equalize = value;
    }

    public get result(): number[] {
        return this._result;
    }

    constructor(
        start = 0,
        end = 360,
        equalize = 180,
    ){
        this.start = start;
        this.end = end;
        this.equalize = equalize;
    }

    calc(): void {

        let current: number;
        let y: number;
        let rad: number;

        current = this._start;
        this._result = [];
        
        for (; current <= this.end; current++) {

            rad = current * Math.PI / 180;

            y = Math.cos(rad);

            this._result.push(y);
        }
    }

    equalizeY(): void {

        let eq: number;

        this._result.forEach((y: number) => {
            eq = y * this._equalize;
        });
    }
}