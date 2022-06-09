let masterVolume =
[
     {
        element: 'label',
        properties:
        {
            for: "master-volume"
        }
        , innerHTML: "Volume"
    }
    , {
        element: 'input',
        properties:
        {
            id: "master-volume",
            type: "range",
            min: "0",
            max: "1",
            step: "0.001",
            value: "0.2"
        }
        , listeners:
        {
            input: (params) => {
                gain(params, synthesizerWorkbench.modules.master.gain, "master-volume-fine-tuning");
            }
        }
    }
    , {
        element: 'label',
        properties:
        {
            for: "master-volume-fine-tuning"
        }
        , innerHTML: "Volume - Fine - Tuning"
    }
    , {
        element: 'input',
        properties:
        {
            id: "master-volume-fine-tuning",
            type: "number",
            min: "0",
            max: "1",
            step: "0.001",
            value: "0.2"
        }
        , listeners:
        {
            input: (params) => {
                gain(params, synthesizerWorkbench.modules.master.gain, "master-volume");
            }
        }
    }
]
;