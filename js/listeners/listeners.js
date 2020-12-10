let update = function (params) {
    view.reDraw(params.srcElement.value);
}

function initListeners() {
    document.getElementById('thickness').addEventListener('input', update);
}

document.addEventListener("DOMContentLoaded", initListeners);