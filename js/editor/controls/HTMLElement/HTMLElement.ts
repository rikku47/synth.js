class hTMElement {
    constructor(parameters: { id: string; title: string; textContent: any; text: string; css: string[]; contentEditable: string; dir: string; hidden: boolean; innerText: string; lang: string; onabort: (this: GlobalEventHandlers, ev: UIEvent) => any; onanimationcancel: (this: GlobalEventHandlers, ev: AnimationEvent) => any; onanimationend: (this: GlobalEventHandlers, ev: AnimationEvent) => any; onanimationiteration: (this: GlobalEventHandlers, ev: AnimationEvent) => any; onauxclick: (this: GlobalEventHandlers, ev: MouseEvent) => any; onblur: (this: GlobalEventHandlers, ev: FocusEvent) => any; oncancel: (this: GlobalEventHandlers, ev: Event) => any; oncanplay: (this: GlobalEventHandlers, ev: Event) => any; oncanplaythrough: (this: GlobalEventHandlers, ev: Event) => any; onchange: (this: GlobalEventHandlers, ev: Event) => any; onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any; onclose: (this: GlobalEventHandlers, ev: Event) => any; oncontextmenu: (this: GlobalEventHandlers, ev: MouseEvent) => any; oncopy: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any; oncuechange: (this: GlobalEventHandlers, ev: Event) => any; oncut: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any; ondblclick: (this: GlobalEventHandlers, ev: MouseEvent) => any; ondurationchange: (this: GlobalEventHandlers, ev: Event) => any; onended: (this: GlobalEventHandlers, ev: Event) => any; onerror: OnErrorEventHandlerNonNull; onfocus: (this: GlobalEventHandlers, ev: FocusEvent) => any; ongotpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any; oninput: (this: GlobalEventHandlers, ev: Event) => any; oninvalid: (this: GlobalEventHandlers, ev: Event) => any; onkeydown: (this: GlobalEventHandlers, ev: KeyboardEvent) => any; onkeypress: (this: GlobalEventHandlers, ev: KeyboardEvent) => any; onkeyup: (this: GlobalEventHandlers, ev: KeyboardEvent) => any; onload: (this: GlobalEventHandlers, ev: Event) => any; onloadeddata: (this: GlobalEventHandlers, ev: Event) => any; onloadedmetadata: (this: GlobalEventHandlers, ev: Event) => any; onloadstart: (this: GlobalEventHandlers, ev: Event) => any; onlostpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any; onmousedown: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmouseenter: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmouseleave: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmousemove: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmouseout: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmouseover: (this: GlobalEventHandlers, ev: MouseEvent) => any; onmouseup: (this: GlobalEventHandlers, ev: MouseEvent) => any; onpaste: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any; onpause: (this: GlobalEventHandlers, ev: Event) => any; onplay: (this: GlobalEventHandlers, ev: Event) => any; onplaying: (this: GlobalEventHandlers, ev: Event) => any; onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any; onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any; onreset: (this: GlobalEventHandlers, ev: Event) => any; onresize: (this: GlobalEventHandlers, ev: UIEvent) => any; onscroll: (this: GlobalEventHandlers, ev: Event) => any; onselect: (this: GlobalEventHandlers, ev: Event) => any; onselectionchange: (this: GlobalEventHandlers, ev: Event) => any; onselectstart: (this: GlobalEventHandlers, ev: Event) => any; onsubmit: (this: GlobalEventHandlers, ev: Event) => any; ontouchcancel: (this: GlobalEventHandlers, ev: TouchEvent) => any; ontouchstart: (this: GlobalEventHandlers, ev: TouchEvent) => any; ontransitioncancel: (this: GlobalEventHandlers, ev: TransitionEvent) => any; ontransitionend: (this: GlobalEventHandlers, ev: TransitionEvent) => any; onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any }) {

        let html = document.createElement('html')

        if (parameters != undefined) {

            if (parameters.id != undefined) {
                html.id = parameters.id
            }

            if (parameters.title != undefined) {
                html.title = parameters.title
            }

            if (parameters.textContent != undefined) {
                html.textContent = parameters.text
            }

            if (parameters.css != undefined) {
                parameters.css.forEach(
                    (cssClass: string) => {
                        html.classList.add(cssClass)
                    }
                )
            }

            if (parameters.contentEditable != undefined) {
                html.contentEditable = parameters.contentEditable
            }

            if (parameters.dir != undefined) {
                html.dir = parameters.dir
            }

            if (parameters.hidden != undefined) {
                html.hidden = parameters.hidden
            }

            if (parameters.innerText != undefined) {
                html.innerText = parameters.innerText
            }

            if (parameters.lang != undefined) {
                html.lang = parameters.lang
            }

            if (parameters.onabort != undefined) {
                html.onabort = parameters.onabort
            }

            if (parameters.onanimationcancel != undefined) {
                html.onanimationcancel = parameters.onanimationcancel
            }

            if (parameters.onanimationend != undefined) {
                html.onanimationend = parameters.onanimationend
            }

            if (parameters.onanimationiteration != undefined) {
                html.onanimationiteration = parameters.onanimationiteration
            }

            if (parameters.onauxclick != undefined) {
                html.onauxclick = parameters.onauxclick
            }

            if (parameters.onblur != undefined) {
                html.onblur = parameters.onblur
            }

            if (parameters.oncancel != undefined) {
                html.oncancel = parameters.oncancel
            }

            if (parameters.oncanplay != undefined) {
                html.oncanplay = parameters.oncanplay
            }

            if (parameters.oncanplaythrough != undefined) {
                html.oncanplaythrough = parameters.oncanplaythrough
            }

            if (parameters.onchange != undefined) {
                html.onchange = parameters.onchange
            }

            if (parameters.onclick != undefined) {
                html.onclick = parameters.onclick
            }

            if (parameters.onclose != undefined) {
                html.onclose = parameters.onclose
            }

            if (parameters.oncontextmenu != undefined) {
                html.oncontextmenu = parameters.oncontextmenu
            }

            if (parameters.oncopy != undefined) {
                html.oncopy = parameters.oncopy
            }

            if (parameters.oncuechange != undefined) {
                html.oncuechange = parameters.oncuechange
            }

            if (parameters.oncut != undefined) {
                html.oncut = parameters.oncut
            }

            if (parameters.ondblclick != undefined) {
                html.ondblclick = parameters.ondblclick
            }

            if (parameters.ondurationchange != undefined) {
                html.ondurationchange = parameters.ondurationchange
            }

            if (parameters.onended != undefined) {
                html.onended = parameters.onended
            }

            if (parameters.onerror != undefined) {
                html.onerror = parameters.onerror
            }

            if (parameters.onfocus != undefined) {
                html.onfocus = parameters.onfocus
            }

            if (parameters.ongotpointercapture != undefined) {
                html.ongotpointercapture = parameters.ongotpointercapture
            }

            if (parameters.oninput != undefined) {
                html.oninput = parameters.oninput
            }

            if (parameters.oninvalid != undefined) {
                html.oninvalid = parameters.oninvalid
            }

            if (parameters.onkeydown != undefined) {
                html.onkeydown = parameters.onkeydown
            }

            if (parameters.onkeypress != undefined) {
                html.onkeypress = parameters.onkeypress
            }

            if (parameters.onkeyup != undefined) {
                html.onkeyup = parameters.onkeyup
            }

            if (parameters.onload != undefined) {
                html.onload = parameters.onload
            }

            if (parameters.onloadeddata != undefined) {
                html.onloadeddata = parameters.onloadeddata
            }

            if (parameters.onloadedmetadata != undefined) {
                html.onloadedmetadata = parameters.onloadedmetadata
            }

            if (parameters.onloadstart != undefined) {
                html.onloadstart = parameters.onloadstart
            }

            if (parameters.onlostpointercapture != undefined) {
                html.onlostpointercapture = parameters.onlostpointercapture
            }

            if (parameters.onmousedown != undefined) {
                html.onmousedown = parameters.onmousedown
            }

            if (parameters.onmouseenter != undefined) {
                html.onmouseenter = parameters.onmouseenter
            }

            if (parameters.onmouseleave != undefined) {
                html.onmouseleave = parameters.onmouseleave
            }

            if (parameters.onmousemove != undefined) {
                html.onmousemove = parameters.onmousemove
            }

            if (parameters.onmouseout != undefined) {
                html.onmouseout = parameters.onmouseout
            }

            if (parameters.onmouseover != undefined) {
                html.onmouseover = parameters.onmouseover
            }

            if (parameters.onmouseup != undefined) {
                html.onmouseup = parameters.onmouseup
            }

            if (parameters.onpaste != undefined) {
                html.onpaste = parameters.onpaste
            }

            if (parameters.onpause != undefined) {
                html.onpause = parameters.onpause
            }

            if (parameters.onplay != undefined) {
                html.onplay = parameters.onplay
            }

            if (parameters.onplaying != undefined) {
                html.onplaying = parameters.onplaying
            }

            if (parameters.onpointercancel != undefined) {
                html.onpointercancel = parameters.onpointercancel
            }

            if (parameters.onpointerdown != undefined) {
                html.onpointerdown = parameters.onpointerdown
            }

            if (parameters.onpointerenter != undefined) {
                html.onpointerenter = parameters.onpointerenter
            }

            if (parameters.onpointerleave != undefined) {
                html.onpointerleave = parameters.onpointerleave
            }

            if (parameters.onpointermove != undefined) {
                html.onpointermove = parameters.onpointermove
            }

            if (parameters.onpointerout != undefined) {
                html.onpointerout = parameters.onpointerout
            }

            if (parameters.onpointerover != undefined) {
                html.onpointerover = parameters.onpointerover
            }

            if (parameters.onpointerup != undefined) {
                html.onpointerup = parameters.onpointerup
            }

            if (parameters.onreset != undefined) {
                html.onreset = parameters.onreset
            }

            if (parameters.onresize != undefined) {
                html.onresize = parameters.onresize
            }

            if (parameters.onscroll != undefined) {
                html.onscroll = parameters.onscroll
            }

            if (parameters.onselect != undefined) {
                html.onselect = parameters.onselect
            }

            if (parameters.onselectionchange != undefined) {
                html.onselectionchange = parameters.onselectionchange
            }

            if (parameters.onselectstart != undefined) {
                html.onselectstart = parameters.onselectstart
            }

            if (parameters.onsubmit != undefined) {
                html.onsubmit = parameters.onsubmit
            }

            if (parameters.ontouchcancel != undefined) {
                html.ontouchcancel = parameters.ontouchcancel
            }

            if (parameters.ontouchstart != undefined) {
                html.ontouchstart = parameters.ontouchstart
            }

            if (parameters.ontransitioncancel != undefined) {
                html.ontransitioncancel = parameters.ontransitioncancel
            }

            if (parameters.ontransitionend != undefined) {
                html.ontransitionend = parameters.ontransitionend
            }

            if (parameters.onwheel != undefined) {
                html.onwheel = parameters.onwheel
            }

            // Read Only
            // div.isContentEditable = parameters.isContentEditable
            // div.offsetHeight = parameters.offsetHeight
            // div.offsetLeft = parameters.offsetHeight
            // div.offsetParent = parameters.offsetHeight
            // div.offsetTop = parameters.offsetHeight
            // div.offsetWidth = parameters.offsetHeight
        }

        return html
    }
}