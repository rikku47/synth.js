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


function createInput(id, type, attributes, funcs) {

    let input = document.createElement('input');

    input.id = id;
    input.type = type;

    attributes.forEach((attribute) => {
        input.setAttribute(attribute[0], attribute[1]);
    });

    funcs.forEach((func) => {
        input.addEventListener(func[0], func[1]);
    });

    return input;
}