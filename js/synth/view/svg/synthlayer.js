class SynthLayerSVG {
    //#endregion
    //#region Constructor
    constructor(container, gridNorthWest = true, gridNorthEast = true, gridSouthEast = true, gridSouthWest = true, isX = true, isY = true, gapX = 30, gapY = 30, volume = 90) {
        this.container = container;
        this.gridNorthWest = gridNorthWest;
        this.gridNorthEast = gridNorthEast;
        this.gridSouthEast = gridSouthEast;
        this.gridSouthWest = gridSouthWest;
        this.isX = isX;
        this.isY = isY;
        this.gapX = gapX;
        this.gapY = gapY;
        this.GroupsOfPoints = [];
        this.coordinateAxes = [];
        this.grid = {
            northWest: {
                x: [],
                y: []
            },
            northEast: {
                x: [],
                y: []
            },
            southEast: {
                x: [],
                y: []
            },
            southWest: {
                x: [],
                y: []
            }
        };
        this.volume = volume;
        this.createLayer('layer0');
        this.setLayer();
    }
    //#endregion
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
    get leftX() {
        return this._leftX;
    }
    set leftX(value) {
        this._leftX = value;
    }
    get upY() {
        return this._upY;
    }
    set upY(value) {
        this._upY = value;
    }
    get rightX() {
        return this._rightX;
    }
    set rightX(value) {
        this._rightX = value;
    }
    get downY() {
        return this._downY;
    }
    set downY(value) {
        this._downY = value;
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
    get paths() {
        return this._paths;
    }
    set paths(value) {
        this._paths = value;
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
        this._volume = value;
    }
    //#endregion
    //#region Layer methods
    createLayer(id) {
        this.layer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.layer.id = id;
    }
    setLayer() {
        this.layer.setAttribute('width', this.container.clientWidth.toString());
        this.layer.setAttribute('height', this.container.clientHeight.toString());
        this.container.appendChild(this.layer);
    }
    resetLayer() {
        // Clear svg
    }
    //#endregion
    centerBase(path) {
        path.base.x = this.getHalfX();
        path.base.y = this.getHalfY();
    }
    getHalfX() {
        return this.layer.clientWidth / 2;
    }
    getHalfY() {
        return this.layer.clientHeight / 2;
    }
    getFullX() {
        return this.layer.clientWidth;
    }
    getFullY() {
        return this.layer.clientHeight;
    }
    drawCoordinateAxes() {
        this.coordinateAxes = [];
        let g = this.createGroup('coordinateAxes');
        let id = 'leftX';
        this.coordinateAxes.push(id);
        g.appendChild(this.createLine(id, this.getHalfX() + '', this.getHalfY() + '', '0', this.getHalfY() + '', 'rgb(255,0,0)', '2'));
        id = 'rightX';
        this.coordinateAxes.push(id);
        g.appendChild(this.createLine(id, this.getHalfX() + '', this.getHalfY() + '', this.getFullX() + '', this.getHalfY() + '', 'rgb(0,0,255)', '2'));
        id = 'topY';
        this.coordinateAxes.push(id);
        g.appendChild(this.createLine(id, this.getHalfX() + '', this.getHalfY() + '', this.getHalfX() + '', '0', 'rgb(0,0,255)', '2'));
        id = 'bottomY';
        this.coordinateAxes.push(id);
        g.appendChild(this.createLine(id, this.getHalfX() + '', this.getHalfY() + '', this.getHalfX() + '', this.getFullY() + '', 'rgb(255,0,0)', '2'));
        this.layer.appendChild(g);
    }
    createLine(id, x1, y1, x2, y2, stroke, width) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.id = id;
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', stroke);
        line.setAttribute('stroke-width', width);
        return line;
    }
    createGroup(id) {
        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.id = id;
        return g;
    }
    drawGrid() {
        //              x   y   legend  inverse index
        // NorthWest    -   +   1       3       0
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
        if (this.isX && numberOfPointGroupsX > 0) {
            this.gridNorthWestVertical(numberOfPointGroupsX);
            this.gridNorthEastVertical(numberOfPointGroupsX);
            this.gridSouthEastVertical(numberOfPointGroupsX);
            this.gridSouthWestVertical(numberOfPointGroupsX);
        }
        if (this.isY && numberOfPointGroupsY > 0) {
            this.gridNorthWestHorizontal(numberOfPointGroupsY);
            this.gridNorthEastHorizontal(numberOfPointGroupsY);
            this.gridSouthEastHorizontal(numberOfPointGroupsY);
            this.gridSouthWestHorizontal(numberOfPointGroupsY);
        }
    }
    gridNorthWestVertical(numberOfPointGroupsX) {
        if (this.grid.northWest != undefined
            && this.grid.northWest.x != undefined
            && this.grid.northWest.x.length != numberOfPointGroupsX) {
            this.grid.northWest.x = [];
            let g = this.createGroup('gridNorthWestX');
            let x = this.getHalfX();
            let counter = 0;
            while (counter <= numberOfPointGroupsX) {
                let id = 'swx' + x;
                this.grid.northWest.x.push(id);
                g.appendChild(this.createLine(id, x + '', this.getHalfY() + '', x + '', 0 + '', 'rgb(0,0,0)', '1'));
                x -= this.gapX;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridNorthEastVertical(numberOfPointGroupsX) {
        if (this.grid.northEast != undefined
            && this.grid.northEast.x != undefined
            && this.grid.northEast.x.length != numberOfPointGroupsX) {
            this.grid.northEast.x = [];
            let g = this.createGroup('gridNorthEastX');
            let x = this.getHalfX();
            let counter = 0;
            while (counter <= numberOfPointGroupsX) {
                let id = 'swx' + x;
                this.grid.northEast.x.push(id);
                g.appendChild(this.createLine(id, x + '', this.getHalfY() + '', x + '', 0 + '', 'rgb(0,0,0)', '1'));
                x += this.gapX;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridSouthEastVertical(numberOfPointGroupsX) {
        if (this.grid.southEast != undefined
            && this.grid.southEast.x != undefined
            && this.grid.southEast.x.length != numberOfPointGroupsX) {
            this.grid.southEast.x = [];
            let g = this.createGroup('gridSouthEastX');
            let x = this.getHalfX();
            let counter = 0;
            while (counter <= numberOfPointGroupsX) {
                let id = 'swx' + x;
                this.grid.southEast.x.push(id);
                g.appendChild(this.createLine(id, x + '', this.getHalfY() + '', x + '', this.getFullY() + '', 'rgb(0,0,0)', '1'));
                x += this.gapX;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridSouthWestVertical(numberOfPointGroupsX) {
        if (this.grid.southWest != undefined
            && this.grid.southWest.x != undefined
            && this.grid.southWest.x.length != numberOfPointGroupsX) {
            this.grid.southWest.x = [];
            let g = this.createGroup('gridSouthWestX');
            let x = this.getHalfX();
            let counter = 0;
            while (counter <= numberOfPointGroupsX) {
                let id = 'swx' + x;
                this.grid.southWest.x.push(id);
                g.appendChild(this.createLine(id, x + '', this.getHalfY() + '', x + '', this.getFullY() + '', 'rgb(0,0,0)', '1'));
                x -= this.gapX;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridNorthWestHorizontal(numberOfPointGroupsY) {
        if (this.grid.northWest != undefined
            && this.grid.northWest.y != undefined
            && this.grid.northWest.y.length != numberOfPointGroupsY) {
            this.grid.northWest.y = [];
            let g = this.createGroup('gridNorthWestY');
            let y = this.getHalfY();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                let id = 'nwy' + y;
                this.grid.northWest.y.push(id);
                g.appendChild(this.createLine(id, this.getHalfX() + '', y + '', 0 + '', y + '', 'rgb(0,0,0)', '1'));
                y -= this.gapY;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridNorthEastHorizontal(numberOfPointGroupsY) {
        if (this.grid.northEast != undefined
            && this.grid.northEast.y != undefined
            && this.grid.northEast.y.length != numberOfPointGroupsY) {
            this.grid.northEast.y = [];
            let g = this.createGroup('gridNorthEastY');
            let y = this.getHalfY();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                let id = 'ney' + y;
                this.grid.northEast.y.push(id);
                g.appendChild(this.createLine(id, this.getHalfX() + '', y + '', this.getFullX() + '', y + '', 'rgb(0,0,0)', '1'));
                y -= this.gapY;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridSouthEastHorizontal(numberOfPointGroupsY) {
        if (this.grid.southEast != undefined
            && this.grid.southEast.y != undefined
            && this.grid.southEast.y.length != numberOfPointGroupsY) {
            this.grid.southEast.y = [];
            let g = this.createGroup('gridSouthEastY');
            let y = this.getHalfY();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                let id = 'sey' + y;
                this.grid.southEast.y.push(id);
                g.appendChild(this.createLine(id, this.getHalfX() + '', y + '', 0 + '', y + '', 'rgb(0,0,0)', '1'));
                y += this.gapY;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    gridSouthWestHorizontal(numberOfPointGroupsY) {
        if (this.grid.southWest != undefined
            && this.grid.southWest != undefined
            && this.grid.southWest.y.length != numberOfPointGroupsY) {
            this.grid.southWest.y = [];
            let g = this.createGroup('gridSouthEastY');
            let y = this.getHalfY();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                let id = 'swy' + y;
                this.grid.southWest.y.push(id);
                g.appendChild(this.createLine(id, this.getHalfX() + '', y + '', this.getFullX() + '', y + '', 'rgb(0,0,0)', '1'));
                y += this.gapY;
                counter++;
            }
            this.layer.appendChild(g);
        }
    }
    applyVolume() {
        this.paths.forEach(path => {
            path.forEach(point => {
                point.y = point.y * this.volume;
            });
        });
        this.draw();
    }
    calcFunc(func, start, end, increment) {
        //#region Parameter
        let path = [];
        let x = start;
        //#endregion
        while (x <= end) {
            let radiant = x * Math.PI / 180;
            let y = 0;
            switch (func) {
                case 'cosquare':
                    y = Math.cos(radiant);
                    if (y > 0) {
                        y = 1;
                    }
                    else {
                        y = -1;
                    }
                    break;
                case 'cosine':
                case 'cotriangle':
                    y = Math.cos(radiant);
                    break;
                case 'square':
                    y = Math.sin(radiant);
                    if (y < 0) {
                        y = -1;
                    }
                    else {
                        y = 1;
                    }
                    break;
                default:
                    y = Math.sin(radiant);
                    break;
            }
            path.push({ x, y });
            x += increment;
        }
        this.paths.push(path);
    }
    drawWave(x, y, red, green, blue, width) {
        let baseX = x;
        let baseY = y;
        let toX = 0;
        let toY = 0;
        let currentX = 0;
        let currentY = 0;
        let g = this.createGroup('wave');
        for (let index0 = 0; index0 < this.paths.length; index0++) {
            for (let index1 = 0; index1 < this.paths[index0].length; index1++) {
                const point0 = this.paths[index0][index1];
                index1++;
                const point1 = this.paths[index0][index1];
                index1--;
                currentX = baseX + point0.x;
                currentY = baseY + point0.y;
                if (point1 != undefined) {
                    toX = baseX + point1.x;
                    toY = baseY + point1.y;
                    g.appendChild(this.createLine(Date.now() + '', currentX + '', currentY + '', toX + '', toY + '', 'rgb(' + red + ',' + green + ',' + blue + ')', width + ''));
                }
            }
        }
        this.layer.appendChild(g);
    }
    swapVariables() {
    }
    syncToBase() {
    }
    calc(step) {
        this.paths = [];
        let range = ((this.getHalfX() - (this.getHalfX() % 360)) * 2);
        let start = range * -1;
        let end = range;
        this.calcFunc('sine', start, end, step);
        // this.calcFunc('cosine', start, end, step)
        // this.calcFunc('triangle', start, end, 90)
        // this.calcFunc('cotriangle', start, end, 90)
        // this.calcFunc('square', start, end, step)
        // this.calcFunc('cosquare', start, end, step)
    }
    addFunction() {
    }
    color() {
    }
    draw() {
        let wave = document.getElementById('wave');
        if (wave != undefined) {
            wave.remove();
        }
        let x = this.getHalfX();
        let y = this.getHalfY();
        this.drawWave(x, y, 0, 0, 0, 4);
    }
}
