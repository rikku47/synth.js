class SynthLayer {
    //#endregion
    constructor(container, x = 0, y = 0, isCenterCoordinate = true, isCoordinateAxes = true, isGrid = true, northWest = true, northEast = true, southEast = true, southWest = true, gapX = 30, gapY = 30) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.isCenterCoordinate = isCenterCoordinate;
        this.isCoordinateAxes = isCoordinateAxes;
        this.isGrid = isGrid;
        this.northWest = northWest;
        this.northEast = northEast;
        this.southEast = southEast;
        this.southWest = southWest;
        this.gapX = gapX;
        this.gapY = gapY;
        this.createLayer('layer0');
        this.pointGroups = [];
    }
    //#endregion
    //#region Getter Setter
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
    get northWest() {
        return this._northWest;
    }
    set northWest(value) {
        this._northWest = value;
    }
    get northEast() {
        return this._northEast;
    }
    set northEast(value) {
        this._northEast = value;
    }
    get southWest() {
        return this._southWest;
    }
    set southWest(value) {
        this._southWest = value;
    }
    get southEast() {
        return this._southEast;
    }
    set southEast(value) {
        this._southEast = value;
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
            isDraw: false,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: 0,
                    y: this.y
                }],
            color: 'red',
            width: 8
        });
        this.pointGroups.push({
            connectToBase: true,
            isDraw: false,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.x,
                    y: 0
                }],
            color: 'blue',
            width: 4
        });
        this.pointGroups.push({
            connectToBase: true,
            isDraw: false,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.layer.canvas.width,
                    y: this.y
                }],
            color: 'blue',
            width: 4
        });
        this.pointGroups.push({
            connectToBase: true,
            isDraw: false,
            base: {
                x: this.x,
                y: this.y,
            },
            points: [{
                    x: this.x,
                    y: this.layer.canvas.height
                }],
            color: 'red',
            width: 4
        });
        this.drawPaths();
    }
    drawBarsVerticalNorthWest(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.x;
        let floor = this.y;
        let roof = floor - height;
        while (current >= (this.x - width + this.gapX)) {
            current -= this.gapX;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: current,
                    y: floor,
                },
                points: [{
                        x: current,
                        y: roof
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsVerticalNorthEast(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.x;
        let floor = this.y;
        let roof = floor - height;
        while (current <= (this.x + width - this.gapX)) {
            current += this.gapX;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: current,
                    y: floor,
                },
                points: [{
                        x: current,
                        y: roof
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsVerticalSouthEast(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.x;
        let floor = this.y;
        let roof = floor + height;
        while (current <= (this.x + width - this.gapX)) {
            current += this.gapX;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: current,
                    y: floor,
                },
                points: [{
                        x: current,
                        y: roof
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsVerticalSouthWest(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.x;
        let floor = this.y;
        let roof = floor + height;
        while (current >= (this.x - width + this.gapX)) {
            current -= this.gapX;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: current,
                    y: floor,
                },
                points: [{
                        x: current,
                        y: roof
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsHorizontalNorthWest(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.y;
        let right = this.x;
        let left = this.x - width;
        while (current >= (this.y - height + this.gapY)) {
            current -= this.gapY;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: right,
                    y: current,
                },
                points: [{
                        x: left,
                        y: current
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsHorizontalNorthEast(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.y;
        let right = this.x + width;
        let left = this.x;
        while (current >= (this.y - height + this.gapY)) {
            current -= this.gapY;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: right,
                    y: current,
                },
                points: [{
                        x: left,
                        y: current
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsHorizontalSouthEast(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.y;
        let right = this.x + width;
        let left = this.x;
        while (current <= (this.y + height - this.gapY)) {
            current += this.gapY;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: right,
                    y: current,
                },
                points: [{
                        x: left,
                        y: current
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
    drawBarsHorizontalSouthWest(width, height) {
        ({ height, width } = this.setWidthAndHeight(height, width));
        let current = this.y;
        let right = this.x;
        let left = this.x - width;
        while (current <= (this.y + height - this.gapY)) {
            current += this.gapY;
            this.pointGroups.push({
                connectToBase: true,
                isDraw: false,
                base: {
                    x: right,
                    y: current,
                },
                points: [{
                        x: left,
                        y: current
                    }],
                color: 'black',
                width: 1
            });
        }
        this.drawPaths();
    }
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
        if (this.northWest) {
            this.drawBarsVerticalNorthWest('max', 'max');
            this.drawBarsHorizontalNorthWest('max', 'max');
        }
        if (this.northEast) {
            this.drawBarsVerticalNorthEast('max', 'max');
            this.drawBarsHorizontalNorthEast('max', 'max');
        }
        if (this.southEast) {
            this.drawBarsVerticalSouthEast('max', 'max');
            this.drawBarsHorizontalSouthEast('max', 'max');
        }
        if (this.southWest) {
            this.drawBarsVerticalSouthWest('max', 'max');
            this.drawBarsHorizontalSouthWest('max', 'max');
        }
    }
    drawPaths() {
        this.pointGroups.forEach((path) => {
            if (!path.isDraw) {
                this.layer.beginPath();
                if (path.connectToBase) {
                    this.layer.moveTo(path.base.x, path.base.y);
                }
                this.layer.strokeStyle = path.color;
                this.layer.lineWidth = path.width;
                path.points.forEach((point) => {
                    this.layer.lineTo(point.x, point.y);
                });
                this.layer.stroke();
                path.isDraw = true;
            }
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
            this.drawGrid();
        }
    }
    createPath() {
    }
    swapVariables() {
    }
    syncToBase() {
    }
}
