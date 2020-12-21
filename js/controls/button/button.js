function createHTMLButtonElement(element) {

    if (element.element != undefined) {

        let button = document.createElement(element.element);

        if (element.name != undefined) {
            button.name = element.name;
        };

        return button;

    } else {
        return undefined;
    };
};