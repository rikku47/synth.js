let update = function (params) {
    view.reDraw(params.srcElement.value);
}

let dragObject = undefined;

let diffX = 0;
let diffY = 0;

let isDraggable = false;
let isDrag = false;

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.setAttribute('draggableC', 'true');
    interface.addEventListener("mousedown", drag);
    interface.addEventListener("mouseup", end);

    let canvas = document.getElementById('canvas');

    // canvas.setAttribute('ondragover', 'dragover(event)');
    document.body.addEventListener("mousemove", updateCoords);
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
            event.layerY >= dragObject.offsetTop &
            event.layerY <= dragObject.offsetHeight &
            event.layerX >= dragObject.offsetLeft &
            event.layerX <= dragObject.offsetWidth
        ) {
            if (event.srcElement.type != 'range') {
                isDraggable = true;
            };
        } else {
            isDraggable = false;
        };
    }

    if (isDrag) {
        if (
            event.srcElement.type != 'range' &&
            event.srcElement.type != 'checkbox'
        ) {
            dragObject.style.left = event.clientX - diffX;
            dragObject.style.top = event.clientY - diffY;
        };
    };

    output(event);

}

function output(event) {

    console.clear();
    console.log(dragObject);
    console.log(event);
    console.log(event.clientX + " " + event.clientY);
    console.log(dragObject.offsetLeft + " " + dragObject.offsetTop);
    console.log(diffX + " " + diffY);
}

function drag(event) {

    isDrag = true;

    diffX = event.clientX - dragObject.offsetLeft;
    diffY = event.clientY - dragObject.offsetTop;

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
    // document.getElementById('thickness').addEventListener('input', update);
    dragAndDrop();
}

document.addEventListener("DOMContentLoaded", initListeners);