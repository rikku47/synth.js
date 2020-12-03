let canvas = {};

let vector = { x: 0, y: 0 };

let centerVector = true;

let baseVector = { x: 0, y: 0 };

let grid = { topLeft: true, topRight: true, bottomRight: true, bottomLeft: true, gapY: 30, gapX: 30 };

function setVectorToCenter(ctx) {
    vector.x = ctx.canvas.width / 2;
    vector.y = ctx.canvas.height / 2;
}

function drawLine(ctx, x1, y1, x2, y2, color = 'black', lineWidth = 1) {

    ctx.beginPath();

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color;

    ctx.lineWidth = lineWidth;

    ctx.stroke();

}

function drawCoordinateAxes(ctx = null) {

    if (ctx != null) {

        drawLine(ctx, vector.x, vector.y, 0, vector.y, 'red', 2);

        drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'blue', 2);

        drawLine(ctx, vector.x, vector.y, vector.x, 0, 'green', 2);

        drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'magenta', 2);
    }
}

function drawGrid(ctx = null) {

    //              x   y   legend  inverse
    // LeftTop      -   +   1       3
    // RightTop     +   +   2       4
    // RightBottom  +   -   3       1
    // LeftBottom   -   -   4       2

    function createQuadrant(quadrant, drawBars) {

        if (quadrant == 1) {

            while (vector.x > 0) {

                vector.x -= grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, 0, 'black');
            };

            setVectorToCenter(ctx);

            while (vector.y > 0) {

                vector.y -= grid.gapY;

                drawLine(ctx, vector.x, vector.y, 0, vector.y, 'black');
            };

            setVectorToCenter(ctx);
        }

        if (quadrant == 2) {

            while (vector.x < ctx.canvas.width) {

                vector.x += grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, 0, 'black');
            };

            setVectorToCenter(ctx);

            while (vector.y > 0) {

                vector.y -= grid.gapY;

                drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'black');
            };

            setVectorToCenter(ctx);
        }

        if (quadrant == 3) {

            while (vector.x < ctx.canvas.width) {

                vector.x += grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'black');
            };

            setVectorToCenter(ctx);
        }

        if (quadrant == 4) {

            while (vector.x > 0) {

                vector.x -= grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, 0, vector.y, 'black');
            };

            setVectorToCenter(ctx);
        }
    }

    if (ctx != null) {

        if (grid.topLeft) {

            createQuadrant(1);
        }

        if (grid.topRight) {

            createQuadrant(2);
        }

        if (grid.bottomRight) {

            createQuadrant(3);
        }

        if (grid.bottomLeft) {

            createQuadrant(4);
        }
    }
}

function resetCanvas(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawFunction(ctx, x, y, func, factor, strokeStyle) {

    let fValues = [];

    for (let index = 0; index <= 360; index++) {

        let fValue = { x: index, value: func(index * Math.PI / 180) };

        fValues.push(fValue);
    }

    ctx.moveTo(x, y);

    ctx.beginPath();

    fValues.forEach((fValue) => {
        ctx.lineTo(x, y + fValue.value * factor);
        x++;
    })

    ctx.strokeStyle = strokeStyle;

    ctx.stroke();

    return fValues;
}

function drawVector(ctx = null) {

    if (ctx != null) {

        ctx.fillStyle = "blue";

        ctx.fillRect(vector.x - 4, vector.y - 4, 8, 8);
    }
}

function initialize() {

    let id = 'canvas';

    let canvasCointainer = document.getElementById(id);

    let canvas = document.createElement('canvas');

    canvas.width = canvasCointainer.clientWidth;
    canvas.height = canvasCointainer.clientHeight;

    canvasCointainer.appendChild(canvas);

    let ctx = canvas.getContext('2d');

    if (centerVector) {
        setVectorToCenter(ctx);
    };

    drawGrid(ctx, true);

    drawCoordinateAxes(ctx);

    drawVector(ctx);

    let factor = 90;
    let strokeStyle = 'black';
    let func = Math.sin;

    let values = drawFunction(ctx, vector.x, vector.y, func, factor, strokeStyle);

    let ulValues = document.getElementById('values');

    values.forEach((value) => {

        let li = document.createElement('li');

        li.value = value.value;
        li.textContent = 'X-/ bzw. Winkel in Grad ' + value.x + ': ' + value.value;

        ulValues.appendChild(li);
    });

    // func = Math.cos;

    // values = drawFunction(ctx, vector.x, vector.y, func, factor, strokeStyle);

    // values.forEach((value) => {

    //     let li = document.createElement('li');

    //     li.value = value.value;
    //     li.textContent = 'X-/ bzw. Winkel in Grad ' + value.x + ': ' + value.value;

    //     ulValues.appendChild(li);
    // });

}