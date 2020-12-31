class SynthLayer {

    //#region Fields

    private _bottomLeft: boolean;
    private _bottomRight: boolean;
    private _centerCoordinate: boolean;
    private _container: HTMLElement;
    private _gapX: number;
    private _gapY: number;
    private _isCoordinateAxes: boolean;
    private _isGrid: boolean;
    private _isX: boolean;
    private _isY: boolean;
    private _topLeft: boolean;
    private _topRight: boolean;
    private _x: number;
    private _y: number;

    private _layer: any;
    private _paths: any[];

    //#endregion

    //#region Getter Setter

    public get bottomLeft(): boolean {
        return this._bottomLeft;
    }

    public set bottomLeft(value: boolean) {
        this._bottomLeft = value;
    }

    public get bottomRight(): boolean {
        return this._bottomRight;
    }

    public set bottomRight(value: boolean) {
        this._bottomRight = value;
    }

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

    public get topLeft(): boolean {
        return this._topLeft;
    }

    public set topLeft(value: boolean) {
        this._topLeft = value;
    }

    public get topRight(): boolean {
        return this._topRight;
    }

    public set topRight(value: boolean) {
        this._topRight = value;
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
        topLeft = true,
        topRight = true,
        bottomRight = true,
        bottomLeft = true,
        gapX = 30,
        gapY = 30
    ) {
        this.container = container
        this.x = x
        this.y = y
        this.isCenterCoordinate = isCenterCoordinate
        this.isCoordinateAxes = isCoordinateAxes
        this.isGrid = isGrid
        this.topLeft = topLeft
        this.topRight = topRight
        this.bottomRight = bottomRight
        this.bottomLeft = bottomLeft
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
            })

        this.pointGroups.push
            ({
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
            })

        this.pointGroups.push
            ({
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
            })

        this.pointGroups.push
            ({
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
            })

        this.drawPaths()
    }

    drawBarsVertical(width: string | number, height: string | number) {

        let cl: any[] = [];
        let current = this.x
        let floor = 0
        let roof = 0

        let left = true;
        let right = true;

        ({ height, width } = this.setWidthAndHeight(height, width));

        if (left) {
            while (current >= (this.x - width + this.gapX)) {
                current -= this.gapX
                cl.push({
                    x: current,
                    y: floor
                })
            }
        }

        if (right) {
            while (current <= (this.x + width - this.gapX)) {
                current += this.gapX
                cl.push({
                    x: current,
                    y: floor
                })
            }
        }

        this.pointGroups.push
            ({
                connectToBase: false,
                base: {
                    x: this.x,
                    y: this.y,
                },
                points: cl,
                color: 'black',
                width: 1
            })

        this.drawPaths()
    };

    drawBarsHorizontal(width: string | number, height: string | number) {

        let cl: number[]
        let current = this.y
        let right = 0
        let left = 0
        let gap = this.gapY;

        let top = true;
        let down = true;

        ({ height, width } = this.setWidthAndHeight(height, width));

        if (top) {
            while (current >= (this.y - height + this.gapY)) {
                current -= this.gapY
                cl.push(current)
            }
        }

        if (down) {
            while (current <= (this.y + height - this.gapY)) {
                current += this.gapX
                cl.push(current)
            }
        }

        cl.forEach((y) => {
            this.createPath();
        })
    };

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

        if (this.topLeft) {

            this.drawBarsVertical('max', 'max')
            // this.drawBarsHorizontal('max', 'max')
        }

        if (this.topRight) {
            this.drawBarsVertical('max', 'max')
            // this.drawBarsHorizontal('max', 'max')
        }

        if (this.bottomRight) {
            this.drawBarsVertical('max', 'max')
            // this.drawBarsHorizontal('max', 'max')
        }

        if (this.bottomLeft) {
            this.drawBarsVertical('max', 'max')
            // this.drawBarsHorizontal('max', 'max')
        }
    }

    drawPaths() {

        this.pointGroups.forEach((path) => {

            this.layer.beginPath()

            if (path.connectToBase) {
                this.layer.moveTo(path.base.x, path.base.y)
            }

            this.layer.strokeStyle = path.color

            this.layer.lineWidth = path.lineWidth

            path.points.forEach((point: { x: any; y: any; }) => {
                this.layer.lineTo(point.x, point.y)
            })

            this.layer.stroke()
        })
    }

    draw() {

        this.setLayer()

        if (this.isCenterCoordinate) {
            this.centerCoordinate()
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