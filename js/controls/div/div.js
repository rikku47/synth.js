function createHTMLDivElement(element) {

    if (element.element != undefined) {

        let div = document.createElement(element.element);

        if (element.id != undefined) {
            div.id = element.id;
        };

        if (element.name != undefined) {
            div.name = element.name;
        };

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

    } else {
        return undefined;
    };
};