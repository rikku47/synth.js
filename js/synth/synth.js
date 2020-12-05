class Synth {
    constructor(canvasContainer) {
        this.baseVector = {
            x: 0,
            y: 0
        };
        this.canvasContainer = canvasContainer;
        this.centerVector = true;
        this.ctx = document.createElement('canvas').getContext('2d');
        this.grid = {
            topLeft: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            gapY: 30,
            gapX: 30
        };

        this.setCanvas();
        this.setVectorToCenter(this.baseVector);
    }

    get baseVectorP() {
        return this.baseVector;
    }

    get gridP() {
        return this.grid;
    }

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

    drawBars(left, right, up, down, color) {

        while (left <= right) {

            this.drawLine(left, up, left, down, color);

            left += this.grid.gapX;

        };
    }

    drawGrid() {

        //              x   y   legend  inverse
        // LeftTop      -   +   1       3
        // RightTop     +   +   2       4
        // RightBottom  +   -   3       1
        // LeftBottom   -   -   4       2

        if (this.grid.topLeft) {

            let left = this.ctx.canvas.width % this.grid.gapX;
            let right = this.ctx.canvas.width / 2;

            let up = this.ctx.canvas.height % this.grid.gapY;
            let down = this.ctx.canvas.height / 2;

            this.drawBars(left, right, up, down, 'black');

            // while (start <= end) {

            //     this.drawLine(this.baseVector.x, start, 0, start, 'black');

            //     start += this.grid.gapY;

            // };
        }

        if (this.grid.topRight) {

            while (this.baseVector.x < this.ctx.canvas.width) {

                this.baseVector.x += this.baseVector.gapX;

                this.drawLine(this.baseVector.x, this.baseVector.y, this.baseVector.x, 0, 'black');
            };

            this.setVectorToCenter(this.baseVector);

            while (this.baseVector.y > 0) {

                this.baseVector.y -= this.grid.gapY;

                this.drawLine(this.baseVector.x, this.baseVector.y, this.ctx.canvas.width, this.baseVector.y, 'black');
            };

            setVectorToCenter(this.baseVector);
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

synth.drawGrid();