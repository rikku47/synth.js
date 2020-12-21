{
    /* Input Types */
}

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

const listOfTypes = [
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

{
    /* Input Attributes */
}

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

const listOfAttributes = [
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

function createHTMLInputElement(element) {

    if (element.element != undefined) {

        let input = document.createElement(element.element);

        if (element.id != undefined) {
            input.id = element.id;
        };

        if (element.type != undefined) {
            input.type = element.type;
        };

        if (element.name != undefined) {
            input.name = element.name;
        };


        if (element.value != undefined) {
            input.value = element.value;
        };

        if (
            element.attributes != undefined &&
            element.attributes.length > 0
        ) {
            element.attributes.forEach((attribute) => {
                input.setAttribute(attribute[0], attribute[1]);
            });
        };

        if (
            element.funcs != undefined &&
            element.funcs.length > 0
        ) {
            element.funcs.forEach((func) => {
                input.addEventListener(func[0], func[1]);
            });
        };

        return input;

    } else {
        return undefined;
    };
};