class SynthModel {
    constructor(x = 0, y = 0) {
        this.currentVector = {
            x: x,
            y: y
        };

        this.funcs = [
            {
                name: 'Sinus',
                id: 0,
                isActive: true,
                start: 0,
                end: 360,
                current: 0,
                increment: 1,
                equalize: 30,
                amplitude: 0,
                isRelative: true,
                baseVector: this.centerVector,
                color: 'magenta',
                thickness: 1,
            },
            {
                name: 'Kosinus',
                id: 1,
                isActive: false,
                start: 0,
                end: 360,
                current: 0,
                increment: 1,
                equalize: 30,
                amplitude: 0,
                isRelative: true,
                baseVector: this.centerVector,
                color: 'magenta',
                thickness: 1
            }
        ];
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

    compareFunctions() {

    }
}

