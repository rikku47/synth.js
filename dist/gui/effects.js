let distortion =
    [
        {
            element: "h3",
            innerHTML: "Distortion"
        }
        , {
            element: 'label',
            properties:
            {
                for: "distortion-wet-dry"
            }
            , innerHTML: "Wet - Dry"
        }
        , {
            element: 'input',
            properties:
            {
                id: "distortion-wet-dry",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setDistortion(params, synthesizerWorkbench.modules.effects.distortion, "distortion-wet-dry-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "distortion-wet-dry-fine-tuning"
            }
            , innerHTML: "Wet - Dry - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "distortion-wet-dry-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setDistortion(params, synthesizerWorkbench.modules.effects.distortion, "distortion-wet-dry");
                }
            }
        }
    ]
    ;



let delay =
    [
        {
            element: "h3",
            innerHTML: "Delay"
        }
        , {
            element: 'label',
            properties:
            {
                for: "delay-wet-dry"
            }
            , innerHTML: "Wet - Dry"
        }
        , {
            element: 'input',
            properties:
            {
                id: "delay-wet-dry",
                type: "range",
                min: "0",
                max: "179.999",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setDelay(params, synthesizerWorkbench.modules.effects.delay, "delay-wet-dry-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "delay-wet-dry-fine-tuning"
            }
            , innerHTML: "Wet - Dry - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "delay-wet-dry-fine-tuning",
                type: "number",
                min: "0",
                max: "179.999",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setDelay(params, synthesizerWorkbench.modules.effects.delay, "delay-wet-dry");
                }
            }
        }
    ]
    ;



let reverb =
    [
        {
            element: "h3",
            innerHTML: "Reverb"
        }
        , {
            element: 'label',
            properties:
            {
                for: "reverb-wet-dry"
            }
            , innerHTML: "Wet - Dry"
        }
        , {
            element: 'input',
            properties:
            {
                id: "reverb-wet-dry",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setEffect(params, synthesizerWorkbench.modules.effects.reverb, "reverb-wet-dry-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "reverb-wet-dry-fine-tuning"
            }
            , innerHTML: "Wet - Dry - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "reverb-wet-dry-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.0"
            }
            , listeners:
            {
                input: (params) => {
                    setEffect(params, synthesizerWorkbench.modules.effects.reverb, "reverb-wet-dry");
                }
            }
        }
    ]
    ;