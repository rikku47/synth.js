let canvas = {};

let baseVector = { x: 0, y: 0 };

let vector = { x: 0, y: 0 };

let centerVector = true;

let grid = { topLeft: true, topRight: true, bottomRight: true, bottomLeft: true, gapY: 30, gapX: 30 };

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

function drawCoords(ctx, vector, coords, equalize, rasterize) {

    let count = 0;

    ctx.beginPath();

    coords.forEach((coord) => {

        if(count % rasterize == 0){

            ctx.moveTo(vector.x + coord.x, vector.y + coord.y);

            drawVector(ctx, vector, coord, equalize, 'magenta', 1);

        };

        count++;
    });
}

function drawVector(ctx = null, vector0, vector1, equalize, color = 'black', thickness = 4) {

    if (ctx != null) {

        ctx.fillStyle = color;

        let x = 0;
        let y = 0;

        if (vector0.x == vector1.x & vector0.y == vector1.y) {

            x = vector0.x - thickness;

            y = vector0.y - thickness;

        } else {

            x = vector0.x + vector1.x - thickness;

            y = vector0.y + vector1.y * equalize - thickness;

        }

        thick = thickness * 2;

        ctx.fillRect(x, y, thick, thick);
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

    let ctx = canvas.getContext('2d');

    if (centerVector) {
        setVectorToCenter(ctx, baseVector);
    };

    drawGrid(ctx, baseVector);

    drawCoordinateAxes(ctx, baseVector);

    let equalize = 1;

    drawVector(ctx, baseVector, baseVector, equalize);

    let startX = 0;
    let endX = 360;

    // let strokeStyle = 'black';

    // let close = false;
    // let fill = false;

    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }

    let coords = [];

    equalize = 90;

    let rasterize = 4;

    for (let currentX = startX; currentX <= endX; currentX++) {

        coords.push({ x: currentX, y: Math.sin(currentX * Math.PI / 180) });

    };

    drawCoords(ctx, baseVector, coords, equalize, rasterize);

    // let coordsCoSine = [];

    // for (let currentX = 0; currentX <= endX; index++) {

    //     coordsCoSine.push({ x: currentX, y: cos(currentX * Math.PI / 180)});

    // };
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