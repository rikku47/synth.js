function createDivElement(element) {

    let div = document.createElement(element.element);

    div.id = element.id;
    div.name = element.name;

    if (
        element.text != undefined &&
        element.text.length > 0
    ) {
        div.textContent = element.text;
    };

    if (
        element.css != undefined &&
        element.css.length > 0
    ) {
        element.css.forEach(
            (cssClass) => {
                div.classList.add(cssClass);
            }
        );
    };

    return div;

};