function createHTMLDivElement(parameters) {
    let div = document.createElement('div');
    if (parameters != undefined) {
        if (parameters.id != undefined) {
            div.id = parameters.id;
        }
        if (parameters.title != undefined) {
            div.title = parameters.title;
        }
        if (parameters.textContent != undefined) {
            div.textContent = parameters.text;
        }
        if (parameters.css != undefined) {
            parameters.css.forEach((cssClass) => {
                div.classList.add(cssClass);
            });
        }
        if (parameters.contentEditable != undefined) {
            div.contentEditable = parameters.contentEditable;
        }
        if (parameters.dir != undefined) {
            div.dir = parameters.dir;
        }
        if (parameters.hidden != undefined) {
            div.hidden = parameters.hidden;
        }
        if (parameters.innerText != undefined) {
            div.innerText = parameters.innerText;
        }
        if (parameters.lang != undefined) {
            div.lang = parameters.lang;
        }
        if (parameters.onabort != undefined) {
            div.onabort = parameters.onabort;
        }
        if (parameters.onanimationcancel != undefined) {
            div.onanimationcancel = parameters.onanimationcancel;
        }
        if (parameters.onanimationend != undefined) {
            div.onanimationend = parameters.onanimationend;
        }
        if (parameters.onanimationiteration != undefined) {
            div.onanimationiteration = parameters.onanimationiteration;
        }
        if (parameters.onauxclick != undefined) {
            div.onauxclick = parameters.onauxclick;
        }
        if (parameters.onblur != undefined) {
            div.onblur = parameters.onblur;
        }
        if (parameters.oncancel != undefined) {
            div.oncancel = parameters.oncancel;
        }
        if (parameters.oncanplay != undefined) {
            div.oncanplay = parameters.oncanplay;
        }
        if (parameters.oncanplaythrough != undefined) {
            div.oncanplaythrough = parameters.oncanplaythrough;
        }
        if (parameters.onchange != undefined) {
            div.onchange = parameters.onchange;
        }
        if (parameters.onclick != undefined) {
            div.onclick = parameters.onclick;
        }
        if (parameters.onclose != undefined) {
            div.onclose = parameters.onclose;
        }
        if (parameters.oncontextmenu != undefined) {
            div.oncontextmenu = parameters.oncontextmenu;
        }
        if (parameters.oncopy != undefined) {
            div.oncopy = parameters.oncopy;
        }
        if (parameters.oncuechange != undefined) {
            div.oncuechange = parameters.oncuechange;
        }
        if (parameters.oncut != undefined) {
            div.oncut = parameters.oncut;
        }
        if (parameters.ondblclick != undefined) {
            div.ondblclick = parameters.ondblclick;
        }
        if (parameters.ondurationchange != undefined) {
            div.ondurationchange = parameters.ondurationchange;
        }
        if (parameters.onended != undefined) {
            div.onended = parameters.onended;
        }
        if (parameters.onerror != undefined) {
            div.onerror = parameters.onerror;
        }
        if (parameters.onfocus != undefined) {
            div.onfocus = parameters.onfocus;
        }
        if (parameters.ongotpointercapture != undefined) {
            div.ongotpointercapture = parameters.ongotpointercapture;
        }
        if (parameters.oninput != undefined) {
            div.oninput = parameters.oninput;
        }
        if (parameters.oninvalid != undefined) {
            div.oninvalid = parameters.oninvalid;
        }
        if (parameters.onkeydown != undefined) {
            div.onkeydown = parameters.onkeydown;
        }
        if (parameters.onkeypress != undefined) {
            div.onkeypress = parameters.onkeypress;
        }
        if (parameters.onkeyup != undefined) {
            div.onkeyup = parameters.onkeyup;
        }
        if (parameters.onload != undefined) {
            div.onload = parameters.onload;
        }
        if (parameters.onloadeddata != undefined) {
            div.onloadeddata = parameters.onloadeddata;
        }
        if (parameters.onloadedmetadata != undefined) {
            div.onloadedmetadata = parameters.onloadedmetadata;
        }
        if (parameters.onloadstart != undefined) {
            div.onloadstart = parameters.onloadstart;
        }
        if (parameters.onlostpointercapture != undefined) {
            div.onlostpointercapture = parameters.onlostpointercapture;
        }
        if (parameters.onmousedown != undefined) {
            div.onmousedown = parameters.onmousedown;
        }
        if (parameters.onmouseenter != undefined) {
            div.onmouseenter = parameters.onmouseenter;
        }
        if (parameters.onmouseleave != undefined) {
            div.onmouseleave = parameters.onmouseleave;
        }
        if (parameters.onmousemove != undefined) {
            div.onmousemove = parameters.onmousemove;
        }
        if (parameters.onmouseout != undefined) {
            div.onmouseout = parameters.onmouseout;
        }
        if (parameters.onmouseover != undefined) {
            div.onmouseover = parameters.onmouseover;
        }
        if (parameters.onmouseup != undefined) {
            div.onmouseup = parameters.onmouseup;
        }
        if (parameters.onpaste != undefined) {
            div.onpaste = parameters.onpaste;
        }
        if (parameters.onpause != undefined) {
            div.onpause = parameters.onpause;
        }
        if (parameters.onplay != undefined) {
            div.onplay = parameters.onplay;
        }
        if (parameters.onplaying != undefined) {
            div.onplaying = parameters.onplaying;
        }
        if (parameters.onpointercancel != undefined) {
            div.onpointercancel = parameters.onpointercancel;
        }
        if (parameters.onpointerdown != undefined) {
            div.onpointerdown = parameters.onpointerdown;
        }
        if (parameters.onpointerenter != undefined) {
            div.onpointerenter = parameters.onpointerenter;
        }
        if (parameters.onpointerleave != undefined) {
            div.onpointerleave = parameters.onpointerleave;
        }
        if (parameters.onpointermove != undefined) {
            div.onpointermove = parameters.onpointermove;
        }
        if (parameters.onpointerout != undefined) {
            div.onpointerout = parameters.onpointerout;
        }
        if (parameters.onpointerover != undefined) {
            div.onpointerover = parameters.onpointerover;
        }
        if (parameters.onpointerup != undefined) {
            div.onpointerup = parameters.onpointerup;
        }
        if (parameters.onreset != undefined) {
            div.onreset = parameters.onreset;
        }
        if (parameters.onresize != undefined) {
            div.onresize = parameters.onresize;
        }
        if (parameters.onscroll != undefined) {
            div.onscroll = parameters.onscroll;
        }
        if (parameters.onselect != undefined) {
            div.onselect = parameters.onselect;
        }
        if (parameters.onselectionchange != undefined) {
            div.onselectionchange = parameters.onselectionchange;
        }
        if (parameters.onselectstart != undefined) {
            div.onselectstart = parameters.onselectstart;
        }
        if (parameters.onsubmit != undefined) {
            div.onsubmit = parameters.onsubmit;
        }
        if (parameters.ontouchcancel != undefined) {
            div.ontouchcancel = parameters.ontouchcancel;
        }
        if (parameters.ontouchstart != undefined) {
            div.ontouchstart = parameters.ontouchstart;
        }
        if (parameters.ontransitioncancel != undefined) {
            div.ontransitioncancel = parameters.ontransitioncancel;
        }
        if (parameters.ontransitionend != undefined) {
            div.ontransitionend = parameters.ontransitionend;
        }
        if (parameters.onwheel != undefined) {
            div.onwheel = parameters.onwheel;
        }
        // Read Only
        // div.isContentEditable = parameters.isContentEditable
        // div.offsetHeight = parameters.offsetHeight
        // div.offsetLeft = parameters.offsetHeight
        // div.offsetParent = parameters.offsetHeight
        // div.offsetTop = parameters.offsetHeight
        // div.offsetWidth = parameters.offsetHeight
    }
    return div;
}
