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

    if (isDrag && dragObject != undefined) {

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

function getDragObject(event, att) {

    let element = event.srcElement;
    let compare = undefined;

    if (!isDrag && !isDraggable && element.getAttribute(att) != compare &&
        isOver(event, element, ['checkbox', 'range'])) {

        isDraggable = true;
        dragObject = element;
        element.classList.toggle("bg");

    } else if (!isDrag && !isDraggable && element.parentNode != compare) {

        let currentObject = element.parentNode;

        do {

            if (currentObject.getAttribute(att) != compare &&
                isOver(event, currentObject, ['checkbox', 'range'])) {

                isDraggable = true;
                dragObject = currentObject;
                dragObject.classList.toggle("bg");

            } else if (currentObject.parentNode != compare) {

                currentObject = currentObject.parentNode;

            };

        } while (!isDraggable);
    } else if (!isDrag && isDraggable && !isOver(event, dragObject, ['checkbox', 'range'])) {
        dragObject.classList.toggle("bg");
        dragObject = undefined;
        isDraggable = false;
        console.log('Not isDraggable');
    };

    return dragObject;
};

function isOver(event, object, exceptions) {

    let over = false;

    if (
        event != undefined &&
        object != undefined &&
        event.clientY >= object.offsetTop &&
        event.clientY <= object.offsetHeight &&
        event.clientX >= object.offsetLeft &&
        event.clientX <= object.offsetWidth
    ) {
        over = true;

        if (exceptions != undefined) {
            exceptions.some((exeption) => {
                if (event.srcElement.type == exeption) {
                    over = false;
                };
            });
        };
    };

    return over;
};

function drag(event) {
    isDrag = true;
    diffXY(event);
};

function end() {
    isDrag = false;
};

function diffXY(event) {
    diffX = event.clientX - dragObject.offsetLeft;
    diffY = event.clientY - dragObject.offsetTop;
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