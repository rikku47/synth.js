export function createHTMLHeadingElement(element) {

    if (element.element != undefined) {

        let heading = document.createElement(element.element);

        if (element.id != undefined) {
            heading.id = element.id;
        };

        if (element.name != undefined) {
            heading.name = element.name;
        };

        if (element.text.length > 0) {
            heading.textContent = element.text;
        };

        return heading;

    } else {
        return undefined;
    };
};