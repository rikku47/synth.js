class SynthLayer {
    //#endregion
    constructor(container, x = 0, y = 0, isCenterCoordinate = true, isCoordinateAxes = true) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.isCenterCoordinate = isCenterCoordinate;
        this.isCoordinateAxes = isCoordinateAxes;
        this.createLayer('layer0');
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
    get paths() {
        return this._paths;
    }
    set paths(value) {
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
        this.paths = [{
                base: {
                    x: this.x,
                    y: this.y
                },
                pathPoints: [{
                        x: 0,
                        y: this.y
                    }],
                color: 'red',
                width: 2
            }, {
                base: {
                    x: this.x,
                    y: this.y
                },
                pathPoints: [{
                        x: this.x,
                        y: 0
                    }],
                color: 'blue',
                width: 2
            }, {
                base: {
                    x: this.x,
                    y: this.y
                },
                pathPoints: [{
                        x: this.layer.canvas.width,
                        y: this.y
                    }],
                color: 'blue',
                width: 2
            }, {
                base: {
                    x: this.x,
                    y: this.y
                },
                pathPoints: [{
                        x: this.x,
                        y: this.layer.canvas.height
                    }],
                color: 'red',
                width: 2
            }];
        this.drawPaths();
    }
    drawPaths() {
        this.paths.forEach((path) => {
            this.layer.beginPath();
            this.layer.moveTo(path.base.x, path.base.y);
            this.layer.strokeStyle = path.color;
            this.layer.lineWidth = path.lineWidth;
            path.pathPoints.forEach(point => {
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
        }
    }
    createPath() {
    }
    swapVariables() {
    }
    syncToBase() {
    }
}
