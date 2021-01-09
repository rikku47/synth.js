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

export function createHTMLFormElement(element) {

    if (element.element != undefined) {

        let form = document.createElement(element.element);

        form.id = id;
    
        attributes.ForEach((attribute)=>{
            form.setAttribute(attribute.name, attribute.value);
        });
    
        return form;

    } else{ 
        return undefined;
    };
};