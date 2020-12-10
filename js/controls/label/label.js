function createLabelElement(element) {

    let label = document.createElement(element.element);

    label.id = element.id;

    label.setAttribute('for', element.for);

    label.textContent = element.text;

    return label;

}