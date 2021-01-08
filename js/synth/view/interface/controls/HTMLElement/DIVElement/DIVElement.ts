export function createHTMLDivElement(parameters) {

    if (parameters != undefined) {

        let div = document.createElement('div')

        div.contentEditable = parameters.contentEditable
        div.dir = parameters.dir
        div.hidden = parameters.hidden
        div.innerText = parameters.
        div.isContentEditable = parameters.
        div.lang = parameters.
        div.offsetHeight = parameters.
        div.offsetLeft = parameters.
        div.offsetParent = parameters.
        div.offsetTop = parameters.
        div.offsetWidth = parameters.
        div.onabort = parameters.
        div.onanimationcancel = parameters.
        div.onanimationend = parameters.
        div.onanimationiteration = parameters.
        div.onauxclick = parameters.
        div.onblur = parameters.
        div.oncancel = parameters.
        div.oncanplay = parameters.
        div.oncanplaythrough = parameters.
        div.onchange = parameters.
        div.onclick = parameters.
        div.onclose = parameters.
        div.oncontextmenu = parameters.
        div.oncopy = parameters.
        div.oncuechange = parameters.
        div.oncut = parameters.
        div.ondblclick = parameters.
        div.ondurationchange = parameters.
        div.onended = parameters.
        div.onerror = parameters.
        div.onfocus = parameters.
        div.ongotpointercapture = parameters. 
        div.oninput = parameters.
        div.oninvalid = parameters.
        div.onkeydown = parameters.
        div.onkeypress = parameters.
        div.onkeyup = parameters.
        div.onload = parameters.parameters.
        div.onloadeddata = parameters.
        div.onloadedmetadata = parameters.
        div.onloadstart = parameters.
        div.onlostpointercapture = parameters.
        div.onmousedown = parameters.
        div.onmouseenter = parameters.
        div.onmouseleave = parameters.
        div.onmousemove = parameters.
        div.onmouseout = parameters.
        div.onmouseover = parameters.
        div.onmouseup = parameters.
        div.onpaste = parameters.
        div.onpause = parameters.
        div.onplay = parameters.
        div.onplaying = parameters.
        div.onpointercancel = parameters.onpointercancel
        div.onpointerdown = parameters.onpointerdown
        div.onpointerenter = parameters.onpointerenter
        div.onpointerleave =parameters.onpointerleave
        div.onpointermove = parameters.onpointermove
        div.onpointerout = parameters.onpointerout
        div.onpointerover = parameters.onpointerover
        div.onpointerup = parameters.onpointerup
        div.onreset = parameters.onreset
        div.onresize = parameters.onresize
        div.onscroll = parameters.onscroll
        div.onselect = parameters.onselect
        div.onselectionchange = parameters.onselectionchange
        div.onselectstart = parameters.onselectstart
        div.onsubmit = parameters.onsubmit
        div.ontouchcancel = parameters.ontouchcancel
        div.ontouchstart = parameters.ontouchstart
        div.ontransitioncancel = parameters.ontransitioncancel
        div.ontransitionend = parameters.ontransitionend
        div.onwheel = parameters.onwheel
        div.title = parameters.title
        if (parameters.id != undefined) {
            div.id = parameters.id
        }

        if (
            parameters.text != undefined &&
            parameters.text.length > 0
        ) {
            div.textContent = parameters.text
        }

        if (
            parameters.css != undefined &&
            parameters.css.length > 0
        ) {
            parameters.css.forEach(
                (cssClass: string) => {
                    div.classList.add(cssClass)
                }
            )
        }

        return div
    }
}