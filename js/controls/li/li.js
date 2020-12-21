function createHTMLLiElement(element) {

    if (element.element != undefined) {

        let li = document.createElement(element.element);

        if(element.id != undefined){
            li.id = element.id;
        };

        if(element.name != undefined){
            li.name = element.name;
        };

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

    } else {
        return undefined;
    };
};