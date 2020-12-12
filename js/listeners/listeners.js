let update = function (params) {
    view.reDraw(params.srcElement.value);
}

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.setAttribute('draggable', 'true');
    interface.setAttribute('ondragstart', 'dragstart(event)');
    interface.setAttribute('ondrag', 'drag(event)');
    interface.setAttribute('ondragend', 'dragend(event)');
    interface.setAttribute('onmousdown', 'updateCoords(event)');

    let canvas = document.getElementById('canvas');

    canvas.setAttribute('ondragover', 'dragover(event)');
}

let sX = 0;
let sY = 0;
let eX = 0;
let eY = 0;

function dragstart(event) {

    sX = event.layerX;

    sY = event.layerY;

    event.dataTransfer.setDragImage(document.createElement('img'), sX, sX);
}

function drag(event) {

    eX = event.clientX - sX;

    eY = event.clientY - sY;

    XY(event);

}

function dragend(event) {

    XY(event);
}

function XY(event) {
    document.getElementById('interface').style.left = event.clientX - sX;

    document.getElementById('interface').style.top = event.clientY - sY;
}

function dragover(event) {
    // eX = event.clientX;
    // eY = event.clientY;
}

function updateCoords(event) {
    // sX = event.layerX;
    // sY = event.layerY;
}

function initListeners() {
    document.getElementById('thickness').addEventListener('input', update);
    dragAndDrop();
}

document.addEventListener("DOMContentLoaded", initListeners);