// class Grid {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     createCanvas(width, height) {

//         let canvas = document.createElement('canvas');

//         //  default width 300 pixels and height 150 pixels.
//         canvas.width = width;
//         canvas.height = height;

//         return canvas;
//     }
// }
function createCanvas(width, height, backgroundcolor, gapY, lineWidthY, strokeStyleY, drawTopYArea, drawBottomYArea, gapX, lineWidthX, strokeStyleX, drawLeftXArea, drawRightXArea) {

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    canvas.style.background = backgroundcolor;

    let canvasMiddleX = canvas.width / 2;
    let canvasMiddleY = canvas.height / 2;

    let x = canvasMiddleX;
    let y = canvasMiddleY;



    ctx.lineWidth = lineWidthY;
    ctx.strokeStyle = strokeStyleY;


    if (drawTopYArea) {

        ctx.beginPath();

        while (y > 0) {

            y -= gapY;

            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        }

        ctx.stroke();
    }

    y = canvasMiddleY;



    if (drawBottomYArea) {

        ctx.beginPath();

        while (y < canvas.height) {

            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);

            y += gapY;
        }

        ctx.stroke();
    }

    y = canvasMiddleY;



    ctx.lineWidth = lineWidthX;
    ctx.strokeStyle = strokeStyleX;



    if (drawLeftXArea) {

        ctx.beginPath();

        while (x > 0) {

            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);

            x -= gapX;
        }

        ctx.stroke();
    }

    x = canvasMiddleX;



    if (drawRightXArea) {

        ctx.beginPath();

        while (x < canvas.width) {

            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);

            x += gapX;
        }

        ctx.stroke();
    }

    x = canvasMiddleX;

    return canvas;
}

function drawSineWave(canvas, x, y, factor, strokeStyle) {

    let ctx = canvas.getContext('2d');

    ctx.strokeStyle = strokeStyle;

    ctx.beginPath();

    ctx.moveTo(x, y);

    while (x < canvas.width) {
        let newY = y + Math.sin(x * Math.PI / 180) * factor;
        ctx.lineTo(x, newY);
        x++;
    };

    ctx.stroke();
}

function drawCosinusWave(canvas, x, y, factor, strokeStyle) {

    let ctx = canvas.getContext('2d');

    ctx.strokeStyle = strokeStyle;

    ctx.beginPath();

    ctx.moveTo(x, y);

    while (x < canvas.width) {
        let newY = y + Math.cos(x * Math.PI / 180) * factor;
        ctx.lineTo(x, newY);
        x++;
    };

    ctx.stroke();
}

function draw() {

    let body = document.body;

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;

    let backgroundcolor = 'black';

    let drawTopYArea = true;
    let drawBottomYArea = true;

    let gapY = 40;
    let lineWidthY = 1;
    let strokeStyleY = 'magenta';

    let drawLeftXArea = true;
    let drawRightXArea = true;

    let gapX = 40;
    let lineWidthX = 1;
    let strokeStyleX = 'lightblue';

    let canvas = createCanvas(width, height, backgroundcolor, gapY, lineWidthY, strokeStyleY, drawTopYArea, drawBottomYArea, gapX, lineWidthX, strokeStyleX, drawLeftXArea, drawRightXArea);
    
    let SineXStart = 0;
    let SineYStart = canvas.height / 2;
    let factorSine = 120;
    let strokeStyleSine = 'red';

    drawSineWave(canvas, SineXStart, SineYStart, factorSine, strokeStyleSine);

    let CosXStart = 0;
    let CosYStart = canvas.height / 2;
    let factorCos = 120;
    let strokeStyleCos = 'blue';

    drawCosinusWave(canvas, CosXStart, CosYStart, factorCos, strokeStyleCos);

    body.appendChild(canvas);

}

document.addEventListener("DOMContentLoaded", draw);