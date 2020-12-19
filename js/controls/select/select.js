function createSelectElement(element) {

    let select = document.createElement(element.element);

    select.name = element.name;

    if (
        element.options != undefined &&
        element.options.length > 0
    ){
        element.options.forEach((option) => {

            select.appendChild(createOptionElement(option));

        });
    };

    return select;
}