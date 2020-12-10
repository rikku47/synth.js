function createDivElement(element) {
    
    let div = document.createElement(element.type);

    div.id = element.id;
    div.name = element.name;

    if(element.text.length > 0){
        div.textContent = element.text;
    };

    return div;

};