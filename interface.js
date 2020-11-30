function createInput() {
    let input = document.createElement('input');

    input.type = 'number';
    input.id = 'start';

    let select = document.createElement('select');
    
    select.addEventListener('select', ()=>{
        console.log(value);
    });

    let optionS = document.createElement('option');

    optionS.value = 'sine';
    optionS.textContent = 'Sinus'

    let optionC = document.createElement('option');

    optionC.value = 'cosine';
    optionC.textContent = 'Kosinus';

    select.appendChild(optionS);
    select.appendChild(optionC);

    let form = document.getElementById('form');

    form.appendChild(input);
    form.appendChild(select);
}

document.addEventListener("DOMContentLoaded", createInput);