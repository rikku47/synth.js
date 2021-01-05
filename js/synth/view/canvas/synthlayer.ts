class SynthLayer {

    //#region Fields

    private _container: HTMLElement
    private _gapX: number
    private _gapY: number
    private _isX: boolean
    private _isY: boolean
    private _leftX: boolean
    private _upY: boolean
    private _rightX: boolean
    private _downY: boolean
    private _gridNorthWest: boolean
    private _gridNorthEast: boolean
    private _gridSouthEast: boolean
    private _gridSouthWest: boolean
    private _layer: SVGElement;
    private _grid: {
        NorthWest: string[],
        NorthEast: string[],
        SouthEast: string[],
        SouthWest: string[],
    }
    private _coordinateAxes: string[]
    private _paths: any[]

    //#endregion

    //#region Getter Setter

    public get container(): HTMLElement {
        return this._container;
    }

    public set container(value: HTMLElement) {
        this._container = value;
    }

    public get gapX(): number {
        return this._gapX;
    }

    public set gapX(value: number) {
        this._gapX = value;
    }

    public get gapY(): number {
        return this._gapY;
    }

    public set gapY(value: number) {
        this._gapY = value;
    }

    public get isX(): boolean {
        return this._isX;
    }

    public set isX(value: boolean) {
        this._isX = value;
    }

    public get isY(): boolean {
        return this._isY;
    }

    public set isY(value: boolean) {
        this._isY = value;
    }

    public get leftX(): boolean {
        return this._leftX;
    }

    public set leftX(value: boolean) {
        this._leftX = value;
    }

    public get upY(): boolean {
        return this._upY;
    }

    public set upY(value: boolean) {
        this._upY = value;
    }

    public get rightX(): boolean {
        return this._rightX;
    }

    public set rightX(value: boolean) {
        this._rightX = value;
    }

    public get downY(): boolean {
        return this._downY;
    }

    public set downY(value: boolean) {
        this._downY = value;
    }

    public get gridNorthWest(): boolean {
        return this._gridNorthWest;
    }

    public set gridNorthWest(value: boolean) {
        this._gridNorthWest = value;
    }

    public get gridNorthEast(): boolean {
        return this._gridNorthEast;
    }

    public set gridNorthEast(value: boolean) {
        this._gridNorthEast = value;
    }

    public get gridSouthWest(): boolean {
        return this._gridSouthWest;
    }

    public set gridSouthWest(value: boolean) {
        this._gridSouthWest = value;
    }

    public get gridSouthEast(): boolean {
        return this._gridSouthEast;
    }

    public set gridSouthEast(value: boolean) {
        this._gridSouthEast = value;
    }

    public get layer(): SVGElement {
        return this._layer;
    }

    public set layer(value: SVGElement) {
        this._layer = value;
    }

    public get grid(): {
        NorthWest: string[],
        NorthEast: string[],
        SouthEast: string[],
        SouthWest: string[],
    } {
        return this._grid;
    }

    public set grid(value: {
        NorthWest: string[],
        NorthEast: string[],
        SouthEast: string[],
        SouthWest: string[],
    }) {
        this._grid = value;
    }

    public get coordinateAxes(): string[] {
        return this._coordinateAxes;
    }

    public set coordinateAxes(value: string[]) {
        this._coordinateAxes = value;
    }

    public get GroupsOfPoints(): any[] {
        return this._paths;
    }
    public set GroupsOfPoints(value: any[]) {
        this._paths = value;
    }

    //#endregion

    constructor(
        container: HTMLElement,
        gridNorthWest = true,
        gridNorthEast = true,
        gridSouthEast = true,
        gridSouthWest = true,
        gapX = 30,
        gapY = 30
    ) {
        this.container = container
        this.gridNorthWest = gridNorthWest
        this.gridNorthEast = gridNorthEast
        this.gridSouthEast = gridSouthEast
        this.gridSouthWest = gridSouthWest
        this.gapX = gapX
        this.gapY = gapY
        this.GroupsOfPoints = []
        this.coordinateAxes = []
        this.grid = {
            NorthWest: [],
            NorthEast: [],
            SouthEast: [],
            SouthWest: []
        }

        this.createLayer('layer0')
        this.setLayer()
    }

    createLayer(id: string) {
        // this.layer = document.createElement('canvas').getContext('2d')
        // this.layer.canvas.id = id

        this.layer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.layer.id = id
    }

    setLayer() {
        // this.layer.canvas.width = this.container.clientWidth
        // this.layer.canvas.height = this.container.clientHeight
        // this.container.appendChild(this.layer.canvas)

        this.layer.setAttribute('width', this.container.clientWidth.toString())
        this.layer.setAttribute('height', this.container.clientHeight.toString())
        this.container.appendChild(this.layer)
    }

    resetLayer() {
        // this.layer.clearRect(0, 0, this.layer.canvas.width, this.layer.canvas.height)
    }

    // centerBaseCanvas(path: any) {

    //     path.base.x = this.getHalfXCanvas()
    //     path.base.y = this.getHalfYCanvas()
    // }

    centerBaseSVG(path: any) {

        path.base.x = this.getHalfXSVG()
        path.base.y = this.getHalfYSVG()
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
        return this.layer.clientWidth / 2
    }

    getHalfYSVG() {
        return this.layer.clientHeight / 2
    }

    getFullXSVG() {
        return this.layer.clientWidth
    }

    getFullYSVG() {
        return this.layer.clientHeight
    }

    drawCoordinateAxesSVG() {

        this.coordinateAxes = [];

        let id = 'leftX'

        this.coordinateAxes.push(id)

        this.layer.appendChild(
            this.createLine(
                id,
                this.getHalfXSVG() + '',
                this.getHalfYSVG() + '',
                '0',
                this.getHalfYSVG() + '',
                'rgb(255,0,0)',
                '2'
            ))

        id = 'rightX'

        this.coordinateAxes.push(id)

        this.layer.appendChild(
            this.createLine(
                id,
                this.getHalfXSVG() + '',
                this.getHalfYSVG() + '',
                this.getFullXSVG() + '',
                this.getHalfYSVG() + '',
                'rgb(0,0,255)',
                '2'
            ))

        id = 'topY'

        this.coordinateAxes.push(id)

        this.layer.appendChild(
            this.createLine(
                id,
                this.getHalfXSVG() + '',
                this.getHalfYSVG() + '',
                this.getHalfXSVG() + '',
                '0',
                'rgb(0,0,255)',
                '2'
            ))

        id = 'bottomY'

        this.coordinateAxes.push(id)

        this.layer.appendChild(
            this.createLine(
                id,
                this.getHalfXSVG() + '',
                this.getHalfYSVG() + '',
                this.getHalfXSVG() + '',
                this.getFullYSVG() + '',
                'rgb(255,0,0)',
                '2'
            ))
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

    private createLine(id: string, x1: string, y1: string, x2: string, y2: string, stroke: string, width: string) {

        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line.id = id

        line.setAttribute('x1', x1)
        line.setAttribute('y1', y1)
        line.setAttribute('x2', x2)
        line.setAttribute('y2', y2)
        line.setAttribute('stroke', stroke)
        line.setAttribute('stroke-width', width)

        return line
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
            numberOfPointGroupsX = (Math.floor(this.getHalfXSVG() / this.gapX))
        }

        if (true) {
            // numberOfPointGroupsY = (Math.floor(this.getHalfYCanvas() / this.gapY))
            numberOfPointGroupsY = (Math.floor(this.getHalfYSVG() / this.gapY))
        }

        if (numberOfPointGroupsY > 0) {

            this.gridNorthWestHorizontalSVG(numberOfPointGroupsY)

            this.gridNorthEastHorizontalSVG(numberOfPointGroupsY)

            this.gridSouthEastHorizontalSVG(numberOfPointGroupsY)

            this.gridSouthWestHorizontalSVG(numberOfPointGroupsY)
        }

        if (numberOfPointGroupsX > 0) {

            this.gridNorthWestVerticalSVG(numberOfPointGroupsX)

            this.gridNorthEastVerticalSVG(numberOfPointGroupsX)

            this.gridSouthEastVerticalSVG(numberOfPointGroupsX)

            this.gridSouthWestVerticalSVG(numberOfPointGroupsX)
        }
    }

    private gridNorthWestHorizontalSVG(numberOfPointGroupsY: number) {

        if (
            this.grid.NorthWest != undefined
            && this.grid.NorthWest.length != numberOfPointGroupsY
        ) {

            this.grid.NorthWest = []

            let y = this.getHalfYSVG()

            let counter = 0

            while (counter <= numberOfPointGroupsY) {

                y -= this.gapY

                let id = 'nwy' + y

                this.grid.NorthWest.push(id)

                this.layer.appendChild(
                    this.createLine(
                        id,
                        this.getHalfXSVG() + '',
                        y + '',
                        0 + '',
                        y + '',
                        'rgb(0,0,0)',
                        '1'
                    ))

                counter++
            }
        }
    }

    private gridNorthEastHorizontalSVG(numberOfPointGroupsY: number) {

        if (
            this.grid.NorthEast != undefined
            && this.grid.NorthEast.length != numberOfPointGroupsY
        ) {

            this.grid.NorthEast = []

            let y = this.getHalfYSVG()

            let counter = 0

            while (counter <= numberOfPointGroupsY) {

                y -= this.gapY

                let id = 'ney' + y

                this.grid.NorthEast.push(id)

                this.layer.appendChild(
                    this.createLine(
                        id,
                        this.getHalfXSVG() + '',
                        y + '',
                        this.getFullXSVG() + '',
                        y + '',
                        'rgb(0,0,0)',
                        '1'
                    ))

                counter++
            }
        }
    }

    private gridSouthEastHorizontalSVG(numberOfPointGroupsY: number) {

        if (
            this.grid.SouthEast != undefined
            && this.grid.SouthEast.length != numberOfPointGroupsY
        ) {

            this.grid.SouthEast = []

            let y = this.getHalfYSVG()

            let counter = 0

            while (counter <= numberOfPointGroupsY) {

                y += this.gapY

                let id = 'sey' + y

                this.grid.SouthEast.push(id)

                this.layer.appendChild(
                    this.createLine(
                        id,
                        this.getHalfXSVG() + '',
                        y + '',
                        0 + '',
                        y + '',
                        'rgb(0,0,0)',
                        '1'
                    ))

                counter++
            }
        }
    }

    private gridSouthWestHorizontalSVG(numberOfPointGroupsY: number) {

        if (
            this.grid.SouthWest != undefined
            && this.grid.SouthWest.length != numberOfPointGroupsY
        ) {

            this.grid.SouthWest = []

            let y = this.getHalfYSVG()

            let counter = 0

            while (counter <= numberOfPointGroupsY) {

                y += this.gapY

                let id = 'swy' + y

                this.grid.SouthWest.push(id)

                this.layer.appendChild(
                    this.createLine(
                        id,
                        this.getHalfXSVG() + '',
                        y + '',
                        this.getFullXSVG() + '',
                        y + '',
                        'rgb(0,0,0)',
                        '1'
                    ))

                counter++
            }
        }
    }

    private gridNorthWestVerticalSVG(numberOfPointGroupsX: number) {

        this.grid.NorthWest = []

        let x = this.getHalfXSVG()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x -= this.gapX

            let id = 'swx' + x

            this.grid.SouthWest.push(id)

            this.layer.appendChild(
                this.createLine(
                    id,
                    x + '',
                    this.getHalfYSVG() + '',
                    x + '',
                    0 + '',
                    'rgb(0,0,0)',
                    '1'
                ))

            counter++
        }
    }

    private gridNorthEastVerticalSVG(numberOfPointGroupsX: number) {

        this.grid.NorthWest = []

        let x = this.getHalfXSVG()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x += this.gapX

            let id = 'swx' + x

            this.grid.SouthWest.push(id)

            this.layer.appendChild(
                this.createLine(
                    id,
                    x + '',
                    this.getHalfYSVG() + '',
                    x + '',
                    0 + '',
                    'rgb(0,0,0)',
                    '1'
                ))

            counter++
        }
    }

    private gridSouthEastVerticalSVG(numberOfPointGroupsX: number) {

        this.grid.SouthWest = []

        let x = this.getHalfXSVG()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x += this.gapX

            let id = 'swx' + x

            this.grid.SouthWest.push(id)

            this.layer.appendChild(
                this.createLine(
                    id,
                    x + '',
                    this.getHalfYSVG() + '',
                    x + '',
                    this.getFullYSVG() + '',
                    'rgb(0,0,0)',
                    '1'
                ))

            counter++
        }
    }

    private gridSouthWestVerticalSVG(numberOfPointGroupsX: number) {

        this.grid.SouthWest = []

        let x = this.getHalfXSVG()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x -= this.gapX

            let id = 'swx' + x

            this.grid.SouthWest.push(id)

            this.layer.appendChild(
                this.createLine(
                    id,
                    x + '',
                    this.getHalfYSVG() + '',
                    x + '',
                    this.getFullYSVG() + '',
                    'rgb(0,0,0)',
                    '1'
                ))

            counter++
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

    drawPathsCanvas(GroupsOfPoints: any) {

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

        let increment = 4

        let currentX = this.getHalfXSVG()
        let currentY = this.getHalfYSVG()

        let toX = 0
        let toY = 0

        for (let index = 0; index <= 360;) {

            index += increment

            let rad = index * Math.PI / 180

            let y = Math.sin(rad)

            y *= 90

            toX = currentX + increment
            toY = this.getHalfYSVG() + y

            this.layer.appendChild(
                this.createLine(
                    'sineY' + y,
                    currentX + '',
                    currentY + '',
                    toX + '',
                    toY + '',
                    'rgb(255,100,255)',
                    '4'
                )
            )

            currentX = toX
            currentY = toY
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