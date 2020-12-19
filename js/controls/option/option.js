function createOptionElement(element) {

    let option = document.createElement(element.element);

    option.id = element.id;
    option.value = element.value;
    option.textContent = element.text;
    
    return option;
}