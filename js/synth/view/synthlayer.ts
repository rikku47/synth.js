class SynthLayer {

    //#region Fields

    private _centerCoordinate: boolean;
    private _container: HTMLElement;
    private _gapX: number;
    private _gapY: number;
    private _isCoordinateAxes: boolean;
    private _isGrid: boolean;
    private _isX: boolean;
    private _isY: boolean;
    private _northWest: boolean;
    private _northEast: boolean;
    private _southEast: boolean;
    private _southWest: boolean;
    private _x: number;
    private _y: number;

    private _layer: any;
    private _paths: any[];

    //#endregion

    //#region Getter Setter

    public get isCenterCoordinate(): boolean {
        return this._centerCoordinate;
    }

    public set isCenterCoordinate(value: boolean) {
        this._centerCoordinate = value;
    }

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

    public get isCoordinateAxes(): boolean {
        return this._isCoordinateAxes;
    }

    public set isCoordinateAxes(value: boolean) {
        this._isCoordinateAxes = value;
    }

    public get isGrid(): boolean {
        return this._isGrid;
    }

    public set isGrid(value: boolean) {
        this._isGrid = value;
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

    public get northWest(): boolean {
        return this._northWest;
    }

    public set northWest(value: boolean) {
        this._northWest = value;
    }

    public get northEast(): boolean {
        return this._northEast;
    }

    public set northEast(value: boolean) {
        this._northEast = value;
    }

    public get southWest(): boolean {
        return this._southWest;
    }

    public set southWest(value: boolean) {
        this._southWest = value;
    }

    public get southEast(): boolean {
        return this._southEast;
    }

    public set southEast(value: boolean) {
        this._southEast = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

    public get layer(): any {
        return this._layer;
    }

    public set layer(value: any) {
        this._layer = value;
    }

    public get pointGroups(): any[] {
        return this._paths;
    }
    public set pointGroups(value: any[]) {
        this._paths = value;
    }

    //#endregion

    constructor(
        container: HTMLElement,
        x = 0,
        y = 0,
        isCenterCoordinate = true,
        isCoordinateAxes = true,
        isGrid = true,
        northWest = true,
        northEast = true,
        southEast = true,
        southWest = true,
        gapX = 30,
        gapY = 30
    ) {
        this.container = container
        this.x = x
        this.y = y
        this.isCenterCoordinate = isCenterCoordinate
        this.isCoordinateAxes = isCoordinateAxes
        this.isGrid = isGrid
        this.northWest = northWest
        this.northEast = northEast
        this.southEast = southEast
        this.southWest = southWest
        this.gapX = gapX
        this.gapY = gapY
        this.createLayer('layer0')
        this.pointGroups = [];
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

    centerCoordinate() {
        this.x = this.layer.canvas.clientWidth / 2
        this.y = this.layer.canvas.clientHeight / 2
    }

    drawCoordinateAxes() {

        this.pointGroups.push
            ({
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
            })

        this.pointGroups.push
            ({
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
            })

        this.pointGroups.push
            ({
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
            })

        this.pointGroups.push
            ({
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
            })

        this.drawPaths()
    }

    drawBarsVerticalNorthWest(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.x
        let floor = this.y
        let roof = floor - height


        while (current >= (this.x - width + this.gapX)) {

            current -= this.gapX

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsVerticalNorthEast(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.x
        let floor = this.y
        let roof = floor - height

        while (current <= (this.x + width - this.gapX)) {

            current += this.gapX

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsVerticalSouthEast(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.x
        let floor = this.y
        let roof = floor + height

        while (current <= (this.x + width - this.gapX)) {

            current += this.gapX

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsVerticalSouthWest(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.x
        let floor = this.y
        let roof = floor + height

        while (current >= (this.x - width + this.gapX)) {

            current -= this.gapX

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsHorizontalNorthWest(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.y
        let right = this.x
        let left = this.x - width


        while (current >= (this.y - height + this.gapY)) {

            current -= this.gapY

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsHorizontalNorthEast(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.y
        let right = this.x + width
        let left = this.x


        while (current >= (this.y - height + this.gapY)) {

            current -= this.gapY

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsHorizontalSouthEast(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.y
        let right = this.x + width
        let left = this.x


        while (current <= (this.y + height - this.gapY)) {

            current += this.gapY

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    drawBarsHorizontalSouthWest(width: string | number, height: string | number) {

        ({ height, width } = this.setWidthAndHeight(height, width));

        let current = this.y
        let right = this.x
        let left = this.x - width


        while (current <= (this.y + height - this.gapY)) {

            current += this.gapY

            this.pointGroups.push
                ({
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
                })
        }

        this.drawPaths()
    }

    private setWidthAndHeight(height: string | number, width: string | number) {
        if (height == 'max') {
            height = this.y
        }

        if (width == 'max') {
            width = this.x
        }

        width = Number(width)
        height = Number(height)

        return { height, width }
    }

    drawGrid() {

        //              x   y   legend  inverse index
        // LeftTop      -   +   1       3       0
        // RightTop     +   +   2       4       1
        // RightBottom  +   -   3       1       2
        // LeftBottom   -   -   4       2       3

        if (this.northWest) {

            this.drawBarsVerticalNorthWest('max', 'max')
            this.drawBarsHorizontalNorthWest('max', 'max')
        }

        if (this.northEast) {
            this.drawBarsVerticalNorthEast('max', 'max')
            this.drawBarsHorizontalNorthEast('max', 'max')
        }

        if (this.southEast) {
            this.drawBarsVerticalSouthEast('max', 'max')
            this.drawBarsHorizontalSouthEast('max', 'max')
        }

        if (this.southWest) {
            this.drawBarsVerticalSouthWest('max', 'max')
            this.drawBarsHorizontalSouthWest('max', 'max')
        }
    }

    drawPaths() {

        this.pointGroups.forEach((path) => {

            if (!path.isDraw) {

                this.layer.beginPath()

                if (path.connectToBase) {
                    this.layer.moveTo(path.base.x, path.base.y)
                }

                this.layer.strokeStyle = path.color

                this.layer.lineWidth = path.width

                path.points.forEach((point: { x: any; y: any; }) => {
                    this.layer.lineTo(point.x, point.y)
                })

                this.layer.stroke()

                path.isDraw = true;
            }
        })
    }

    draw() {

        this.setLayer()

        if (this.isCenterCoordinate) {
            this.centerCoordinate()
        }

        if (this.isCoordinateAxes) {
            this.drawCoordinateAxes()
        }

        if (this.isGrid) {
            this.drawGrid()
        }
    }

    createPath() {

    }

    swapVariables() {

    }

    syncToBase() {

    }
}