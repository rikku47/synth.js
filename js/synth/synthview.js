class SynthView {
    constructor(
        container,
        centerVector = true,
        x = 0,
        y = 0,
        isCoordinateAxes = true,
        isGrid = true,
        topLeft = true,
        topRight = true,
        bottomRight = true,
        bottomLeft = true,
        isX = true,
        isY = true,
        gapY = 30,
        gapX = 30
    ) {
        this.ctx = document.createElement('canvas').getContext('2d');
        this.currentVector = {
            x: x,
            y: y
        };
        this.centerVector = centerVector;
        this.isCoordinateAxes = isCoordinateAxes;
        this.isGrid = isGrid;
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

        this.elements = this.TreeOfElements();

        let div = document.createElement('div');

        div.id = 'interface';

        this.elements.forEach((element) => {
            div.appendChild(this.createElement(element));
        });

        container.appendChild(div);

        this.setCanvas(container);

        if (this.centerVector) {
            this.setVectorToCenter(this.currentVector);
        };

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes(this.currentVector);
        };

        if (this.isGrid) {
            this.drawGrid(this.currentVector);
        };

        this.drawVector(this.currentVector, false);

        this.draw();
    };

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

    TreeOfElements() {
        return [
            {
                id: 'h1',
                element: 'h1',
                attributes: [],
                funcs: [],
                container: false,
                text: 'Synth'
            },
            {
                id: 'h2',
                element: 'h2',
                attributes: [],
                funcs: [],
                container: false,
                text: 'Synth options'
            },
            {
                id: 'lblX',
                element: 'label',
                for: 'x',
                text: 'X'
            },
            {
                id: 'x',
                element: 'input',
                type: 'number',
                attributes: [['placeholder', 0]],
                name: 'x',
                funcs: [],
                container: false,
                connect: []
            },
            {
                id: 'lblY',
                element: 'label',
                for: 'y',
                text: 'Y'
            },
            {
                id: 'y',
                element: 'input',
                type: 'number',
                attributes: [['placeholder', 0]],
                name: 'y',
                funcs: [],
                container: false,
                connect: []
            },
            {
                id: 'lblThickness',
                element: 'label',
                for: 'thickness',
                text: 'Dicke'
            },
            {
                id: 'thickness',
                element: 'input',
                type: 'number',
                attributes: [['placeholder', 0]],
                name: 'thickness',
                funcs: [],
                container: false,
                connect: []
            },
            {
                id: 'lblXValue',
                element: 'label',
                for: 'xvalue',
                text: 'X Wert'
            },
            {
                id: 'number',
                element: 'input',
                type: 'number',
                attributes: [['min', '0'], ['max', '360'], ['step', '1'], ['value', '0']],
                name: 'xvalue',
                funcs: [],
                container: false,
                connect: []
            },
            {
                id: 'lblXSlider',
                element: 'label',
                for: 'xslider',
                text: 'X Schieberegler'
            },
            {
                id: 'range',
                element: 'input',
                type: 'range',
                attributes: [['min', '0'], ['max', '360'], ['step', '1'], ['value', '0']],
                name: 'xslider',
                funcs: [],
                container: false,
                connect: []
            },
            {
                id: 'lblGrid',
                element: 'label',
                for: 'grid',
                text: 'Raster'
            },
            {
                id: 'chkGrid',
                element: 'input',
                type: 'checkbox',
                attributes: [],
                name: 'grid',
                funcs: []
            }
        ];
    }

    createElement(element) {

        switch (element.element) {

            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':

                return createHeadingElement(element);

            case 'div':

                return createDivElement(element);

            case 'button':

                break;

            case 'datalist':

                break;

            case 'fieldset':

                break;

            case 'form':

                break;

            case 'input':

                return createInputElement(element);

            case 'label':

                return createLabelElement(element);

            case 'legend':

                break;

            case 'optgroup':

                break;

            case 'option':

                break;

            case 'output':

                break;

            case 'select':

                break;

            case 'textarea':

                break;

        };
    }

    setCanvas(container) {

        this.ctx.canvas.width = container.clientWidth;

        this.ctx.canvas.height = container.clientHeight;

        container.appendChild(this.ctx.canvas);
    }

    resetCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    setVectorToCenter(vector) {
        vector.x = this.ctx.canvas.width / 2;
        vector.y = this.ctx.canvas.height / 2;
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

    drawBars(sector, vector) {

        if (sector != undefined) {

            if (this.grid.isX) {

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

                    this.drawLine(currentX, top, currentX, bottom);

                    bar++;
                };
            }

            if (this.grid.isY) {

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

                    this.drawLine(left, currentY, right, currentY);

                    bar++;
                };
            }
        }
    }

    drawGrid(vector) {

        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3

        if (this.grid.topLeft) {

            this.drawBars(1, vector);

        };

        if (this.grid.topRight) {

            this.drawBars(2, vector);

        };

        if (this.grid.bottomRight) {

            this.drawBars(3, vector);

        };

        if (this.grid.bottomLeft) {

            this.drawBars(4, vector);

        };
    }

    drawFunction(func, current, end, increment, equalize, isRealtive, color, thickness) {

        if (func.current <= func.end) {

            let y = 0;

            if (func.id == 0) {

                y = Math.sin(func.current * Math.PI / 180) * func.equalize;

            };

            if (func.id == 1) {

                y = Math.cos(func.current * Math.PI / 180) * func.equalize;

            };

            // if (func == 2) {

            //     let sineVal = Math.sin(current * Math.PI / 180);

            //     if (sineVal == 0 || sineVal == -1 || sineVal == 1) {

            //         this.amplitude = sineVal;

            //     };

            //     y = this.amplitude * equalize;

                // if (current % 90 == 0) {

                //     y = Math.sin(current * Math.PI / 180) * equalize;

                // };

                // increment = 90;

            // };

            // if (func == 3) {

            //     let coSineVal = Math.cos(current * Math.PI / 180);

            //     if (coSineVal == 0 || coSineVal == -1 || coSineVal == 1) {

            //         this.amplitude = coSineVal;

            //         this.drawLine();
            //     };

            //     y = this.amplitude * equalize;

                // if (current % 90 == 0) {

                //     y = Math.cose(current * Math.PI / 180) * equalize;

                // };

                // increment = 90;

            // };

            this.drawVector({ x: current, y: y }, isRealtive, color, thickness);

            current += increment;

            this.drawFunction(func, current, end, increment, equalize, isRealtive, color, thickness);

        }
    }

    draw() {
        let model = new SynthModel(this.currentVector.x, this.currentVector.y);

        model.funcs.forEach((func) => {
            this.drawFunction(func);
        });
    }

    reDraw(value) {

        this.resetCanvas();

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes(this.currentVector);
        };

        if (this.isGrid) {
            this.drawGrid(this.currentVector);
        };

        let newValue = Number(value);

        this.drawVector(this.currentVector, false, 'black', newValue);

        // this.drawFunction(0, 0, end, 1, synth.grid.gapY * 3, true, 'magenta', 2);
        // this.drawFunction(1, 0, end, 1, synth.grid.gapY * 3, true, 'magenta', 2);
        // this.drawFunction(2, 0, end, 1, synth.grid.gapY * 3, true, 'green', 2);
        // this.drawFunction(3, 0, end, 1, synth.grid.gapY * 3, true, 'red', 2);
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