class SynthLayer {
    //#endregion
    constructor(container, isGrid = true, northWest = true, northEast = true, southEast = true, southWest = true, gapX = 30, gapY = 30) {
        this.container = container;
        this.northWest = northWest;
        this.northEast = northEast;
        this.southEast = southEast;
        this.southWest = southWest;
        this.gapX = gapX;
        this.gapY = gapY;
        this.GroupsOfPoints = [];
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
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
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
        // x: number,
        // y: number,
        // centerBase: boolean,
        // points: any[],
        // addToBase: boolean,
        // connectToBase: boolean,
        // color: any,
        // width: number
        let x = 0;
        let y = 0;
        let color = 'red';
        let width = 2;
        this.GroupsOfPoints.push(this.createGroupOfPoints(x, y, true, [0, 'half'], false, false, true, color, width));
        this.GroupsOfPoints.push(this.createGroupOfPoints(x, y, true, ['half', 'full'], false, false, true, color, width));
        color = 'blue';
        this.GroupsOfPoints.push(this.createGroupOfPoints(x, y, true, ['half', 0], false, false, true, color, width));
        this.GroupsOfPoints.push(this.createGroupOfPoints(x, y, true, ['full', 'half'], false, false, true, color, width));
        this.drawPaths();
    }
    drawGrid() {
        //              x   y   legend  inverse index
        // northWest    -   +   1       3       0
        // northEast    +   +   2       4       1
        // southEast    +   -   3       1       2
        // southWest    -   -   4       2       3
        let xBase = 0;
        let yBase = 0;
        let numberOfpointGroupsX = 0;
        let numberOfpointGroupsY = 0;
        let color = 'black';
        let width = 1;
        if (true) {
            numberOfpointGroupsX = (Math.floor(this.getHalfX() / this.gapX));
        }
        if (true) {
            numberOfpointGroupsY = (Math.floor(this.getHalfY() / this.gapY));
        }
        if (numberOfpointGroupsY > 0) {
            xBase = this.getHalfX();
            yBase = this.getHalfY();
            let count = 0;
            while (count <= numberOfpointGroupsY) {
                if (this.northWest && this._northEast) {
                    let left = 0;
                    let right = this.getFullX();
                    yBase -= this.gapY;
                    this.GroupsOfPoints.push(this.createGroupOfPoints(left, yBase, false, [right, yBase], false, false, true, color, width));
                }
                else {
                    if (this.northWest) {
                        let left = 0;
                        let right = this.getHalfX();
                        yBase -= this.gapY;
                        this.GroupsOfPoints.push(this.createGroupOfPoints(right, yBase, false, [left, yBase], false, false, true, color, width));
                    }
                    if (this.northEast) {
                        let left = this.getHalfX();
                        let right = this.getHalfX();
                        yBase -= this.gapY;
                        this.GroupsOfPoints.push(this.createGroupOfPoints(left, yBase, false, [right, yBase], false, false, true, color, width));
                    }
                }
                // if (this.southEast) {
                // }
                // if (this.southWest) {
                // }
                count++;
            }
            this.drawPaths();
        }
    }
    drawPaths() {
        this.GroupsOfPoints.forEach((path) => {
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
