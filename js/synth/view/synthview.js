class SynthView {
    constructor(
        container,
        centerBase = true,
        x = 0,
        y = 0,
        activateCoordinateAxes = true,
        activateGrid = true,
        topLeft = true,
        topRight = true,
        bottomRight = true,
        bottomLeft = true,
        isX = true,
        isY = true,
        gapY = 30,
        gapX = 30
    ) {
        this.container = container;
        this.layer = {
            ctx: this.createLayer('canvas'),
            base: {
                x: x,
                y: y
            },
            centerBase: centerBase,
            activateCoordinateAxes: activateCoordinateAxes,
            activateGrid: activateGrid,
            gridProperties: {
                topLeft: topLeft,
                topRight: topRight,
                bottomRight: bottomRight,
                bottomLeft: bottomLeft,
                isX: isX,
                isY: isY,
                gapY: gapY,
                gapX: gapX,
                color: 'black'
            }
        };

        this.layers = [this.layer];

        this.elements = this.TreeOfElements();

        container.appendChild(this.elements);

        // this.borderLeft = 0;
        // this.borderRight = this.ctx.canvas.width;
        // this.borderTop = 0;
        // this.borderBottom = this.ctx.canvas.height;

        // if (this.centerVector) {
        //     this.setVectorToCenter(this.base);
        // };
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

    setLayer(layer, container) {

        layer.ctx.canvas.width = container.clientWidth;

        layer.ctx.canvas.height = container.clientHeight;

        container.appendChild(layer.ctx.canvas);
    };

    resetLayer(layer) {
        layer.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
    };

    centerBase(layer) {
        layer.base.x = layer.ctx.canvas.clientWidth / 2;
        layer.base.y = layer.ctx.canvas.clientHeight / 2;
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

    drawBarsVertical(vector, width, height, gap, corner) {

        let xS = [];
        let current = vector.x;

        if (height == 'max') {
            height = vector.y;
        };

        if (width == 'max') {
            width = vector.x;
        };

        let floor = 0;
        let roof = 0;

        if (corner == 0 || corner == 1) {
            floor = vector.y;
            roof = vector.y - height;
        } else {
            floor = vector.y + height;
            roof = vector.y;
        };

        if (corner == 0 || corner == 3) {
            gap = gap * -1;
        };

        while (current <= vector.x + width &&
            current >= vector.x - width) {
            current += gap;
            xS.push(current);
        };

        xS.forEach((x) => {
            this.drawPath({
                x: x,
                y: floor
            }, [{
                x: x,
                y: roof
            }]);
        });
    };

    drawBarsHorizontal(vector, width, height, gap, corner) {

        let yS = [];
        let current = vector.y;

        if (height == 'max') {
            height = vector.y;
        };

        if (width == 'max') {
            width = vector.x;
        };

        let right = 0;
        let left = 0;

        if (corner == 0 || corner == 3) {
            right = vector.x;
            left = vector.x - width;
        } else {
            right = vector.x + width;
            left = vector.x;
        };

        if (corner == 0 || corner == 1) {
            gap = gap * -1;
        };

        while (current <= vector.y + height &&
            current >= vector.y - height) {
            current += gap;
            yS.push(current);
        };

        yS.forEach((y) => {
            this.drawPath({
                x: right,
                y: y
            }, [{
                x: left,
                y: y
            }]);
        });
    };

    drawGrid(vector) {

        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3

        if (this.grid.topLeft) {

            this.drawBarsVertical(vector, 'max', 'max', this.gapX, 0);
            this.drawBarsHorizontal(vector, 'max', 'max', this.gapY, 0);

        };

        if (this.grid.topRight) {

            this.drawBarsVertical(vector, 'max', 'max', this.gapX, 1);
            this.drawBarsHorizontal(vector, 'max', 'max', this.gapY, 1);
        };

        if (this.grid.bottomRight) {

            this.drawBarsVertical(vector, 'max', 'max', this.gapX, 2);
            this.drawBarsHorizontal(vector, 'max', 'max', this.gapY, 2);

        };

        if (this.grid.bottomLeft) {

            this.drawBarsVertical(vector, 'max', 'max', this.gapX, 3);
            this.drawBarsHorizontal(vector, 'max', 'max', this.gapY, 3);

        };
    };

    createLayer(id) {
        let layer = document.createElement('canvas').getContext('2d');
        layer.canvas.id = id;
        return layer;
    };

    drawBaseLayer() {

        this.setLayer(this.layers[0], this.container);

        if (this.layers[0].centerBase) {
            this.centerBase(this.layers[0]);
        };

        if (this.layers[0].activateGrid) {
            this.drawCoordinateAxes(this.layers[0].base);
        };

        // if (this.isGrid) {
        //     this.drawGrid(this.base);
        // };

        // this.drawVector(this.base, false);
    };

    draw() {

        this.drawBaseLayer();

    };

    parseNoteValues() {
        return JSON.parse('notevalues.js');
    };

    //#endregion
}