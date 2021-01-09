export function createHTMLLabelElement(element) {

    if (element.element != undefined) {

        let label = document.createElement(element.element);

        if (element.id != undefined) {
            label.id = element.id;
        };

        if (element.for != undefined) {
            label.setAttribute('for', element.for);
        };

        if (element.text != undefined) {
            label.textContent = element.text;
        };

        return label;

    } else {
        return undefined;
    };
};