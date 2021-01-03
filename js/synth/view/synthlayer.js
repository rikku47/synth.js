class SynthLayer {
    //#endregion
    constructor(container, gridNorthWest = true, gridNorthEast = true, gridSouthEast = true, gridSouthWest = true, gapX = 30, gapY = 30) {
        this.container = container;
        this.gridNorthWest = gridNorthWest;
        this.gridNorthEast = gridNorthEast;
        this.gridSouthEast = gridSouthEast;
        this.gridSouthWest = gridSouthWest;
        this.gapX = gapX;
        this.gapY = gapY;
        this.GroupsOfPoints = [];
        this.coordinateAxes = [];
        this.grid = {
            northWest: [],
            northEast: [],
            southEast: [],
            southWest: []
        };
        this.createLayer('layer0');
        this.setLayer();
    }
    //#endregion
    //#region Getter Setter
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
    get gridNorthWest() {
        return this._gridNorthWest;
    }
    set gridNorthWest(value) {
        this._gridNorthWest = value;
    }
    get gridNorthEast() {
        return this._gridNorthEast;
    }
    set gridNorthEast(value) {
        this._gridNorthEast = value;
    }
    get gridSouthWest() {
        return this._gridSouthWest;
    }
    set gridSouthWest(value) {
        this._gridSouthWest = value;
    }
    get gridSouthEast() {
        return this._gridSouthEast;
    }
    set gridSouthEast(value) {
        this._gridSouthEast = value;
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
    }
    get grid() {
        return this._grid;
    }
    set grid(value) {
        this._grid = value;
    }
    get coordinateAxes() {
        return this._coordinateAxes;
    }
    set coordinateAxes(value) {
        this._coordinateAxes = value;
    }
    get GroupsOfPoints() {
        return this._paths;
    }
    set GroupsOfPoints(value) {
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
    centerBase(path) {
        path.base.x = this.getHalfX();
        path.base.y = this.getHalfY();
    }
    getHalfX() {
        return this.layer.canvas.clientWidth / 2;
    }
    getHalfY() {
        return this.layer.canvas.clientHeight / 2;
    }
    getFullX() {
        return this.layer.canvas.clientWidth;
    }
    getFullY() {
        return this.layer.canvas.clientHeight;
    }
    drawCoordinateAxes() {
        let x = 0;
        let y = 0;
        let color = 'red';
        let width = 2;
        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, [0, 'half'], false, false, true, color, width));
        }
        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 'full'], false, false, true, color, width));
        }
        color = 'blue';
        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 0], false, false, true, color, width));
        }
        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['full', 'half'], false, false, true, color, width));
        }
        if (true || true || true || true) {
            this.drawPaths(this.coordinateAxes);
        }
    }
    drawGrid() {
        //              x   y   legend  inverse index
        // northWest    -   +   1       3       0
        // northEast    +   +   2       4       1
        // southEast    +   -   3       1       2
        // southWest    -   -   4       2       3
        let numberOfPointGroupsX = 0;
        let numberOfPointGroupsY = 0;
        if (true) {
            numberOfPointGroupsX = (Math.floor(this.getHalfX() / this.gapX));
        }
        if (true) {
            numberOfPointGroupsY = (Math.floor(this.getHalfY() / this.gapY));
        }
        if (numberOfPointGroupsY > 0) {
            this.gridNorthWestHorizontal(numberOfPointGroupsY);
            this.gridNorthEastHorizontal(numberOfPointGroupsY);
            this.gridSouthEastHorizontal(numberOfPointGroupsY);
            this.gridSouthWestHorizontal(numberOfPointGroupsY);
        }
        if (numberOfPointGroupsX > 0) {
            this.gridNorthWestVertical(numberOfPointGroupsX);
            this.gridSouthEastVertical(numberOfPointGroupsX);
            this.gridSouthWestVertical(numberOfPointGroupsX);
            this.gridNorthEastVertical(numberOfPointGroupsX);
        }
    }
    gridNorthWestHorizontal(numberOfPointGroupsY) {
        let y = this.getHalfY();
        let color = 'black';
        let width = 1;
        let left = 0;
        let right = this.getHalfX();
        let counter = 0;
        while (counter <= numberOfPointGroupsY) {
            y -= this.gapY;
            this.grid.northWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.northWest);
    }
    gridNorthEastHorizontal(numberOfPointGroupsY) {
        let y = this.getHalfY();
        let color = 'black';
        let width = 1;
        let left = this.getHalfX();
        let right = this.getFullX();
        let counter = 0;
        while (counter <= numberOfPointGroupsY) {
            y -= this.gapY;
            this.grid.northEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.northEast);
    }
    gridSouthEastHorizontal(numberOfPointGroupsY) {
        let y = this.getHalfY();
        let color = 'black';
        let width = 1;
        let left = this.getHalfX();
        let right = this.getFullX();
        let counter = 0;
        while (counter <= numberOfPointGroupsY) {
            y += this.gapY;
            this.grid.southEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.southEast);
    }
    gridSouthWestHorizontal(numberOfPointGroupsY) {
        let y = this.getHalfY();
        let color = 'black';
        let width = 1;
        let left = 0;
        let right = this.getHalfX();
        let counter = 0;
        while (counter <= numberOfPointGroupsY) {
            y += this.gapY;
            this.grid.southWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.southWest);
    }
    gridNorthWestVertical(numberOfPointGroupsX) {
        let x = this.getHalfX();
        let color = 'black';
        let width = 1;
        let top = 0;
        let bottom = this.getHalfY();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x -= this.gapX;
            this.grid.northWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.northWest);
    }
    gridNorthEastVertical(numberOfPointGroupsX) {
        let x = this.getHalfX();
        let color = 'black';
        let width = 1;
        let top = 0;
        let bottom = this.getHalfY();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x += this.gapX;
            this.grid.northEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.northEast);
    }
    gridSouthEastVertical(numberOfPointGroupsX) {
        let x = this.getHalfX();
        let color = 'black';
        let width = 1;
        let top = this.getHalfY();
        let bottom = this.getFullY();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x += this.gapX;
            this.grid.southEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.southEast);
    }
    gridSouthWestVertical(numberOfPointGroupsX) {
        let x = this.getHalfX();
        let color = 'black';
        let width = 1;
        let top = this.getHalfY();
        let bottom = this.getFullY();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x -= this.gapX;
            this.grid.southWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width));
            counter++;
        }
        this.drawPaths(this.grid.southWest);
    }
    drawPaths(GroupsOfPoints) {
        GroupsOfPoints.forEach((path) => {
            if (!path.isDraw) {
                this.layer.beginPath();
                if (path.centerBase) {
                    this.centerBase(path);
                }
                if (path.connectToBase) {
                    this.layer.moveTo(path.base.x, path.base.y);
                }
                this.layer.strokeStyle = path.color;
                this.layer.lineWidth = path.width;
                path.points.forEach((point) => {
                    let x = 0;
                    let y = 0;
                    if (point.x == 'half') {
                        x = this.getHalfX();
                    }
                    else if (point.x == 'full') {
                        x = this.getFullX();
                    }
                    else {
                        x = point.x;
                    }
                    if (point.y == 'half') {
                        y = this.getHalfY();
                    }
                    else if (point.y == 'full') {
                        y = this.getFullY();
                    }
                    else {
                        y = point.y;
                    }
                    if (path.addToBase) {
                        this.layer.lineTo(path.base.x + x, path.base.y + y);
                    }
                    else if (path.subtractToBase) {
                    }
                    else {
                        this.layer.lineTo(x, y);
                    }
                });
                this.layer.stroke();
                path.isDraw = true;
            }
        });
    }
    draw() {
        this.drawCoordinateAxes();
        this.drawGrid();
    }
    createGroupOfPoints(x, y, centerBase, points, addToBase, subtractToBase, connectToBase, color, width) {
        let group = {
            base: {
                x: x,
                y: y,
            },
            centerBase: centerBase,
            points: [],
            addToBase: addToBase,
            subtractToBase: subtractToBase,
            connectToBase: connectToBase,
            color: color,
            width: width,
            isDraw: false,
        };
        for (let index = 0; index < points.length;) {
            let x = points[index];
            index++;
            let y = points[index];
            group.points.push({ x: x, y: y });
            // group.points.push({ x: x, y: y, shiftX: 0, shiftY: 0, shiftFromBase: true, shiftisShift: false });
            index++;
        }
        return group;
    }
    swapVariables() {
    }
    syncToBase() {
    }
}
