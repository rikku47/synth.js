let isSine = true;
let isCos = false;
let isSquare = false;
let isTriangle = false;
let isSaw = false;

let isGrid = true;

let canvasWidth = 360;
let canvasHeight = 400;

let canvasGridStrokeColor = '#00B0FF';
let canvasStrokeColor = '#FF00C8';

let canvasStrokeThickness = 10;

let xStart = 0;
let yStart = 200;

let factor = 100;

let stepWidth = 20;
let stepHeight = 20;

function createPoint(x, y) {
    return {
        x: x,
        y: y
    };
}

function parseNoteValues(){
    return JSON.parse('notevalues.js');
}

function setStartPoint(x, y) {

}

function sineWave() {

    var points = [];

    for (let index = 0; index <= 360; index++) {
        let value = Math.sin(index * Math.PI / 180);
        points.push(createPoint(index, value));
    };

    return points;
}

function cosinusWave() {

    var points = [];

    for (let index = 0; index <= 360; index++) {
        let value = Math.cos(index * Math.PI / 180);
        points.push(createPoint(index, value));
    }

    return points;
}

function square() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        if (index == 0) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 180) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

        } else if (index == 360) {

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200
            };

            points.push(point);

        }
    }

    return points;
}

function saw() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        if (index == 0) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 180) {

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 360) {

            var point = {
                x: index,
                y: 200 - 100
            };
            points.push(point);

            var point = {
                x: index,
                y: 200
            };

            points.push(point);

        }
    }

    return points;
}

function triangle() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        var point = {
            x: index,
            y: 200
        };

        points.push(point);

    }

    return points;

}

function createOsc() {

    let types = ['sine', 'square', 'triangle', 'sawtooth'];

    const osc = document.createElement('div');

    const select = document.createElement('select');

    types.forEach(type => {

        let option = document.createElement('option');

        option.value = type;
        option.textContent = type;

        select.appendChild(option);
    });

    osc.appendChild(select);

    return osc;
}

function createInterface() {

    let interface = document.createElement('div');

    interface.appendChild(createOsc());
    interface.appendChild(createCanvas(canvasWidth, canvasHeight));

    // const buttonStart = document.createElement('button');
    // const buttonStop = document.createElement('button');

    // buttonStart.textContent = 'Start';
    // buttonStop.textContent = 'Stop';

    // div.appendChild(buttonStart);
    // div.appendChild(buttonStop);

    // div.appendChild(drawSineWave());

    return interface;
}

function appendInterface() {
    
    let nv = parseNoteValues();

    let interface = createInterface();

    let wrapper = document.getElementById('synth');

    wrapper.appendChild(interface);

    let context = interface.children[1].getContext("2d");

    if (isGrid) {

        context.beginPath();

        context.strokeStyle = canvasGridStrokeColor;

        gridVerticalLines().forEach(point => {
            context.moveTo(point.x, 0);
            context.lineTo(point.x, canvasHeight);
        });

        gridHorizontalLines().forEach(point => {
            context.moveTo(0, point.y);
            context.lineTo(canvasWidth, point.y);
        });

        context.stroke();
    }

    if (isSine) {

        context.beginPath();

        context.moveTo(xStart, yStart);
        context.strokeStyle = canvasStrokeColor;

        sineWave().forEach(point => {
            context.lineTo(point.x, yStart + (factor * point.y));
        });

        context.stroke();

    }

    if (isCos) {

        context.beginPath();

        context.moveTo(xStart, yStart);
        context.strokeStyle = canvasStrokeColor;

        cosinusWave().forEach(point => {
            context.lineTo(point.x, yStart + (factor * point.y));
        });

        context.stroke();

    }

    if (isSquare) {

        ontext.beginPath();

        context.moveTo(xStart, yStart);
        context.strokeStyle = canvasStrokeColor;

        square().forEach(point => {
            context.lineTo(point.x, point.y);
        });

        context.stroke();

    }

    if (isSaw) {

        context.beginPath();

        context.moveTo(xStart, yStart);
        context.strokeStyle = canvasStrokeColor;

        saw().forEach(point => {
            context.lineTo(point.x, point.y);
        });

        context.stroke();

    }
}

appendInterface();