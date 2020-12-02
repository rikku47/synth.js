function createInput(type, id) {
    let input = document.createElement('input');

    input.type = type;
    input.id = id;

    return input;
}

function createSelect() {

    let select = document.createElement('select');

    let options = ['sin', 'cos'];

    options.forEach((type) => {

        let option = document.createElement('option');

        switch (type) {
            case 'cos':
                option.textContent = 'Kosinus';
                break;
        
            default:
                option.textContent = 'Sinus';
                break;
        }
        option.value = type;

        select.appendChild(option);
    });

    return select;
}
function createInterface(params) {

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

function updateVector(x) {
    vector.x = x;
    reDraw();
}

function reDraw() {
    
}