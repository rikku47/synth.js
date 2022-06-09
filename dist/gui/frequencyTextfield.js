let txtFrequency =
{
    element: 'input',
    properties:
    {
        id: "oscillator1-frequency-fine-tuning",
        type: "number",
        min: "-24000",
        max: "24000",
        step: "0.001",
        value: "440"
    }
    , listeners:
    {
        input: undefined
    }
}
    ;