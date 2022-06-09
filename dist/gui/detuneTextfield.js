let detune =
{
    element: "input",
    properties:
    {
        id: "oscillator1-detune-fine-tuning",
        type: "number",
        min: "−153600",
        max: "153600",
        step: "1",
        value: "0"
    }
    , listeners:
    {
        input: osc1Detune
    }
}
    ;