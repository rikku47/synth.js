let update = function (params) {
    view.reDraw(params.srcElement.value);
}

let dragObject = undefined;
let isDraggable = false;
let isDrag = false;

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.setAttribute('draggableC', 'true');

    interface.addEventListener("mousedown", drag);

    let canvas = document.getElementById('canvas');

    canvas.setAttribute('ondragover', 'dragover(event)');
}

function updateCoords(event) {

    let att = 'draggableC';

    if (event.srcElement.getAttribute(att) != undefined) {

        dragObject = event.srcElement;

    } else if (event.srcElement.parentNode.getAttribute(att) != undefined) {

        dragObject = event.srcElement.parentNode;

    };

    if (dragObject != undefined) {

        if (
            event.layerY >= dragObject.offsetTop
            & event.layerY <= dragObject.offsetHeight
            & event.layerX >= dragObject.offsetLeft
            & event.layerX <= dragObject.offsetWidth
        ) {
            if (event.srcElement.type != 'range') {
                isDraggable = true;
            };
        }
        else {
            isDraggable = false;
        };
    }

    if(isDrag){
        dragObject.style.left = event.layerX;
        dragObject.style.top = event.layerY;
    }

    output(event);

}

function output(event) {

    console.clear();
    console.log(event);
    console.log(isDraggable);
    console.log(isDrag);
    console.log(lX);
    console.log(lY);
}

function drag(event) {

    isDrag = true;

    output(event);

}

function process(event) {

    output(event);

}

function end(event) {

    isDrag = false;

    output(event);
}


function dragover(event) {

}

function initListeners() {
    document.getElementById('thickness').addEventListener('input', update);
    dragAndDrop();
}

document.addEventListener("DOMContentLoaded", initListeners);
document.addEventListener("mousemove", process);
document.addEventListener("mouseup", end);