export function createHTMLAnchorElement(element) {

    if (element.element != undefined) {

        let a = document.createElement(element.element);

        if (element.id != undefined) {
            a.id = element.id;
        };

        if (element.name != undefined) {
            a.name = element.name;
        };

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

    } else {
        return undefined;
    };
};