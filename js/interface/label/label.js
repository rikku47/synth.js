function createLabel(id, forr, text) {

    let label = document.createElement('label');

    label.id = id;

    label.setAttribute('for', forr);

    label.textContent = text;

    return label;

}