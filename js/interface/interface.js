function createForm() {

    let container = document.createElement('div');
    container.classList.add('container');

    let h1 = document.createElement('h1');
    h1.textContent = 'Eigenschaften';

    let update = function (range) {

        let value = range.srcElement.value;

        synth.reDraw(value);
    };

    let inputs = [
        {
            id: 'number',
            type: 'range',
            attributes: [['min', '0'], ['max', '360'], ['step', '1'], ['value', '0']],
            funcs: [['input', update]],
            container: false,
            label: false
        },
        {
            id: 'number0',
            type: 'range',
            attributes: [['min', '0'], ['max', '360'], ['step', '1'], ['value', '0']],
            funcs: [['input', update]],
            container: false,
            label: false
        },
    ];

    function createInputs(inputs) {

        let inputsC = [];

        inputs.forEach((input)=>{

            if(input.container) {
                let div = document.createElement('div');
            };

            if(input.label){
                let label = createLabel('lblNumber', 'h1', 'Grad');
            };

            inputsC.push(createInput(input));

        });

        return inputsC;
    };

    let textarea = createTextarea('textarea');

    container.appendChild(h1);
    container.appendChild(textarea);

    createInputs(inputs).forEach((input)=>{
        container.appendChild(input);
    });

    document.body.appendChild(container);
}

function createInterface() {
    createForm();
}