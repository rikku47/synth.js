{/* Input Types */ }

// button
// checkbox
// color
// date
// datetime-local
// email
// file
// hidden
// image
// month
// number
// password
// radio
// range
// reset
// search
// submit
// tel
// text
// time
// url
// week

const listOfTypes =
    [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
    ];

{/* Input Attributes */ }

// value
// readonly
// disabled
// size
// maxlength
// min
// max
// multiple
// pattern
// placeholder
// required
// step
// autofocus
// height
// width
// list
// autocomplete

const listOfAttributes =
    [
        'value',
        'readonly',
        'disabled',
        'size',
        'maxlength',
        'min',
        'max',
        'multiple',
        'pattern',
        'placeholder',
        'required',
        'step',
        'autofocus',
        'height',
        'width',
        'list',
        'autocomplete'
    ];

function createInputElement(element) {

    let input = document.createElement('input');

    input.id = element.id;
    input.type = element.type;
    input.name = element.name;

    element.attributes.forEach((attribute) => {
        input.setAttribute(attribute[0], attribute[1]);
    });

    element.funcs.forEach((func) => {
        input.addEventListener(func[0], func[1]);
    });

    return input;
}