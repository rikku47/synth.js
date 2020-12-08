class Synth {
    constructor(
        canvasContainer = null,
        x = 0,
        y = 0,
        isCoordinateAxes = true,
        isGrid = true,
        centerVector = true,
        topLeft = true,
        topRight = true,
        bottomRight = true,
        bottomLeft = true,
        isX = true,
        isY = true,
        gapY = 10,
        gapX = 10
    ) {
        this.currentVector = {
            x: x,
            y: y
        };
        this.canvasContainer = canvasContainer;
        // this.canvasDimensions = {
        //     left: 0,
        //     top: 0,
        //     right: 0,
        //     bottom: 0
        // };
        this.isCoordinateAxes = isCoordinateAxes;
        this.isGrid = isGrid;
        this.centerVector = centerVector;
        this.ctx = document.createElement('canvas').getContext('2d');
        this.grid = {
            topLeft: topLeft,
            topRight: topRight,
            bottomRight: bottomRight,
            bottomLeft: bottomLeft,
            isX: isX,
            isY: isY,
            gapY: gapY,
            gapX: gapX,
            color: 'black'
        };
        this.funcs = {};
        this.amplitude = 0;
        this.setCanvas();

        if (this.centerVector) {
            this.setVectorToCenter();
        };

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes();
        };

        if (this.isGrid) {
            this.drawGrid();
            // this.drawVector(synth.currentVector, false, 'black', 1);
        }
    }

    get topLeft() {
        return this.grid.topLeft;
    };

    set topLeft(value) {
        this.grid.topLeft = value;
    };

    get topRight() {
        return this.grid.topRight;
    };

    set topRight(value) {
        this.grid.topRight = value;
    };

    get bottomRight() {
        return this.grid.bottomRight;
    };

    set bottomRight(value) {
        this.grid.bottomRight = value;
    };

    get bottomLeft() {
        return this.grid.bottomLeft;
    };

    set bottomLeft(value) {
        this.grid.bottomLeft = value;
    };

    get isX() {
        return this.grid.isX;
    };

    set isX(value) {
        this.grid.isX = value;
    };

    get isY() {
        return this.grid.isY;
    };

    set isY(value) {
        this.grid.isY = value;
    };

    get gapX() {
        return this.grid.gapX;
    };

    set gapX(value) {
        this.grid.gapX = value;
    };

    get gapY() {
        return this.grid.gapY;
    };

    set gapY(value) {
        this.grid.gapY = value;
    };

    setCanvas() {

        this.ctx.canvas.width = this.canvasContainer.clientWidth;

        this.ctx.canvas.height = this.canvasContainer.clientHeight;

        this.canvasContainer.appendChild(this.ctx.canvas);
    }

    setVectorToCenter() {
        this.currentVector.x = this.ctx.canvas.width / 2;
        this.currentVector.y = this.ctx.canvas.height / 2;
    }

    drawLine(x1, y1, x2, y2, color = 'black', lineWidth = 1) {

        this.ctx.beginPath();

        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);

        this.ctx.strokeStyle = color;

        this.ctx.lineWidth = lineWidth;

        this.ctx.stroke();

    }

    drawCoordinateAxes() {

        this.drawLine(this.currentVector.x, this.currentVector.y, 0, this.currentVector.y, 'red', 2);

        this.drawLine(this.currentVector.x, this.currentVector.y, this.ctx.canvas.width, this.currentVector.y, 'blue', 2);

        this.drawLine(this.currentVector.x, this.currentVector.y, this.currentVector.x, 0, 'green', 2);

        this.drawLine(this.currentVector.x, this.currentVector.y, this.currentVector.x, this.ctx.canvas.height, 'magenta', 2);
    }

    drawBars(sector) {

        if (sector != undefined) {

            if (this.grid.isX) {

                let currentX = this.currentVector.x;
                let top = 0;
                let bottom = this.currentVector.y;
                let bar = 0;
                let bars = Math.floor(this.ctx.canvas.width / 2 / this.grid.gapX);

                if (sector == 3 | sector == 4) {
                    top = this.currentVector.y;
                    bottom = this.ctx.canvas.height;
                };

                while (bar < bars) {

                    if (sector == 1 | sector == 4) {
                        currentX -= this.grid.gapX;
                    } else {
                        currentX += this.grid.gapX;
                    };

                    this.drawLine(currentX, top, currentX, bottom);

                    bar++;
                };
            }

            if (this.grid.isY) {

                let currentY = this.currentVector.y;
                let left = 0;
                let right = this.currentVector.x;
                let bar = 0;
                let bars = Math.floor(this.ctx.canvas.height / 2 / this.grid.gapY);

                if (sector == 2 | sector == 3) {
                    left = this.currentVector.x;
                    right = this.ctx.canvas.width;
                };

                while (bar < bars) {

                    if (sector == 1 | sector == 2) {
                        currentY -= this.grid.gapY;
                    } else {
                        currentY += this.grid.gapY;
                    };

                    this.drawLine(left, currentY, right, currentY);

                    bar++;
                };
            }
        }
    }

    drawGrid() {

        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3

        if (this.grid.topLeft) {

            this.drawBars(1);

        };

        if (this.grid.topRight) {

            this.drawBars(2);

        };

        if (this.grid.bottomRight) {

            this.drawBars(3);

        };

        if (this.grid.bottomLeft) {

            this.drawBars(4);

        };
    }

    drawVector(vector, isRelative = true, color = 'black', thickness = 1) {

        this.ctx.fillStyle = color;

        let vectorForDraw = { x: vector.x, y: vector.y };

        if (isRelative) {

            vectorForDraw.x = this.currentVector.x + vector.x;

            vectorForDraw.y = this.currentVector.y + vector.y;

        }

        let thick = thickness * 2;

        this.ctx.beginPath();

        this.ctx.fillRect(vectorForDraw.x - thickness, vectorForDraw.y - thickness, thick, thick);
    }

    drawFunction(func, current, end, increment, equalize, isRealtive, color, thickness) {

        if (current <= end) {

            let y = 0;

            if (func == 0) {

                y = Math.sin(current * Math.PI / 180) * equalize;

            };

            if (func == 1) {

                y = Math.cos(current * Math.PI / 180) * equalize;

            };

            if (func == 2) {

                let sineVal = Math.sin(current * Math.PI / 180);

                if (sineVal == 0 || sineVal == -1 || sineVal == 1) {

                    this.amplitude = sineVal;

                };

                y = this.amplitude * equalize;

                // if (current % 90 == 0) {

                //     y = Math.sin(current * Math.PI / 180) * equalize;

                // };

                // increment = 90;

            };

            if (func == 3) {

                let coSineVal = Math.cos(current * Math.PI / 180);

                if (coSineVal == 0 || coSineVal == -1 || coSineVal == 1) {

                    this.amplitude = coSineVal;

                    this.drawLine();
                };

                y = this.amplitude * equalize;

                // if (current % 90 == 0) {

                //     y = Math.cose(current * Math.PI / 180) * equalize;

                // };

                // increment = 90;

            };

            this.drawVector({ x: current, y: y }, isRealtive, color, thickness);

            current += increment;

            this.drawFunction(func, current, end, increment, equalize, isRealtive, color, thickness);

        }
    }

    resetCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    compareFunctions() {

    }

    reDraw(value) {

        this.setCanvas();

        if (this.centerVector) {
            this.setVectorToCenter();
        };

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes();
        };

        if (this.isGrid) {
            this.drawGrid();
            // this.drawVector(synth.currentVector, false, 'black', 1);
        };

        let end = Number(value);

        this.drawFunction(0, 0, end, 1, synth.grid.gapY * 3, true, 'magenta', 2);
        this.drawFunction(1, 0, end, 1, synth.grid.gapY * 3, true, 'magenta', 2);
        this.drawFunction(2, 0, end, 1, synth.grid.gapY * 3, true, 'green', 2);
        this.drawFunction(3, 0, end, 1, synth.grid.gapY * 3, true, 'red', 2);
    }

    init() {
        var context = new AudioContext();
        var o = context.createOscillator();
        o.type = "sine";
        o.connect(context.destination);
        // o.start();
    }

    square() {

        var points = [];

        return points;
    }

    saw() {

        var points = [];


        return points;
    }

    triangle() {

        var points = [];

        return points;

    }

    parseNoteValues() {
        return JSON.parse('notevalues.js');
    }
}