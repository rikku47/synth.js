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

        container.appendChild(this.elements);

        this.setCanvas(container);

        this.borderLeft = 0;
        this.borderRight = this.ctx.canvas.width;
        this.borderTop = 0;
        this.borderBottom = this.ctx.canvas.height;

        if (this.centerVector) {
            this.setVectorToCenter(this.base);
        };
    };

    //#region Getter Setter

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

    //#endregion

    TreeOfElements() {
        let tree = [{
                element: 'ul',
                css: ['menu'],
                children: [{
                        element: 'li',
                        css: ['menu-item'],
                        children: [{
                            element: 'a',
                            text: 'main'
                        }]
                    },
                    {
                        element: 'li',
                        css: ['menu-item'],
                        children: [{
                            element: 'a',
                            text: 'sub'
                        }]
                    }
                ]
            },
            {
                element: 'div',
                attributes: [],
                name: 'first',
                funcs: [],
                css: ['content-container'],
                children: [{
                        element: 'h1',
                        attributes: [],
                        funcs: [],
                        text: 'synth.js'
                    },
                    {
                        element: 'h2',
                        attributes: [],
                        funcs: [],
                        text: 'options'
                    },
                    {
                        element: 'label',
                        for: 'functions',
                        text: 'functions'
                    },
                    {
                        element: 'select',
                        options: [{
                                element: 'option',
                                id: 'sine',
                                value: 'sin',
                                text: 'SineWave'
                            },
                            {
                                element: 'option',
                                id: 'cosine',
                                value: 'cosin',
                                text: 'CoSineWave'
                            }
                        ],
                        name: 'functions',
                        funcs: [
                            ['change', updateFunction]
                        ]
                    },
                    {
                        element: 'label',
                        for: 'equalize',
                        text: 'equalize'
                    },
                    {
                        id: 'equalize',
                        element: 'input',
                        type: 'range',
                        name: 'equalize',
                        value: 90,
                        attributes: [
                            ['min', '0'],
                            ['max', '360'],
                            ['step', '1']
                        ],
                        funcs: [
                            ['input', updateEqualize]
                        ]
                    },
                    {
                        element: 'label',
                        for: 'gap',
                        text: 'gap'
                    },
                    {
                        id: 'gap',
                        element: 'input',
                        type: 'range',
                        name: 'gap',
                        value: 30,
                        attributes: [
                            ['min', '0'],
                            ['max', '360'],
                            ['step', '1']
                        ],
                        funcs: [
                            ['input', updateGap]
                        ]
                    },
                    {
                        element: 'label',
                        for: 'animation',
                        text: 'animation'
                    },
                    {
                        id: 'animation',
                        element: 'input',
                        type: 'range',
                        name: 'animation',
                        value: 360,
                        attributes: [
                            ['min', '0'],
                            ['max', '360'],
                            ['step', '1']
                        ],
                        funcs: [
                            ['input', updateAnimation]
                        ]
                    }
                ]
            }
        ];

        let root = document.createElement('div');

        root.id = 'interface';

        tree.forEach((child) => {
            root.appendChild(this.child(child));
        });

        return root;
    };

    child(child) {

        let elem = this.createElement(child);

        if (
            child.children != undefined &&
            child.children.length > 0
        ) {
            child.children.forEach((child) => {
                elem.appendChild(this.child(child));
            });
        };

        return elem;
    };

    createElement(element) {

        switch (element.element) {

            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':

                return createHTMLHeadingElement(element);

            case 'a':

                return createHTMLAnchorElement(element);

            case 'div':

                return createHTMLDivElement(element);

            case 'ul':

                return createHTMLUlElement(element);

            case 'li':

                return createHTMLLiElement(element);

            case 'button':

                return createHTMLButtonElement(element);

            case 'datalist':

                return createHTMLDataListElement(element);

            case 'fieldset':

                return createHTMLFieldSetElement(element);

            case 'form':

                return createHTMLFormElement(element);

            case 'input':

                return createHTMLInputElement(element);

            case 'label':

                return createHTMLLabelElement(element);

            case 'legend':

                return createHTMLLegendElement(element);

            case 'optgroup':

                return createHTMLOptGroupElement(element);

            case 'option':

                return createHTMLOptionElement(element);

            case 'output':

                return createHTMLOutputElement(element);

            case 'select':

                return createHTMLSelectElement(element);

            case 'textarea':

                return createHTMLTextAreaElement(element);

        };
    };

    //#region Functions

    setCanvas(container) {

        this.ctx.canvas.width = container.clientWidth;

        this.ctx.canvas.height = container.clientHeight;

        container.appendChild(this.ctx.canvas);
    };

    resetCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    };

    setVectorToCenter(vector) {
        vector.x = this.borderRight / 2;
        vector.y = this.borderBottom / 2;
    };

    drawVector(vector, isRelative = true, color = 'black', thickness = 1) {

        this.ctx.fillStyle = color;

        let vectorForDraw = {
            x: vector.x,
            y: vector.y
        };

        if (isRelative) {

            vectorForDraw.x = this.base.x + vector.x;

            vectorForDraw.y = this.base.y + vector.y;

        };

        let thick = thickness * 2;

        this.ctx.beginPath();

        this.ctx.fillRect(vectorForDraw.x - thickness, vectorForDraw.y - thickness, thick, thick);
    };

    drawPath(base, coords, color = 'black', lineWidth = 1) {

        this.ctx.beginPath();

        this.ctx.moveTo(base.x, base.y);

        coords.forEach((coord) => {

            this.ctx.strokeStyle = color;

            this.ctx.lineWidth = lineWidth;

            this.ctx.lineTo(coord.x, coord.y);

            this.ctx.stroke();
        });
    };

    drawCoordinateAxes(vector) {

        //Summarize. rename vector to coord.

        let paths = [{
            base: vector,
            path: [{
                x: this.borderLeft,
                y: vector.y
            }],
            color: 'red',
            width: 2
        }, {
            base: vector,
            path: [{
                x: vector.x,
                y: this.borderTop
            }],
            color: 'blue',
            width: 2
        }, {
            base: vector,
            path: [{
                x: this.borderRight,
                y: vector.y
            }],
            color: 'blue',
            width: 2
        }, {
            base: vector,
            path: [{
                x: vector.x,
                y: this.borderBottom
            }],
            color: 'red',
            width: 2
        }];

        paths.forEach((path) => {
            this.drawPath(path.base, path.path, path.color, path.width);
        });
    };

    drawBarsVertical(vector, width, height, gap) {

        let bars = Math.floor((vector.x + width) / gap);
        let current = vector.x + gap;
        let floor = vector.y;
        let roof = vector.y + height;

        while (bars > 0) {

            this.drawPath({
                x: current,
                y: floor
            }, [{
                x: current,
                y: roof
            }]);

            current += gap;
            bars--;
        };
    };

    drawGrid(vector) {

        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3

        if (this.grid.topLeft) {

            this.drawBarsVertical(vector, 0, -vector.y, -this.gapX);

        };

        if (this.grid.topRight) {

            // this.drawBarsVertical(vector, vector.x, -vector.y, -this.gapX);

        };

        if (this.grid.bottomRight) {

            // this.drawBars(3, vector);

        };

        if (this.grid.bottomLeft) {

            // this.drawBars(4, vector);

        };
    };

    draw() {

        this.resetCanvas();

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes(this.base);
        };

        if (this.isGrid) {
            this.drawGrid(this.base);
        };

        // this.drawVector(this.base, false);
    };

    parseNoteValues() {
        return JSON.parse('notevalues.js');
    };

    //#endregion
}