let update = function (params) {
    view.reDraw(params.srcElement.value);
}

let dragObject = undefined;

let sX = 0;
let sY = 0;

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.setAttribute('data-drag', 'true');

    interface.addEventListener("mousedown", drag);

    // interface.addEventListener('mouseover', register);
    // interface.addEventListener('mouseout', unRegister);
    // interface.setAttribute('ondragstart', 'dragstart(event)');
    // interface.setAttribute('ondrag', 'drag(event)');
    // interface.setAttribute('ondragend', 'dragend(event)');
    // interface.setAttribute('onmousdown', 'updateCoords(event)');

    let canvas = document.getElementById('canvas');

    canvas.setAttribute('ondragover', 'dragover(event)');
}

function updateCoords(event) {

    sX = event.layerX;

    sY = event.layerY;

    if (event.srcElement.getAttribute('data-drag') != undefined) {
        dragObject = event.srcElement;
    } else if (event.srcElement.parentNode.getAttribute('data-drag') != undefined) {
        dragObject = event.srcElement.parentNode;
    };

    output();

}

function output() {

    console.clear();

    console.log(sX);

    console.log(sY);

    console.log(dragObject);
}

function drag(event) {

    
    console.log(event);
    event.stopPropagation();
}

function process(event) {

    // eX = event.clientX - sX;

    // eY = event.clientY - sY;

    // XY(event);

}

function end(event) {

    // XY(event);
}

function XY(event) {
    // document.getElementById('interface').style.left = event.clientX - sX;

    // document.getElementById('interface').style.top = event.clientY - sY;

    console.log(event);
}

function dragover(event) {

    // eX = event.pageX - sX;

    // eY = event.pageY - sY;

    // XY(event);

}

function initListeners() {
    document.getElementById('thickness').addEventListener('input', update);
    dragAndDrop();
}

document.addEventListener("DOMContentLoaded", initListeners);
document.addEventListener("mousemove", process);
document.addEventListener("mouseup", end);