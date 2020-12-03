function createOption(id, text, type) {

    let option = document.createElement('option');

    option.id = id;
    option.textContent = text;
    option.value = type;

    return option;
}