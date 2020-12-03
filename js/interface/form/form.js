{/* Form Attributes */ }

// action
// target
// method
// autocomplete
// novalidate

const listOfAttributes =
    [
        'action',
        'target',
        'method',
        'autocomplete',
        'novalidate'
    ];

function createForm(id, attributes) {

    let form = document.createElement('form');

    form.id = id;

    attributes.ForEach((attribute)=>{
        form.setAttribute(attribute.name, attribute.value);
    });

    return form;
}