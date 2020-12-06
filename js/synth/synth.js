class Synth {
    constructor(canvasContainer) {
        this.baseVector = {
            x: 0,
            y: 0
        };
        this.canvasContainer = canvasContainer;
        this.canvasDimensions = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        },
            this.centerVector = true;
        this.ctx = document.createElement('canvas').getContext('2d');
        this.grid = {
            topLeft: true,
            topRight: true,
            bottomRight: false,
            bottomLeft: false,
            gapY: 30,
            gapX: 30
        };

        this.setCanvas();
        this.setVectorToCenter(this.baseVector);
    }

    // get baseVectorP() {
    //     return this.baseVector;
    // }

    // get gridP() {
    //     return this.grid;
    // }

    setCanvas() {

        this.ctx.canvas.width = this.canvasContainer.clientWidth;

        this.ctx.canvas.height = this.canvasContainer.clientHeight;

        this.canvasContainer.appendChild(this.ctx.canvas);
    }

    setVectorToCenter(vector) {
        vector.x = this.ctx.canvas.width / 2;
        vector.y = this.ctx.canvas.height / 2;
    }

    drawLine(x1, y1, x2, y2, color = 'black', lineWidth = 1) {

        this.ctx.beginPath();

        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);

        this.ctx.strokeStyle = color;

        this.ctx.lineWidth = lineWidth;

        this.ctx.stroke();

    }

    drawCoordinateAxes(vector) {

        this.drawLine(vector.x, vector.y, 0, vector.y, 'red', 2);

        this.drawLine(vector.x, vector.y, this.ctx.canvas.width, vector.y, 'blue', 2);

        this.drawLine(vector.x, vector.y, vector.x, 0, 'green', 2);

        this.drawLine(vector.x, vector.y, vector.x, this.ctx.canvas.height, 'magenta', 2);
    }

    drawBars(vector, isLeft, isX, isY, color) {

        let currentX = 0;
        let top = 0;
        let bottom = vector.y;
        let bar = 0;
        let bars = Math.floor(this.ctx.canvas.width / 2 / this.grid.gapX);

        // top = vector.y - 40;
        // bottom = vector.y + 40;

        if (isX) {
            if (isLeft) {
                currentX = vector.x - this.grid.gapX;
            } else {
                currentX = vector.x + this.grid.gapX;
            }

            while (bar < bars) {

                this.drawLine(currentX, top, currentX, bottom, color);

                if (isLeft) {
                    currentX -= this.grid.gapX;
                } else {
                    currentX += this.grid.gapX;
                }

                bar++;
            };
        }

        // if (isY) {
        //     if (isLeft) {
        //         currentX = vector.x - this.grid.gapX;
        //     } else {
        //         currentX = vector.x + this.grid.gapX;
        //     }

        //     while (bar < bars) {

        //         this.drawLine(currentX, top, currentX, bottom, color);

        //         if (isLeft) {
        //             currentX -= this.grid.gapX;
        //         } else {
        //             currentX += this.grid.gapX;
        //         }

        //         bar++;
        //     };
        // }
    }

    drawGrid(vector) {

        //              x   y   legend  inverse
        // LeftTop      -   +   1       3
        // RightTop     +   +   2       4
        // RightBottom  +   -   3       1
        // LeftBottom   -   -   4       2

        if (this.grid.topLeft) {

            this.drawBars(vector, true, true, true, 'black');
            
        }

        if (this.grid.topRight) {

            this.drawBars(vector, false, true, true, 'black');

        }

        if (this.grid.bottomRight) {

            while (vector.x < ctx.canvas.width) {

                vector.x += grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }

        if (this.grid.bottomRight) {

            while (vector.x > 0) {

                vector.x -= grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, 0, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }
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

        for (let index = 0; index <= 360; index++) {

            if (index == 0) {

                var point = {
                    x: index,
                    y: 200 + 100
                };

                points.push(point);

            } else if (index == 180) {

                var point = {
                    x: index,
                    y: 200 + 100
                };

                points.push(point);

                var point = {
                    x: index,
                    y: 200 - 100
                };

                points.push(point);

            } else if (index == 360) {

                var point = {
                    x: index,
                    y: 200 - 100
                };

                points.push(point);

                var point = {
                    x: index,
                    y: 200
                };

                points.push(point);

            }
        }

        return points;
    }

    saw() {

        var points = [];

        for (let index = 0; index <= 360; index++) {

            if (index == 0) {

                var point = {
                    x: index,
                    y: 200 + 100
                };

                points.push(point);

            } else if (index == 180) {

                var point = {
                    x: index,
                    y: 200 - 100
                };

                points.push(point);

                var point = {
                    x: index,
                    y: 200 + 100
                };

                points.push(point);

            } else if (index == 360) {

                var point = {
                    x: index,
                    y: 200 - 100
                };
                points.push(point);

                var point = {
                    x: index,
                    y: 200
                };

                points.push(point);

            }
        }

        return points;
    }

    parseNoteValues() {
        return JSON.parse('notevalues.js');
    }

    triangle() {

        var points = [];

        for (let index = 0; index <= 360; index++) {

            var point = {
                x: index,
                y: 200
            };

            points.push(point);

        }

        return points;

    }
}

const synth = new Synth(document.body);

synth.setVectorToCenter(synth.baseVector);
synth.drawCoordinateAxes(synth.baseVector);
synth.drawGrid(synth.baseVector);