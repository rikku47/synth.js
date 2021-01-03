class SynthLayer {

    //#region Fields

    private _container: HTMLElement;
    private _gapX: number;
    private _gapY: number;
    private _isX: boolean;
    private _isY: boolean;
    private _left: boolean;
    private _up: boolean;
    private _right: boolean;
    private _down: boolean;
    private _gridNorthWest: boolean;
    private _gridNorthEast: boolean;
    private _gridSouthEast: boolean;
    private _gridSouthWest: boolean;

    private _layer: any;
    private _grid: any;
    private _coordinateAxes: any[];
    private _paths: any[];

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

    public get layer(): any {
        return this._layer;
    }

    public set layer(value: any) {
        this._layer = value;
    }

    public get grid(): any {
        return this._grid;
    }

    public set grid(value: any) {
        this._grid = value;
    }

    public get coordinateAxes(): any[] {
        return this._coordinateAxes;
    }

    public set coordinateAxes(value: any[]) {
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
            northWest: [],
            northEast: [],
            southEast: [],
            southWest: []
        }



        this.createLayer('layer0')
        this.setLayer()
    }

    createLayer(id: string) {
        this.layer = document.createElement('canvas').getContext('2d')
        this.layer.canvas.id = id
    }

    setLayer() {
        this.layer.canvas.width = this.container.clientWidth
        this.layer.canvas.height = this.container.clientHeight
        this.container.appendChild(this.layer.canvas)
    }

    resetLayer() {
        this.layer.clearRect(0, 0, this.layer.canvas.width, this.layer.canvas.height)
    }

    centerBase(path: any) {

        path.base.x = this.getHalfX()
        path.base.y = this.getHalfY()
    }

    getHalfX() {
        return this.layer.canvas.clientWidth / 2
    }

    getHalfY() {
        return this.layer.canvas.clientHeight / 2
    }

    getFullX() {
        return this.layer.canvas.clientWidth
    }

    getFullY() {
        return this.layer.canvas.clientHeight
    }

    drawCoordinateAxes() {

        let x = 0
        let y = 0
        let color = 'red'
        let width = 2

        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, [0, 'half'], false, false, true, color, width))
        }

        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 'full'], false, false, true, color, width))

        }

        color = 'blue'

        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['half', 0], false, false, true, color, width))

        }

        if (true) {
            this.coordinateAxes.push(this.createGroupOfPoints(x, y, true, ['full', 'half'], false, false, true, color, width))

        }

        if (true || true || true || true) {
            this.drawPaths(this.coordinateAxes)
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
            numberOfPointGroupsX = (Math.floor(this.getHalfX() / this.gapX))
        }

        if (true) {
            numberOfPointGroupsY = (Math.floor(this.getHalfY() / this.gapY))
        }

        if (numberOfPointGroupsY > 0) {

            this.gridNorthWestHorizontal(numberOfPointGroupsY)

            this.gridNorthEastHorizontal(numberOfPointGroupsY)

            this.gridSouthEastHorizontal(numberOfPointGroupsY)

            this.gridSouthWestHorizontal(numberOfPointGroupsY)
        }

        if (numberOfPointGroupsX > 0) {

            this.gridNorthWestVertical(numberOfPointGroupsX)
   
            this.gridSouthEastVertical(numberOfPointGroupsX)

            this.gridSouthWestVertical(numberOfPointGroupsX)

            this.gridNorthEastVertical(numberOfPointGroupsX)
        }
    }

    private gridNorthWestHorizontal(numberOfPointGroupsY: number) {

        let y = this.getHalfY()

        let color = 'black'
        let width = 1

        let left = 0
        let right = this.getHalfX()

        let counter = 0

        while (counter <= numberOfPointGroupsY) {

            y -= this.gapY

            this.grid.northWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.northWest)
    }

    private gridNorthEastHorizontal(numberOfPointGroupsY: number) {

        let y = this.getHalfY()

        let color = 'black'
        let width = 1

        let left = this.getHalfX()
        let right = this.getFullX()

        let counter = 0

        while (counter <= numberOfPointGroupsY) {

            y -= this.gapY

            this.grid.northEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.northEast)
    }

    private gridSouthEastHorizontal(numberOfPointGroupsY: number) {

        let y = this.getHalfY()

        let color = 'black'
        let width = 1

        let left = this.getHalfX()
        let right = this.getFullX()

        let counter = 0

        while (counter <= numberOfPointGroupsY) {

            y += this.gapY

            this.grid.southEast.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.southEast)
    }

    private gridSouthWestHorizontal(numberOfPointGroupsY: number) {

        let y = this.getHalfY()

        let color = 'black'
        let width = 1

        let left = 0
        let right = this.getHalfX()

        let counter = 0

        while (counter <= numberOfPointGroupsY) {

            y += this.gapY

            this.grid.southWest.push(this.createGroupOfPoints(left, y, false, [right, y], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.southWest)
    }

    private gridNorthWestVertical(numberOfPointGroupsX: number) {

        let x = this.getHalfX()

        let color = 'black'
        let width = 1

        let top = 0
        let bottom = this.getHalfY()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x -= this.gapX

            this.grid.northWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.northWest)
    }

    private gridNorthEastVertical(numberOfPointGroupsX: number) {

        let x = this.getHalfX()

        let color = 'black'
        let width = 1

        let top = 0
        let bottom = this.getHalfY()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x += this.gapX

            this.grid.northEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.northEast)
    }

    private gridSouthEastVertical(numberOfPointGroupsX: number) {

        let x = this.getHalfX()

        let color = 'black'
        let width = 1

        let top = this.getHalfY()
        let bottom = this.getFullY()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x += this.gapX

            this.grid.southEast.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.southEast)
    }

    private gridSouthWestVertical(numberOfPointGroupsX: number) {

        let x = this.getHalfX()

        let color = 'black'
        let width = 1

        let top = this.getHalfY()
        let bottom = this.getFullY()

        let counter = 0

        while (counter <= numberOfPointGroupsX) {

            x -= this.gapX

            this.grid.southWest.push(this.createGroupOfPoints(x, top, false, [x, bottom], false, false, true, color, width))

            counter++
        }

        this.drawPaths(this.grid.southWest)
    }

    drawPaths(GroupsOfPoints: any) {

        GroupsOfPoints.forEach((path) => {

            if (!path.isDraw) {

                this.layer.beginPath()

                if (path.centerBase) {
                    this.centerBase(path)
                }

                if (path.connectToBase) {
                    this.layer.moveTo(path.base.x, path.base.y)
                }

                this.layer.strokeStyle = path.color

                this.layer.lineWidth = path.width

                path.points.forEach((point: { x: any; y: any; }) => {

                    let x = 0
                    let y = 0

                    if (point.x == 'half') {
                        x = this.getHalfX()
                    } else if (point.x == 'full') {
                        x = this.getFullX();
                    } else {
                        x = point.x
                    }

                    if (point.y == 'half') {
                        y = this.getHalfY();
                    } else if (point.y == 'full') {
                        y = this.getFullY();
                    } else {
                        y = point.y
                    }

                    if (path.addToBase) {
                        this.layer.lineTo(path.base.x + x, path.base.y + y)
                    } else if (path.subtractToBase) {

                    } else {
                        this.layer.lineTo(x, y)
                    }
                })

                this.layer.stroke()

                path.isDraw = true;
            }
        })
    }

    draw() {

        this.drawCoordinateAxes()

        this.drawGrid()
    }

    createGroupOfPoints(
        x: number,
        y: number,
        centerBase: boolean,
        points: any[],
        addToBase: boolean,
        subtractToBase: boolean,
        connectToBase: boolean,
        color: any,
        width: number
    ) {

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
        }

        for (let index = 0; index < points.length;) {

            let x = points[index]

            index++

            let y = points[index]

            group.points.push({ x: x, y: y });
            // group.points.push({ x: x, y: y, shiftX: 0, shiftY: 0, shiftFromBase: true, shiftisShift: false });

            index++
        }

        return group;
    }

    swapVariables() {

    }

    syncToBase() {

    }
}