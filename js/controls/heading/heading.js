function createHeadingElement(element) {

    let heading = document.createElement(element.element);

    heading.id = element.id;
    heading.name = element.name;

    if(element.text.length > 0){
        heading.textContent = element.text;
    };

    return heading;

};