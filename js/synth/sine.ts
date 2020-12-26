class Sine {

    private _start: number;

    public get start(): number {
        return this._start;
    }
    public set start(value: number) {
        this._start = value;
    }

    constructor(
        start: number,
    ) {
        this.start = start;
    }
};