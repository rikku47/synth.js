//#region 
//#endregion

//#region Variables

let dragObject = null

let diffX = 0
let diffY = 0

let isDraggable = false
let isDrag = false

let css = 'cm'
let exceptions = ['checkbox', 'range']

let values = []

//#endregion

//#region Functions

function setDraggableAndCss(ev, css, exceptions) {

    isDraggable = true;
    dragObject = ev.currentTarget;

    for (let index = 0; index < exceptions.length; index++) {
        const exeption = exceptions[index]
        if (ev.srcElement.type == exeption) {
            isDraggable = false
        };
    };

    if (isDraggable) {
        if (!ev.currentTarget.classList.contains(css)) {
            ev.currentTarget.classList.add(css)
        }
    } else {
        ev.currentTarget.classList.remove(css)
    };
};

function unSetDraggableAndCss(ev, css) {
    ev.currentTarget.classList.remove(css)
    isDraggable = false
    dragObject = null
};

function startDrag(event) {
    if (isDraggable) {
        isDrag = true
        diffXY(event)
    };
};

function endDrag() {
    isDrag = false
};

function diffXY(event) {
    diffX = event.clientX - dragObject.offsetLeft
    diffY = event.clientY - dragObject.offsetTop
};

function watchCoords(ev, isDrag) {
    if (isDrag) {
        dragObject.style.left = ev.clientX - diffX
        dragObject.style.top = ev.clientY - diffY
    };
};

function dragAndDrop() {

    let interface = document.getElementById('interface');

    interface.addEventListener('mouseover', (ev) => {
        setDraggableAndCss(ev, css, exceptions)
    })

    interface.addEventListener('mouseleave', (ev) => {
        unSetDraggableAndCss(ev, css)
    })

    interface.addEventListener("mousedown", (ev) => {
        startDrag(ev)
    });

    interface.addEventListener("mouseup", (ev) => {
        endDrag();
    })

    document.body.addEventListener("mousemove", (ev) => {
        watchCoords(ev, isDrag)
    })
}

function updateEqualize(event) {

    let value = Number(event.srcElement.value)

    // model.updateSinEq(value);
}

function updateGap(event) {
    console.log(event.srcElement.value)
}

function updateAnimation(event: { data: any }) {
    console.log(event.data)
}

//#endregion

//#region Create elements

function createElement(id: string, type: string, min: string, max: string, value: string) {

    let element = document.createElement('input')

    element.id = id

    element.type = type

    element.min = min

    element.max = max

    element.value = value

    return element
}

//#endregion

let context: AudioContext
let oscillator: OscillatorNode
let type: OscillatorType
let gainN: GainNode


function createContext() {
    context = new AudioContext()
    oscillator = context.createOscillator()
    oscillator.type = "sine"

    gainN = context.createGain()

}

function changeTypeToSine() {
    oscillator.type = 'sine'
}

function changeTypeToSquare() {
    oscillator.type = 'square'
}

function changeTypeToTriangle() {
    oscillator.type = 'triangle'
}

function changeTypeToSawtooth() {
    oscillator.type = 'sawtooth'
}


function createElements() {

    //#region Interface

    let interface = document.createElement('div')

    interface.id = 'interface'

    //#endregion

    // let angle = createElement('angle', 'number', '1', '360', '1')

    let btnStart = document.createElement('button')
    btnStart.textContent = 'Start'
    btnStart.addEventListener('click', () => {

        gainN.gain.value = 1;

        oscillator.connect(gainN)
        gainN.connect(context.destination)
        oscillator.start()
    })

    let btnStop = document.createElement('button')
    btnStop.textContent = 'Stop'
    btnStop.addEventListener('click', () => {

        gainN.gain.value = 0;

        gainN.gain.setValueAtTime(gainN.gain.value, context.currentTime);

        gainN.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.03);
        oscillator.disconnect()
        gainN.disconnect()
    })

    let attack = createElement('attack', 'number', '0', '127', '1')
    let decay = createElement('decay', 'number', '0', '127', '1')
    let sustain = createElement('sustain', 'number', '0', '127', '1')
    let release = createElement('release', 'number', '0', '127', '1')

    // red.addEventListener('input', (ev: any) => {

    //     let value = Number(ev.data) * 360 / 255

    //       changeColor()
    // })

    attack.addEventListener('input', (ev: any) => {
        console.log(Number(ev.data))
    })

    decay.addEventListener('input', (ev: any) => {
        console.log(Number(ev.data))
    })

    sustain.addEventListener('input', (ev: any) => {
        console.log(Number(ev.data))
    })

    release.addEventListener('input', (ev: any) => {
        console.log(Number(ev.data))
    })

    // let btnAddColor = document.createElement('button')
    // btnAddColor.id = 'addColor'
    // btnAddColor.textContent = 'add Color'
    // btnAddColor.addEventListener("click", addColor, false);

    //#region Append at interface

    // interface.appendChild(angle)
    interface.appendChild(btnStart)
    interface.appendChild(btnStop)
    interface.appendChild(attack)
    interface.appendChild(decay)
    interface.appendChild(sustain)
    interface.appendChild(release)

    //#endregion

    document.body.appendChild(interface)

    // steps.addEventListener('input', (ev) => {

    //   let output = document.getElementById('output')

    //   output.textContent = ev.data

    //   svg.calc(Number(ev.data))

    //   svg.draw()

    //   svg.applyVolume()
    // })

}

function initialize() {
    createContext()
    createElements()
    dragAndDrop()
}

//#region Listeners

document.addEventListener("DOMContentLoaded", initialize)

//#endregion