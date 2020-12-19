function createUlElement(element) {

    let ul = document.createElement(element.element);

    ul.id = element.id;
    ul.name = element.name;

    if (
        element.text != undefined &&
        element.text.length > 0
    ) {
        ul.textContent = element.text;
    };

    if (
        element.css != undefined &&
        element.css.length > 0
    ) {
        element.css.forEach(
            (cssClass) => {
                ul.classList.add(cssClass);
            }
        );
    };

    return ul;

};