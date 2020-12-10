class SynthModel {
    constructor() {
        this.funcs = [
            {
                start: 0,
                end: 360,
                current: 0,
                increment: 90,
                // 90 = triangle
                result: [],
                equalize: 180,
                isRelative: true,
                base: { x: 0, y: 0 },
                color: 'magenta',
                thickness: 1,
                coords: [],
                smooth: false
            }
        ]
    }

    // get currentVector() {
    //     return this.currentVector;
    // };

    // set setCurrentVectorX(value) {
    //     this.currentVector.x = value;
    // };

    // set setCurrentVectorY(value) {
    //     this.currentVector.y = value;
    // };

    sin(base) {

        this.funcs[0].base.x = base.x;
        this.funcs[0].base.y = base.y;

        for (; this.funcs[0].current < this.funcs[0].end; this.funcs[0].current += this.funcs[0].increment) {

            let y = Math.sin(this.funcs[0].current * Math.PI / 180);

            this.funcs[0].result.push({ x: this.funcs[0].current, y: y });

            if (this.funcs[0].isRelative) {

                this.funcs[0].coords.push({ x: this.funcs[0].base.x + this.funcs[0].current, y: this.funcs[0].base.y + (y * this.funcs[0].equalize) });
            };
        };

        // this.funcs[0].coords.push({ x: this.funcs[0].base.x + this.funcs[0].current, y: this.funcs[0].base.y + (y * this.funcs[0].equalize) });
    }

    cos(base) {

        this.funcs[0].base.x = base.x;
        this.funcs[0].base.y = base.y;

        for (; this.funcs[0].current <= this.funcs[0].end; this.funcs[0].current += this.funcs[0].increment) {

            let y = Math.cos(this.funcs[0].current * Math.PI / 180);

            this.funcs[0].result.push({ x: this.funcs[0].current, y: y });

            if (this.funcs[0].isRelative) {

                this.funcs[0].coords.push({ x: this.funcs[0].base.x + this.funcs[0].current, y: this.funcs[0].base.y + (y * this.funcs[0].equalize) });
            };
        };
    }

    draw() {

    }

    compareFunctions() {

    }
}

