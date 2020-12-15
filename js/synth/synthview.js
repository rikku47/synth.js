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
        this.ctx.canvas.id = 'canvas';
        this.base = {
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

        let inface = document.createElement('div');
        let div = document.createElement('div');

        inface.id = 'interface';
        div.id = 'main';

        this.elements.forEach((element) => {
            div.appendChild(this.createElement(element));
        });

        inface.appendChild(div);

        div = document.createElement('div');

        div.id = 'sub';
        
        inface.appendChild(div);
        
        container.appendChild(inface);

        this.setCanvas(container);

        if (this.centerVector) {
            this.setVectorToCenter(this.base);
        };
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

            vectorForDraw.x = this.base.x + vector.x;

            vectorForDraw.y = this.base.y + vector.y;

        };

        let thick = thickness * 2;

        this.ctx.beginPath();

        this.ctx.fillRect(vectorForDraw.x - thickness, vectorForDraw.y - thickness, thick, thick);
    }

    drawPath(base, coords, color = 'black', lineWidth = 1) {

        this.ctx.beginPath();

        this.ctx.moveTo(base.x, base.y);

        coords.forEach((coord) => {

            this.ctx.strokeStyle = color;

            this.ctx.lineWidth = lineWidth;

            this.ctx.lineTo(coord.x, coord.y);

            this.ctx.stroke();
        });
    }

    drawCoordinateAxes(vector) {

        //Summarize??? rename vector to coord???
        this.drawPath(vector, [{ x: 0, y: vector.y }], 'red', 2);

        this.drawPath(vector, [{ x: this.ctx.canvas.width, y: vector.y }], 'blue', 2);

        this.drawPath(vector, [{ x: vector.x, y: 0 }], 'green', 2);

        this.drawPath(vector, [{ x: vector.x, y: this.ctx.canvas.height }], 'magenta', 2);
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

                    this.drawPath({ x: currentX, y: top }, [{ x: currentX, y: bottom }]);

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

                    this.drawPath({ x: left, y: currentY }, [{ x: right, y: currentY }]);

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

    drawFunction(func) {

        this.drawPath(func.base, func.coords, func.color, func.thickness);
    }

    draw() {

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes(this.base);
        };

        if (this.isGrid) {
            this.drawGrid(this.base);
        };

        this.drawVector(this.base, false);

        model.funcs.forEach((func) => {
            this.drawFunction(func);
        });
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