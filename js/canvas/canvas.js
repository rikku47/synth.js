let canvasC = {
    baseVector: { x: 0, y: 0 },
    centerVector: true,
    ctx: null,
    endX: 360,
    equalize: 90,
    functions: { sine: true, cos: true },
    grid: { topLeft: true, topRight: true, bottomRight: true, bottomLeft: true, gapY: 30, gapX: 30 },
    increment: 1,
    startX: 0
};

function setVectorToCenter(ctx, vector) {
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

function drawCoordinateAxes(ctx = null, vector) {

    if (ctx != null) {

        drawLine(ctx, vector.x, vector.y, 0, vector.y, 'red', 2);

        drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'blue', 2);

        drawLine(ctx, vector.x, vector.y, vector.x, 0, 'green', 2);

        drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'magenta', 2);
    }
}

function drawGrid(ctx = null, vector) {

    //              x   y   legend  inverse
    // LeftTop      -   +   1       3
    // RightTop     +   +   2       4
    // RightBottom  +   -   3       1
    // LeftBottom   -   -   4       2

    function createQuadrant(quadrant, vector, drawBars) {

        if (quadrant == 1) {

            while (vector.x > 0) {

                vector.x -= grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, 0, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y > 0) {

                vector.y -= grid.gapY;

                drawLine(ctx, vector.x, vector.y, 0, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }

        if (quadrant == 2) {

            while (vector.x < ctx.canvas.width) {

                vector.x += grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, 0, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y > 0) {

                vector.y -= grid.gapY;

                drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }

        if (quadrant == 3) {

            while (vector.x < ctx.canvas.width) {

                vector.x += grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, ctx.canvas.width, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }

        if (quadrant == 4) {

            while (vector.x > 0) {

                vector.x -= grid.gapX;

                drawLine(ctx, vector.x, vector.y, vector.x, ctx.canvas.height, 'black');
            };

            setVectorToCenter(ctx, vector);

            while (vector.y < ctx.canvas.height) {

                vector.y += grid.gapY;

                drawLine(ctx, vector.x, vector.y, 0, vector.y, 'black');
            };

            setVectorToCenter(ctx, vector);
        }
    }

    if (ctx != null) {

        if (grid.topLeft) {

            createQuadrant(1, vector);
        }

        if (grid.topRight) {

            createQuadrant(2, vector);
        }

        if (grid.bottomRight) {

            createQuadrant(3, vector);
        }

        if (grid.bottomLeft) {

            createQuadrant(4, vector);
        }
    }
}

function drawFunction(ctx, vector, currentX, endX, increment, equalize, func) {

    if (currentX <= endX) {
        let y = 0;

        if (func == 0) {
            y = Math.sin(currentX * Math.PI / 180) * equalize;
        }
        if (func == 1) {
            y = Math.cos(currentX * Math.PI / 180) * equalize;
        }

        drawVector(ctx, vector, { x: currentX, y: y }, true, 'magenta', 1);

        currentX += increment;

        drawFunction(ctx, vector, currentX, endX, increment, equalize, func);
    }
}

function drawVector(ctx = null, vector0, vector1, isRelative, color = 'black', thickness = 4) {

    if (ctx != null) {

        let tempVector = { x: vector0.x, y: vector0.y };

        ctx.fillStyle = color;

        if (isRelative) {

            tempVector.x += vector1.x;

            tempVector.y += vector1.y;

        } else {

            tempVector.x = vector1.x;

            tempVector.y = vector1.y;

        }

        tempVector.x -= thickness;

        tempVector.y -= thickness;

        thick = thickness * 2;

        ctx.beginPath();

        ctx.fillRect(tempVector.x, tempVector.y, thick, thick);
    }
}

function resetCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function initialize() {

    let id = 'canvasContainer';

    let canvasCointainer = document.getElementById(id);

    let canvas = document.createElement('canvas');

    canvas.id = 'canvas';

    canvas.width = canvasCointainer.clientWidth;
    canvas.height = canvasCointainer.clientHeight;

    canvasCointainer.appendChild(canvas);

    canvasC.ctx = canvas.getContext('2d');

    if (centerVector) {
        setVectorToCenter(canvasC.ctx, canvasC.baseVector);
    };

    drawGrid(canvasC.ctx, canvasC.baseVector);

    drawCoordinateAxes(canvasC.ctx, canvasC.baseVector);

    drawVector(canvasC.ctx, canvasC.baseVector, canvasC.baseVector, false, 'black', 4);

    if (canvasC.functions.sine) {
        drawFunction(canvasC.ctx, canvasC.baseVector, startX, endX, increment, equalize, 0);
    };

    if (canvasC.functions.cos) {
        drawFunction(ctx, baseVector, startX, endX, increment, equalize, 1);
    };
}

function reDraw(totalDegree) {

    let canvas = document.getElementById('canvas');

    let ctx = canvas.getContext('2d');

    resetCanvas(ctx);

    if (centerVector) {
        setVectorToCenter(ctx, baseVector);
    };

    drawGrid(ctx, baseVector);

    drawCoordinateAxes(ctx, baseVector);

    let equalize = 1;

    drawVector(ctx, baseVector, baseVector, equalize);

    let coords = [];

    let startX = 0;
    equalize = 90;
    let rasterize = 4;

    for (let currentX = startX; currentX <= totalDegree; currentX++) {

        coords.push({ x: currentX, y: Math.sin(currentX * Math.PI / 180) });

    };

    drawCoords(ctx, baseVector, coords, equalize, rasterize);
}