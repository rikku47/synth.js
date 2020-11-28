let canvas = {};

let vector = { x: 0, y: 0 };

let baseVector = { x: 0, y: 0 };

let grid = { topLeft: true, topRight: true, bottomRight: true, bottomLeft: true, gapY: 40, gapX: 40 };

function setPositionToCenter(canvas) {
    vector.x = canvas.width / 2;
    vector.y = canvas.height / 2;
}

function createCoordinateAxes(canvas = null, middle = true) {

    if (canvas != null) {
        if (middle) {
            setPositionToCenter(canvas);
        }

        let ctx = canvas.getContext('2d');

        ctx.moveTo(vector.x, vector.y);
        ctx.lineTo(0, vector.y);

        // ctx.beginPath();
        ctx.moveTo(vector.x, vector.y);
        ctx.lineTo(canvas.width, vector.y);

        // ctx.beginPath();
        ctx.moveTo(vector.x, vector.y);
        ctx.lineTo(vector.x, 0);

        // ctx.beginPath();
        ctx.moveTo(vector.x, vector.y);
        ctx.lineTo(vector.x, canvas.height);

        ctx.stroke();
    }
}

function createGrid(canvas) {

    function createQuadrant(isPos0, isPos1) {

        if (isPos0 == false & isPos1 == true) {

            while (vector.x > 0) {
                vector.x -= grid.gapX;

                ctx.moveTo(vector.x, vector.y);
                ctx.lineTo(vector.x, 0);
            };

            setPositionToCenter(canvas);
        }

        if (isPos0 == true & isPos1 == true) {

            while (vector.x < canvas.width) {
                vector.x += grid.gapX;

                ctx.moveTo(vector.x, vector.y);
                ctx.lineTo(vector.x, 0);
            };

            setPositionToCenter(canvas);
        }

        if (isPos0 == true & isPos1 == false) {

            while (vector.x < canvas.width) {
                vector.x += grid.gapX;

                ctx.moveTo(vector.x, vector.y);
                ctx.lineTo(vector.x, canvas.height);
            };

            setPositionToCenter(canvas);
        }

        if (isPos0 == false & isPos1 == false) {

            while (vector.x > 0) {
                vector.x -= grid.gapX;

                ctx.moveTo(vector.x, vector.y);
                ctx.lineTo(vector.x, canvas.height);
            };

            setPositionToCenter(canvas);
        }

        ctx.stroke();
    }

    // vector.y = yEdgeBottom;

    // while (vector.y > yEdgeTop) {

    //     vector.y -= grid.gapY;

    //     ctx.moveTo(vector.x, vector.y);
    //     ctx.lineTo(0, vector.y);
    // }

    // setPositionToCenter(canvas);

    // ctx.stroke();

    let ctx = canvas.getContext('2d');

    // LeftTop -+
    // RightTop ++
    // RightBottom +-
    // LeftBottom --

    if (grid.topLeft) {
        createQuadrant(false, true);
    }

    if (grid.topRight) {
        createQuadrant(true, true);
    }

    if (grid.bottomRight) {
        createQuadrant(true, false);
    }

    if (grid.bottomLeft) {
        createQuadrant(false, false);
    }
}

function resetCanvas(id) {
    let canvas = document.getElementById(id).children[0];
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(id) {

    let y = canvas.height / 2;
    let factor = 120;
    let strokeStyle = 'blue';
    let func = Math.sin;

    drawFunction(canvas, x, y, factor, strokeStyle, func);

    element.appendChild(canvas);

    function drawFunction(canvas, x, y, factor, strokeStyle, func) {

        let ctx = canvas.getContext('2d');

        ctx.strokeStyle = strokeStyle;

        ctx.moveTo(x, y);

        ctx.beginPath();

        while (x < canvas.width) {

            ctx.lineTo(x, y + func(x * Math.PI / 180) * factor);
            x++;
        };

        ctx.stroke();
    }
}

function initialize() {

    let id = 'canvas';

    let canvasCointainer = document.getElementById(id);

    let canvas = document.createElement('canvas');

    canvasCointainer.appendChild(canvas);

    canvas.width = canvasCointainer.clientWidth;
    canvas.height = canvasCointainer.clientHeight;

    createCoordinateAxes(canvas);

    createGrid(canvas);


    // let backgroundcolor = 'black';

    // let drawTopYArea = true;
    // let drawBottomYArea = true;

    // let gapY = 40;
    // let lineWidthY = 1;
    // let strokeStyleY = 'magenta';

    // let drawLeftXArea = true;
    // let drawRightXArea = true;

    // let gapX = 40;
    // let lineWidthX = 1;
    // let strokeStyleX = 'lightblue';


    // let input = document.createElement('input');

    // input.id = 'x';
    // input.addEventListener('change', () => {

    //     resetCanvas(id);
    //     draw(id, input.value);
    // });

    // let form = document.getElementById('form');

    // form.appendChild(input);

    // draw(id);
}

// document.addEventListener("DOMContentLoaded", draw(id));
document.addEventListener("DOMContentLoaded", initialize);