class Synth {
    constructor(canvasContainer) {
        this.currentVector = {
            x: 0,
            y: 0
        };
        this.canvasContainer = canvasContainer;
        // this.canvasDimensions = {
        //     left: 0,
        //     top: 0,
        //     right: 0,
        //     bottom: 0
        // };
        this.centerVector = true;
        this.ctx = document.createElement('canvas').getContext('2d');
        this.grid = {
            topLeft: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            gapY: 40,
            gapX: 40
        };

        this.setCanvas();
        this.setVectorToCenter(this.currentVector);
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

    drawCoordinateAxes(vector) {

        this.drawLine(vector.x, vector.y, 0, vector.y, 'red', 2);

        this.drawLine(vector.x, vector.y, this.ctx.canvas.width, vector.y, 'blue', 2);

        this.drawLine(vector.x, vector.y, vector.x, 0, 'green', 2);

        this.drawLine(vector.x, vector.y, vector.x, this.ctx.canvas.height, 'magenta', 2);
    }

    drawBars(vector, sector, isX, isY, color) {

        if (isX) {

            let currentX = vector.x;
            let top = 0;
            let bottom = vector.y;
            let bar = 0;
            let bars = Math.floor(this.ctx.canvas.width / 2 / this.grid.gapX);

            if (sector == 3 | sector == 4) {
                top = vector.y;
                bottom = this.ctx.canvas.height;
            };

            while (bar < bars) {

                if (sector == 1 | sector == 4) {
                    currentX -= this.grid.gapX;
                } else {
                    currentX += this.grid.gapX;
                };

                this.drawLine(currentX, top, currentX, bottom, color);

                bar++;
            };
        }

        if (isY) {

            let currentY = vector.y;
            let left = 0;
            let right = vector.x;
            let bar = 0;
            let bars = Math.floor(this.ctx.canvas.height / 2 / this.grid.gapY);

            if (sector == 2 | sector == 3) {
                left = vector.x;
                right = this.ctx.canvas.width;
            };

            while (bar < bars) {

                if (sector == 1 | sector == 2) {
                    currentY -= this.grid.gapY;
                } else {
                    currentY += this.grid.gapY;
                };

                this.drawLine(left, currentY, right, currentY, color);

                bar++;
            };
        }
    }

    drawGrid(vector) {

        //              x   y   legend  inverse
        // LeftTop      -   +   1       3
        // RightTop     +   +   2       4
        // RightBottom  +   -   3       1
        // LeftBottom   -   -   4       2

        if (this.grid.topLeft) {

            this.drawBars(vector, 1, true, true, 'black');

        }

        if (this.grid.topRight) {

            this.drawBars(vector, 2, true, true, 'black');

        }

        if (this.grid.bottomRight) {

            this.drawBars(vector, 3, true, true, 'black');

        }

        if (this.grid.bottomLeft) {

            this.drawBars(vector, 4, true, true, 'black');

        }
    }

    drawVector(vector, isRelative, color = 'black', thickness = 4) {
    
            this.ctx.fillStyle = color;
    
            if (isRelative) {
    
                this.currentVector.x += vector.x;
    
                this.currentVector.y += vector.y;
    
            } else {
    
                this.currentVector.x = vector.x;
    
                this.currentVector.y = vector.y;
    
            }
    
            this.currentVector.x-= thickness;
    
            this.currentVector.y -= thickness;
    
            let thick = thickness * 2;
    
            this.ctx.beginPath();
    
            this.ctx.fillRect(this.currentVector.x, this.currentVector.y, thick, thick);
    }

    drawFunction(vector, current, end, increment, equalize, func) {

        if (current <= end) {
           
            let y = 0;
    
            if (func == 0) {

                y = Math.sin(current * Math.PI / 180) * equalize;
            
            }
            if (func == 1) {

                y = Math.cos(current * Math.PI / 180) * equalize;
           
            }
    
            this.drawVector({x: current, y: y}, true, 'magenta', 1);
    
            current += increment;
    
            this.drawFunction({x: current, y: y}, current, end, increment, equalize, func);
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

synth.setVectorToCenter(synth.currentVector);
synth.drawCoordinateAxes(synth.currentVector);
synth.drawGrid(synth.currentVector);
synth.drawVector(synth.currentVector, false, 'black', 4);
synth.drawFunction(synth.currentVector, 0, 360, 1, 20, 0);