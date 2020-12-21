function createHTMLTextareaElement(element) {

    if (element.element != undefined) {

        let textarea = document.createElement(element.element);

        if (element.id != undefined) {
            textarea.id = element.id;
        };

        // if () {};

        return textarea;

    } else {
        return undefined;
    };
};