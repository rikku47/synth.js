let oscillator1mixer =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 1"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-gain"
            }
            , innerHTML: "Mix"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator1-gain",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain1, "oscillator1-gain-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-gain-fine-tuning"
            }
            , innerHTML: "Mix - Fine - Tuning"
        }
        , {
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
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain1, "oscillator1-gain");
                }
            }
        }
    ]



let oscillator2mixer =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 2"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-gain"
            }
            , innerHTML: "Mix"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator2-gain",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain2, "oscillator2-gain-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-gain-fine-tuning"
            }
            , innerHTML: "Mix - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator2-gain-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain2, "oscillator2-gain");
                }
            }
        }
    ]



let oscillator3mixer =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 3"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-gain"
            }
            , innerHTML: "Mix"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator3-gain",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain3, "oscillator3-gain-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-gain-fine-tuning"
            }
            , innerHTML: "Mix - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator3-gain-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain3, "oscillator3-gain");
                }
            }
        }
    ]



let oscillator4mixer =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 4"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-gain"
            }
            , innerHTML: "Mix"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator4-gain",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain4, "oscillator4-gain-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-gain-fine-tuning"
            }
            , innerHTML: "Mix - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator4-gain-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    gain(params, synthesizerWorkbench.modules.mixer.gain4, "oscillator4-gain");
                }
            }
        }
    ]