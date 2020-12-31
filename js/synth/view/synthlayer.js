class SynthLayer {
    //#endregion
    constructor(container, x = 0, y = 0, isCenterCoordinate = true, isCoordinateAxes = true, isGrid = true, topLeft = true, topRight = true, bottomRight = true, bottomLeft = true, gapX = 30, gapY = 30) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.isCenterCoordinate = isCenterCoordinate;
        this.isCoordinateAxes = isCoordinateAxes;
        this.isGrid = isGrid;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomRight = bottomRight;
        this.bottomLeft = bottomLeft;
        this.gapX = gapX;
        this.gapY = gapY;
        this.createLayer('layer0');
        this.pointGroups = [];
    }
    //#endregion
    //#region Getter Setter
    get bottomLeft() {
        return this._bottomLeft;
    }
    set bottomLeft(value) {
        this._bottomLeft = value;
    }
    get bottomRight() {
        return this._bottomRight;
    }
    set bottomRight(value) {
        this._bottomRight = value;
    }
    get isCenterCoordinate() {
        return this._centerCoordinate;
    }
    set isCenterCoordinate(value) {
        this._centerCoordinate = value;
    }
    get container() {
        return this._container;
    }
    set container(value) {
        this._container = value;
    }
    get gapX() {
        return this._gapX;
    }
    set gapX(value) {
        this._gapX = value;
    }
    get gapY() {
        return this._gapY;
    }
    set gapY(value) {
        this._gapY = value;
    }
    get isCoordinateAxes() {
        return this._isCoordinateAxes;
    }
    set isCoordinateAxes(value) {
        this._isCoordinateAxes = value;
    }
    get isGrid() {
        return this._isGrid;
    }
    set isGrid(value) {
        this._isGrid = value;
    }
    get isX() {
        return this._isX;
    }
    set isX(value) {
        this._isX = value;
    }
    get isY() {
        return this._isY;
    }
    set isY(value) {
        this._isY = value;
    }
    get topLeft() {
        return this._topLeft;
    }
    set topLeft(value) {
        this._topLeft = value;
    }
    get topRight() {
        return this._topRight;
    }
    set topRight(value) {
        this._topRight = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
    }
    get pointGroups() {
        return this._paths;
    }
    set pointGroups(value) {
        this._paths = value;
    }
    createLayer(id) {
        this.layer = document.createElement('canvas').getContext('2d');
        this.layer.canvas.id = id;
    }
    setLayer() {
        this.layer.canvas.width = this.container.clientWidth;
        this.layer.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.layer.canvas);
    }
    resetLayer() {
        this.layer.clearRect(0, 0, this.layer.canvas.width, this.layer.canvas.height);
    }
    centerCoordinate() {
        this.x = this.layer.canvas.clientWidth / 2;
        this.y = this.layer.canvas.clientHeight / 2;
    }
    drawCoordinateAxes() {
        this.pointGroups.push({
            connectToBase: true,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: 0,
                    y: this.y
                }],
            color: 'red',
            width: 2
        });
        this.pointGroups.push({
            connectToBase: true,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.x,
                    y: 0
                }],
            color: 'blue',
            width: 2
        });
        this.pointGroups.push({
            connectToBase: true,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.layer.canvas.width,
                    y: this.y
                }],
            color: 'blue',
            width: 2
        });
        this.pointGroups.push({
            connectToBase: true,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.x,
                    y: this.layer.canvas.height
                }],
            color: 'red',
            width: 2
        });
        this.drawPaths();
    }
    drawBarsVertical(width, height) {
        let cl = [];
        let current = this.x;
        let floor = 0;
        let roof = 0;
        let left = true;
        let right = true;
        ({ height, width } = this.setWidthAndHeight(height, width));
        if (left) {
            while (current >= (this.x - width + this.gapX)) {
                current -= this.gapX;
                cl.push({
                    x: current,
                    y: floor
                });
            }
        }
        if (right) {
            while (current <= (this.x + width - this.gapX)) {
                current += this.gapX;
                cl.push({
                    x: current,
                    y: floor
                });
            }
        }
        this.pointGroups.push({
            connectToBase: false,
            base: {
                x: this.x,
                y: this.y,
            },
            points: cl,
            color: 'black',
            width: 1
        });
        this.drawPaths();
    }
    ;
    drawBarsHorizontal(width, height) {
        let cl;
        let current = this.y;
        let right = 0;
        let left = 0;
        let gap = this.gapY;
        let top = true;
        let down = true;
        ({ height, width } = this.setWidthAndHeight(height, width));
        if (top) {
            while (current >= (this.y - height + this.gapY)) {
                current -= this.gapY;
                cl.push(current);
            }
        }
        if (down) {
            while (current <= (this.y + height - this.gapY)) {
                current += this.gapX;
                cl.push(current);
            }
        }
        cl.forEach((y) => {
            this.createPath();
        });
    }
    ;
    setWidthAndHeight(height, width) {
        if (height == 'max') {
            height = this.y;
        }
        if (width == 'max') {
            width = this.x;
        }
        width = Number(width);
        height = Number(height);
        return { height, width };
    }
    drawGrid() {
        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3
        if (this.topLeft) {
            this.drawBarsVertical('max', 'max');
            // this.drawBarsHorizontal('max', 'max')
        }
        if (this.topRight) {
            this.drawBarsVertical('max', 'max');
            // this.drawBarsHorizontal('max', 'max')
        }
        if (this.bottomRight) {
            this.drawBarsVertical('max', 'max');
            // this.drawBarsHorizontal('max', 'max')
        }
        if (this.bottomLeft) {
            this.drawBarsVertical('max', 'max');
            // this.drawBarsHorizontal('max', 'max')
        }
    }
    drawPaths() {
        this.pointGroups.forEach((path) => {
            this.layer.beginPath();
            if (path.connectToBase) {
                this.layer.moveTo(path.base.x, path.base.y);
            }
            this.layer.strokeStyle = path.color;
            this.layer.lineWidth = path.lineWidth;
            path.points.forEach((point) => {
                this.layer.lineTo(point.x, point.y);
            });
            this.layer.stroke();
        });
    }
    draw() {
        this.setLayer();
        if (this.isCenterCoordinate) {
            this.centerCoordinate();
        }
        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes();
        }
        if (this.isGrid) {
            // this.drawGrid();
        }
    }
    createPath() {
    }
    swapVariables() {
    }
    syncToBase() {
    }
}
