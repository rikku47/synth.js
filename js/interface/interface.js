function inputObject() {

    let func = function () {
        console.log('Hello World...');
    };

    let object = {
        id: 'number',
        type: 'range',
        attributes: [['min', '0'], ['max', '360']],
        funcs: [['input', func]]
    };

    return object;
}

function createOverview() {

    let form = document.getElementById('form');

    let xCoord = createInput('number', 'xCoord');
    let yCoord = createInput('number', 'yCoord');

    let h1 = document.createElement('h1');

    h1.textContent = 'Funktion und die dazugehörigen Werte'

    let select = createSelect();

    let list = document.createElement('ul');

    list.id = 'values';

    // form.appendChild(xCoord);
    // form.appendChild(yCoord);
    form.appendChild(h1);
    form.appendChild(select);
    form.appendChild(list);
}

function createEditor() {

    let container = document.createElement('div');
    container.classList.add('container');

    let options = [];

    let inputObj = inputObject();

    let input = createInput(inputObj.id, inputObj.type, inputObj.attributes, inputObj.funcs);

    // container.appendChild(createSelect('voices', options));
    // container.appendChild(createTextarea('output'));
    container.appendChild(input);

    document.body.appendChild(container);
}

function createInterface(params) {

    // createOverview();

    createEditor();
}

// function updateVector(x) {
//     vector.x = x;
//     reDraw();
// }

// function reDraw() {

// }