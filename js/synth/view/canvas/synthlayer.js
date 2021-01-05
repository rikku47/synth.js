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
            NorthWest: [],
            NorthEast: [],
            SouthEast: [],
            SouthWest: []
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
    createLayer(id) {
        // this.layer = document.createElement('canvas').getContext('2d')
        // this.layer.canvas.id = id
        this.layer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.layer.id = id;
    }
    setLayer() {
        // this.layer.canvas.width = this.container.clientWidth
        // this.layer.canvas.height = this.container.clientHeight
        // this.container.appendChild(this.layer.canvas)
        this.layer.setAttribute('width', this.container.clientWidth.toString());
        this.layer.setAttribute('height', this.container.clientHeight.toString());
        this.container.appendChild(this.layer);
    }
    resetLayer() {
        // this.layer.clearRect(0, 0, this.layer.canvas.width, this.layer.canvas.height)
    }
    // centerBaseCanvas(path: any) {
    //     path.base.x = this.getHalfXCanvas()
    //     path.base.y = this.getHalfYCanvas()
    // }
    centerBaseSVG(path) {
        path.base.x = this.getHalfXSVG();
        path.base.y = this.getHalfYSVG();
    }
    // getHalfXCanvas() {
    //     return this.layer.canvas.clientWidth / 2
    // }
    // getHalfYCanvas() {
    //     return this.layer.canvas.clientHeight / 2
    // }
    // getFullXCanvas() {
    //     return this.layer.canvas.clientWidth
    // }
    // getFullYCanvas() {
    //     return this.layer.canvas.clientHeight
    // }
    getHalfXSVG() {
        return this.layer.clientWidth / 2;
    }
    getHalfYSVG() {
        return this.layer.clientHeight / 2;
    }
    getFullXSVG() {
        return this.layer.clientWidth;
    }
    getFullYSVG() {
        return this.layer.clientHeight;
    }
    drawCoordinateAxesSVG() {
        this.coordinateAxes = [];
        let id = 'leftX';
        this.coordinateAxes.push(id);
        this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', this.getHalfYSVG() + '', '0', this.getHalfYSVG() + '', 'rgb(255,0,0)', '2'));
        id = 'rightX';
        this.coordinateAxes.push(id);
        this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', this.getHalfYSVG() + '', this.getFullXSVG() + '', this.getHalfYSVG() + '', 'rgb(0,0,255)', '2'));
        id = 'topY';
        this.coordinateAxes.push(id);
        this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', this.getHalfYSVG() + '', this.getHalfXSVG() + '', '0', 'rgb(0,0,255)', '2'));
        id = 'bottomY';
        this.coordinateAxes.push(id);
        this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', this.getHalfYSVG() + '', this.getHalfXSVG() + '', this.getFullYSVG() + '', 'rgb(255,0,0)', '2'));
    }
    drawCoordinateAxesCanvas() {
        // this.layer
        // let x = 0
        // let y = 0
        // let color = 'red'
        // let width = 2
        // if (true) {
        //     this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, [0, 'half'], false, false, true, color, width))
        // }
        // if (true) {
        //     this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 'full'], false, false, true, color, width))
        // }
        // color = 'blue'
        // if (true) {
        //     this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 0], false, false, true, color, width))
        // }
        // if (true) {
        //     this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['full', 'half'], false, false, true, color, width))
        // }
        // if (true || true || true || true) {
        // this.drawPathsSVG(this.coordinateAxes)
        // this.drawPathsCanvas(this.coordinateAxes)
        // }
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
    drawGrid() {
        //              x   y   legend  inverse index
        // NorthWest    -   +   1       3       0
        // northEast    +   +   2       4       1
        // southEast    +   -   3       1       2
        // southWest    -   -   4       2       3
        let numberOfPointGroupsX = 0;
        let numberOfPointGroupsY = 0;
        if (true) {
            // numberOfPointGroupsX = (Math.floor(this.getHalfXCanvas() / this.gapX))
            numberOfPointGroupsX = (Math.floor(this.getHalfXSVG() / this.gapX));
        }
        if (true) {
            // numberOfPointGroupsY = (Math.floor(this.getHalfYCanvas() / this.gapY))
            numberOfPointGroupsY = (Math.floor(this.getHalfYSVG() / this.gapY));
        }
        if (numberOfPointGroupsY > 0) {
            this.gridNorthWestHorizontalSVG(numberOfPointGroupsY);
            this.gridNorthEastHorizontalSVG(numberOfPointGroupsY);
            this.gridSouthEastHorizontalSVG(numberOfPointGroupsY);
            this.gridSouthWestHorizontalSVG(numberOfPointGroupsY);
        }
        if (numberOfPointGroupsX > 0) {
            this.gridNorthWestVerticalSVG(numberOfPointGroupsX);
            this.gridNorthEastVerticalSVG(numberOfPointGroupsX);
            this.gridSouthEastVerticalSVG(numberOfPointGroupsX);
            this.gridSouthWestVerticalSVG(numberOfPointGroupsX);
        }
    }
    gridNorthWestHorizontalSVG(numberOfPointGroupsY) {
        if (this.grid.NorthWest != undefined
            && this.grid.NorthWest.length != numberOfPointGroupsY) {
            this.grid.NorthWest = [];
            let y = this.getHalfYSVG();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                y -= this.gapY;
                let id = 'nwy' + y;
                this.grid.NorthWest.push(id);
                this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', y + '', 0 + '', y + '', 'rgb(0,0,0)', '1'));
                counter++;
            }
        }
    }
    gridNorthEastHorizontalSVG(numberOfPointGroupsY) {
        if (this.grid.NorthEast != undefined
            && this.grid.NorthEast.length != numberOfPointGroupsY) {
            this.grid.NorthEast = [];
            let y = this.getHalfYSVG();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                y -= this.gapY;
                let id = 'ney' + y;
                this.grid.NorthEast.push(id);
                this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', y + '', this.getFullXSVG() + '', y + '', 'rgb(0,0,0)', '1'));
                counter++;
            }
        }
    }
    gridSouthEastHorizontalSVG(numberOfPointGroupsY) {
        if (this.grid.SouthEast != undefined
            && this.grid.SouthEast.length != numberOfPointGroupsY) {
            this.grid.SouthEast = [];
            let y = this.getHalfYSVG();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                y += this.gapY;
                let id = 'sey' + y;
                this.grid.SouthEast.push(id);
                this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', y + '', 0 + '', y + '', 'rgb(0,0,0)', '1'));
                counter++;
            }
        }
    }
    gridSouthWestHorizontalSVG(numberOfPointGroupsY) {
        if (this.grid.SouthWest != undefined
            && this.grid.SouthWest.length != numberOfPointGroupsY) {
            this.grid.SouthWest = [];
            let y = this.getHalfYSVG();
            let counter = 0;
            while (counter <= numberOfPointGroupsY) {
                y += this.gapY;
                let id = 'swy' + y;
                this.grid.SouthWest.push(id);
                this.layer.appendChild(this.createLine(id, this.getHalfXSVG() + '', y + '', this.getFullXSVG() + '', y + '', 'rgb(0,0,0)', '1'));
                counter++;
            }
        }
    }
    gridNorthWestVerticalSVG(numberOfPointGroupsX) {
        this.grid.NorthWest = [];
        let x = this.getHalfXSVG();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x -= this.gapX;
            let id = 'swx' + x;
            this.grid.SouthWest.push(id);
            this.layer.appendChild(this.createLine(id, x + '', this.getHalfYSVG() + '', x + '', 0 + '', 'rgb(0,0,0)', '1'));
            counter++;
        }
    }
    gridNorthEastVerticalSVG(numberOfPointGroupsX) {
        this.grid.NorthWest = [];
        let x = this.getHalfXSVG();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x += this.gapX;
            let id = 'swx' + x;
            this.grid.SouthWest.push(id);
            this.layer.appendChild(this.createLine(id, x + '', this.getHalfYSVG() + '', x + '', 0 + '', 'rgb(0,0,0)', '1'));
            counter++;
        }
    }
    gridSouthEastVerticalSVG(numberOfPointGroupsX) {
        this.grid.SouthWest = [];
        let x = this.getHalfXSVG();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x += this.gapX;
            let id = 'swx' + x;
            this.grid.SouthWest.push(id);
            this.layer.appendChild(this.createLine(id, x + '', this.getHalfYSVG() + '', x + '', this.getFullYSVG() + '', 'rgb(0,0,0)', '1'));
            counter++;
        }
    }
    gridSouthWestVerticalSVG(numberOfPointGroupsX) {
        this.grid.SouthWest = [];
        let x = this.getHalfXSVG();
        let counter = 0;
        while (counter <= numberOfPointGroupsX) {
            x -= this.gapX;
            let id = 'swx' + x;
            this.grid.SouthWest.push(id);
            this.layer.appendChild(this.createLine(id, x + '', this.getHalfYSVG() + '', x + '', this.getFullYSVG() + '', 'rgb(0,0,0)', '1'));
            counter++;
        }
    }
    // private gridNorthWestHorizontalCanvas(numberOfPointGroupsY: number) {
    //     if (
    //         this.grid.NorthWest != undefined
    //          && this.grid.NorthWest.length != numberOfPointGroupsY
    //          ) {
    //         this.grid.NorthWest = []
    //         let y = this.getHalfYSVG()
    //         let color = 'black'
    //         let width = 1
    //         let left = 0
    //         let right = this.getHalfXSVG()
    //         let counter = 0
    //         while (counter <= numberOfPointGroupsY) {
    //             y -= this.gapY
    //             this.grid.NorthWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))
    //             counter++
    //         }
    //     }
    //     this.drawPathsSVG(this.grid.NorthWest)
    // }
    // private gridNorthEastHorizontal(numberOfPointGroupsY: number) {
    //     let y = this.getHalfYSVG()
    //     let color = 'black'
    //     let width = 1
    //     let left = this.getHalfXSVG()
    //     let right = this.getFullXSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsY) {
    //         y -= this.gapY
    //         this.grid.northEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.northEast)
    // }
    // private gridSouthEastHorizontal(numberOfPointGroupsY: number) {
    //     let y = this.getHalfYSVG()
    //     let color = 'black'
    //     let width = 1
    //     let left = this.getHalfXSVG()
    //     let right = this.getFullXSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsY) {
    //         y += this.gapY
    //         this.grid.southEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.southEast)
    // }
    // private gridSouthWestHorizontal(numberOfPointGroupsY: number) {
    //     let y = this.getHalfYSVG()
    //     let color = 'black'
    //     let width = 4
    //     let left = 0
    //     let right = this.getHalfXSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsY) {
    //         y += this.gapY
    //         this.grid.southWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.southWest)
    // }
    // private gridNorthWestVertical(numberOfPointGroupsX: number) {
    //     let x = this.getHalfXSVG()
    //     let color = 'black'
    //     let width = 4
    //     let top = 0
    //     let bottom = this.getHalfYSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsX) {
    //         x -= this.gapX
    //         this.grid.NorthWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.NorthWest)
    // }
    // private gridNorthEastVertical(numberOfPointGroupsX: number) {
    //     let x = this.getHalfXSVG()
    //     let color = 'black'
    //     let width = 1
    //     let top = 0
    //     let bottom = this.getHalfYSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsX) {
    //         x += this.gapX
    //         this.grid.northEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.northEast)
    // }
    // private gridSouthEastVertical(numberOfPointGroupsX: number) {
    //     let x = this.getHalfXSVG()
    //     let color = 'black'
    //     let width = 1
    //     let top = this.getHalfYSVG()
    //     let bottom = this.getFullYSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsX) {
    //         x += this.gapX
    //         this.grid.southEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.southEast)
    // }
    // private gridSouthWestVertical(numberOfPointGroupsX: number) {
    //     let x = this.getHalfXSVG()
    //     let color = 'black'
    //     let width = 1
    //     let top = this.getHalfYSVG()
    //     let bottom = this.getFullYSVG()
    //     let counter = 0
    //     while (counter <= numberOfPointGroupsX) {
    //         x -= this.gapX
    //         this.grid.southWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))
    //         counter++
    //     }
    //     this.drawPathsSVG(this.grid.southWest)
    // }
    drawPathsCanvas(GroupsOfPoints) {
        // GroupsOfPoints.forEach((path) => {
        //     if (!path.isDraw) {
        //         this.layer.beginPathCanvas()
        //         if (path.centerBase) {
        //             this.centerBase(path)
        //         }
        //         if (path.connectToBase) {
        //             this.layer.moveTo(path.base.x, path.base.y)
        //         }
        //         this.layer.strokeStyle = path.color
        //         this.layer.lineWidth = path.width
        //         path.points.forEach((point: { x: any; y: any; }) => {
        //             let x = 0
        //             let y = 0
        //             if (point.x == 'half') {
        //                 x = this.getHalfX()
        //             } else if (point.x == 'full') {
        //                 x = this.getFullX();
        //             } else {
        //                 x = point.x
        //             }
        //             if (point.y == 'half') {
        //                 y = this.getHalfY();
        //             } else if (point.y == 'full') {
        //                 y = this.getFullY();
        //             } else {
        //                 y = point.y
        //             }
        //             if (path.addToBase) {
        //                 this.layer.lineTo(path.base.x + x, path.base.y + y)
        //             } else if (path.subtractToBase) {
        //             } else {
        //                 this.layer.lineTo(x, y)
        //             }
        //         })
        //         this.layer.stroke()
        //         path.isDraw = true;
        //     }
        // })
    }
    drawSine() {
        let increment = 90;
        let currentX = this.getHalfXSVG();
        let currentY = this.getHalfYSVG();
        let toX = 0;
        let toY = 0;
        for (let index = 0; index <= 360;) {
            index += increment;
            let rad = index * Math.PI / 180;
            let y = Math.sin(rad);
            y *= 90;
            toX = currentX + increment;
            toY = this.getHalfYSVG() + y;
            this.layer.appendChild(this.createLine('sineY' + y, currentX + '', currentY + '', toX + '', toY + '', 'rgb(255,100,255)', '4'));
            currentX = toX;
            currentY = toY;
        }
    }
    draw() {
        // this.resetLayer()
        // this.drawPathsSVG(this.grid.NorthWest);
    }
    // createGroupOfPoints(
    //     x: number,
    //     y: number,
    //     centerBase: boolean,
    //     points: any[],
    //     addToBase: boolean,
    //     subtractToBase: boolean,
    //     connectToBase: boolean,
    //     color: any,
    //     width: number
    // ) {
    //     let group = {
    //         base: {
    //             x: x,
    //             y: y,
    //         },
    //         centerBase: centerBase,
    //         points: [],
    //         addToBase: addToBase,
    //         subtractToBase: subtractToBase,
    //         connectToBase: connectToBase,
    //         color: color,
    //         width: width,
    //         isDraw: false,
    //     }
    //     for (let index = 0; index < points.length;) {
    //         let x = points[index]
    //         index++
    //         let y = points[index]
    //         group.points.push({ x: x, y: y });
    //         // group.points.push({ x: x, y: y, shiftX: 0, shiftY: 0, shiftFromBase: true, shiftisShift: false });
    //         index++
    //     }
    //     return group;
    // }
    swapVariables() {
    }
    syncToBase() {
    }
}
