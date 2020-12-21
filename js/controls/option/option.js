function createHTMLOptionElement(element) {

    if (element.element != undefined) {

        let option = document.createElement(element.element);

        if(element.id != undefined){
            option.id = element.id;
        };

        if(element.value != undefined){
            option.value = element.value;
        };

        if(element.text != undefined){
            option.textContent = element.text;
        };

        // if(){};

        return option;
        
    } else {
        return undefined;
    };
};