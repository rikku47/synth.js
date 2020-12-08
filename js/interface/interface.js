function createInputObject(id, type, attributes, funcs) {

    let object = {
        id: id,
        type: type,
        attributes: attributes,
        funcs: funcs
    };

    return object;
}

function createForm() {

    let container = document.createElement('div');
    container.classList.add('container');

    let h1 = document.createElement('h1');

    h1.textContent = 'Eigenschaften';

    let label = createLabel('lblNumber', 'h1', 'Grad');

    let update = function (range) {

        let value = range.srcElement.value;

        let textarea = document.getElementById('textarea');

        textarea.textContent = value;

        synth.reDraw(value);
    };

    let id = 'number';
    let type = 'range';
    let attributes = [['min', '0'], ['max', '360'], ['step', '1'],['value', '0']];
    let funcs = [['input', update]];

    let inputObj = createInputObject(id, type, attributes, funcs);

    let input = createInput(inputObj.id, inputObj.type, inputObj.attributes, inputObj.funcs);

    let textarea = createTextarea('textarea');

    container.appendChild(h1);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(textarea);

    document.body.appendChild(container);
}

function createInterface() {
    createForm();
}