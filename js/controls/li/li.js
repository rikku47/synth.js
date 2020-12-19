function createLiElement(element) {

    let li = document.createElement(element.element);

    li.id = element.id;
    li.name = element.name;

    if (
        element.text != undefined &&
        element.text.length > 0
    ) {
        li.textContent = element.text;
    };

    if (
        element.css != undefined &&
        element.css.length > 0
    ) {
        element.css.forEach(
            (cssClass) => {
                li.classList.add(cssClass);
            }
        );
    };

    return li;

};