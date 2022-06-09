let volume =
[
    {
        element: "h3",
        innerHTML: "Volume"
    }
    , {
        element: 'label',
        properties:
        {
            for: "volume-gain"
        }
        , innerHTML: "Mix"
    }
    , {
        element: 'input',
        properties:
        {
            id: "volume-gain",
            type: "range",
            min: "0",
            max: "1",
            step: "0.001",
            value: "0.5"
        }
        , listeners:
        {
            
        }
    }
    , {
        element: 'label',
        properties:
        {
            for: "volume-gain-fine-tuning"
        }
        , innerHTML: "Mix - Fine - Tuning"
    }
    , {
        element: 'input',
        properties:
        {
            id: "volume-gain-fine-tuning",
            type: "number",
            min: "0",
            max: "1",
            step: "0.001",
            value: "0.5"
        }
        , listeners:
        {
            
        }
    }
]
;