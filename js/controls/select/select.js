function createHTMLSelectElement(element) {

    if (element.element != undefined) {

        let select = document.createElement(element.element);

        if (element.name != undefined) {
            select.name = element.name;
        };

        // if(){};

        if (
            element.options != undefined &&
            element.options.length > 0
        ) {
            element.options.forEach((option) => {

                select.appendChild(createHTMLOptionElement(option));

            });
        };

        if (
            element.attributes != undefined &&
            element.attributes.length > 0
        ) {
            element.attributes.forEach((attribute) => {
                select.setAttribute(attribute[0], attribute[1]);
            });
        };

        if (
            element.funcs != undefined &&
            element.funcs.length > 0
        ) {
            element.funcs.forEach((func) => {
                select.addEventListener(func[0], func[1]);
            });
        };

        return select;

    } else {
        return undefined;
    };
};