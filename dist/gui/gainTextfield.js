let txtGain =
{
    element: 'input',
    properties:
    {
        id: "oscillator1-gain-fine-tuning",
        type: "number",
        min: "0",
        max: "1",
        step: "0.001",
        value: "0.3"
    }
    , listeners:
    {
        input: getValue,
        // parameters: ["value"]
    }
}
    ;