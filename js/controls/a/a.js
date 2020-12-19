function createAElement(element) {

    let a = document.createElement(element.element);

    a.id = element.id;
    a.name = element.name;

    if (
        element.text != undefined &&
        element.text.length > 0
    ) {
        a.textContent = element.text;
    };

    if (
        element.css != undefined &&
        element.css.length > 0
    ) {
        element.css.forEach(
            (cssClass) => {
                a.classList.add(cssClass);
            }
        );
    };

    return a;

};