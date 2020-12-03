function createSelect(id, options) {

    let select = document.createElement('select');

    options.forEach((option) => {

        select.appendChild(createOption(option.text, option.type));

    });

    return select;
}