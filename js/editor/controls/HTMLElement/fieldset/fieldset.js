export function createHTMLFieldSetElement(element) {

    if (element.element != undefined) {

        let fieldset = document.createElement(element.element);

        if (element.id != undefined) {
            fieldset.id = element.id;
        };

        return fieldset;

    } else {
        return undefined;
    };
};