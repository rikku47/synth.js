function changeVolume(params: Event) {
    const html = params.target as HTMLInputElement;
    let value = Number(html.value);
    changeDetune(oscillator1, value);
    let elements = [slDetuneOsc1, nmDetuneOsc1];
    updateHTMLValue(elements, value);
}
