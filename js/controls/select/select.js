function createSelect(id, options) {

    let select = document.createElement('select');
    
    select.name = element.name;

    options.forEach((option) => {

        select.appendChild(createOption(option.text, option.type));

    });

    return select;
}