export function createHTMLUlElement(element) {

    if (element.element != undefined) {

        let ul = document.createElement(element.element);

        if ( element.id) {
            ul.id = element.id;
        };

        if (element.name) {
            ul.name = element.name;
        };

        // if () {};
    
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

    } else{ 
        return undefined;
    };
};