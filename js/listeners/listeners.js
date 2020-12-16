let update = function (params) {
    view.reDraw(params.srcElement.value);
};

let dragObject = undefined;

let diffX = 0;
let diffY = 0;

let isDraggable = false;
let isDrag = false;

function updateCoords(event) {

    let att = 'drag';

    dragObject = getDragObject(event, att);

    let over = isOver(event, dragObject, ['checkbox', 'range']);

    if (over) {
        console.log('glowOn');
    } else {
        console.log('glowOff');
    };

    if (dragObject != undefined) {

        if (isDrag) {

            if (
                event.srcElement.type != 'range' &&
                event.srcElement.type != 'checkbox'
            ) {
                // dragObject.style.left = event.clientX - diffX;
                // dragObject.style.top = event.clientY - diffY;

                dragObject.style.left = event.clientX - diffX;
                dragObject.style.top = event.clientY - diffY;
            };
        };
    };
};

function getDragObject(event, att) {

    let srcElement = event.srcElement;
    let compare = undefined;

    if (srcElement.getAttribute(att) != compare) {
        return srcElement;
    };

    if (srcElement.parentNode.getAttribute(att) != compare) {
        return srcElement.parentNode;
    };
};

function isOver(event, object, exceptions) {

    let over = false;

    if (
        event != undefined &&
        object != undefined &&
        event.layerY >= object.offsetTop &&
        event.layerY <= object.offsetHeight &&
        event.layerX >= object.offsetLeft &&
        event.layerX <= object.offsetWidth
    ) {
        if (exceptions != undefined) {
            exceptions.some((exeption) => {
                if (event.srcElement.type == exeption) {
                    return false;
                } else {
                    return true;
                };
            });
        };
    };
};

function drag(event) {
    isDrag = true;
    diffXY(event);
};

function diffXY(event) {
    diffX = event.clientX - dragObject.offsetLeft;
    diffY = event.clientY - dragObject.offsetTop;
};

function end() {
    isDrag = false;
};

function output(event) {

    console.clear();
    console.log(dragObject);
    console.log(event);
    console.log(event.clientX + " " + event.clientY);
    console.log(dragObject.offsetLeft + " " + dragObject.offsetTop);
    console.log(diffX + " " + diffY);
};

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.setAttribute('drag', 'true');
    interface.addEventListener("mousedown", drag);
    interface.addEventListener("mouseup", end);

    let canvas = document.getElementById('canvas');

    // canvas.setAttribute('ondragover', 'dragover(event)');

    document.body.addEventListener("mousemove", updateCoords);
};

function initListeners() {
    dragAndDrop();
};

document.addEventListener("DOMContentLoaded", initListeners);