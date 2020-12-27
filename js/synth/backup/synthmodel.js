class SynthModel {
    constructor() {
        this.funcs = [{
                start: 0,
                end: 360,
                current: 0,
                increment: 1,
                // 90 = triangle
                result: [],
                equalize: 180,
                isRelative: true,
                base: {
                    x: 0,
                    y: 0
                },
                color: 'magenta',
                thickness: 2,
                coords: [],
                smooth: false
            },
            {
                start: 0,
                end: 360,
                current: 0,
                increment: 1,
                // 90 = triangle
                result: [],
                equalize: 180,
                isRelative: true,
                base: {
                    x: 0,
                    y: 0
                },
                color: 'magenta',
                thickness: 2,
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

        let index = 0;

        this.set(index, base);
    }

    cos(base) {

        let index = 1;

        this.set(index, base);
    }

    set(index, base) {

        let func = this.funcs[index];

        func.base = base;

        this.calc(func, index);
    }

    calc(func, index) {
  
        func.current = 0;
        func.coords = [];
        func.result = [];

        for (; func.current <= func.end; func.current += func.increment) {

            let y = 0;
            let rad = func.current * Math.PI / 180;

            if (index == 0) {

                y = Math.sin(rad);

            } else {

                y = Math.cos(rad);

            };

            func.result.push({
                x: func.current,
                y: y
            });

            if (func.isRelative) {
                func.coords.push({
                    x: func.base.x + func.current,
                    y: func.base.y + (y * func.equalize)
                });
            };
        };

        if (func.end % func.increment != 0) {

            func.result.push({
                x: func.end,
                y: 0
            });

            if (func.isRelative) {

                func.coords.push({
                    x: func.base.x + func.end,
                    y: func.base.y
                });

            };
        };
    };

    draw() {

    };

    compareFunctions() {

    };

    updateSinEq(value) {
        this.funcs[0].equalize = value;
    };

    updateCosEq(value) {
        this.funcs[1].equalize = value;
    };
};