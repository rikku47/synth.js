let oscillator1 =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 1"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-waveforms"
            }
            , innerHTML: "Waveforms"
        }
        , {
            element: "select",
            properties:
            {
                id: "oscillator1-waveform"
            }
            , innerHTML:
                [
                    {
                        element: "option",
                        properties:
                        {
                            value: "sine"
                        }
                        , innerHTML: "Sine"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "square"
                        }
                        , innerHTML: "Square"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "sawtooth"
                        }
                        , innerHTML: "Sawtooth"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "triangle"
                        }
                        , innerHTML: "Triangle"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "costum"
                        }
                        , innerHTML: "Costum"
                    }
                ]
            , listeners:
            {
                input: (params) => {
                    waveform(params, synthesizerWorkbench.modules.oscillators.oscillator1);
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-frequency"
            }
            , innerHTML: "Frequency"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator1-frequency",
                type: "range",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator1, "oscillator1-frequency-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-frequency-fine-tuning"
            }
            , innerHTML: "Frequency Fine - Tuning"
        }
        , {
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
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator1, "oscillator1-frequency");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-detune"
            }
            , innerHTML: "Detune"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator1-detune",
                type: "range",
                min: "-153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners: {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator1, "oscillator1-detune-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator1-detune-fine-tuning"
            }
            , innerHTML: "Detune - Fine - Tuning"
        }
        , {
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
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator1, "oscillator1-detune");
                }
            }
        }
    ]
    ;



let oscillator2 =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 2"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-waveforms"
            }
            , innerHTML: "Waveforms"
        }
        , {
            element: "select",
            properties:
            {
                id: "oscillator2-waveform"
            }
            , innerHTML:
                [
                    {
                        element: "option",
                        properties:
                        {
                            value: "sine"
                        }
                        , innerHTML: "Sine"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "square"
                        }
                        , innerHTML: "Square"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "sawtooth"
                        }
                        , innerHTML: "Sawtooth"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "triangle"
                        }
                        , innerHTML: "Triangle"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "costum"
                        }
                        , innerHTML: "Costum"
                    }
                ]
            , listeners:
            {
                input: (params) => {
                    waveform(params, synthesizerWorkbench.modules.oscillators.oscillator2);
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-frequency"
            }
            , innerHTML: "Frequency"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator2-frequency",
                type: "range",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator2, "oscillator2-frequency-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-frequency-fine-tuning"
            }
            , innerHTML: "Frequency Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator2-frequency-fine-tuning",
                type: "number",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator2, "oscillator2-frequency");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-detune"
            }
            , innerHTML: "Detune"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator2-detune",
                type: "range",
                min: "-153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners: {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator2, "oscillator2-detune-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator2-detune-fine-tuning"
            }
            , innerHTML: "Detune - Fine - Tuning"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator2-detune-fine-tuning",
                type: "number",
                min: "−153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners:
            {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator2, "oscillator2-detune");
                }
            }
        }
    ]
    ;



let oscillator3 =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 3"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-waveforms"
            }
            , innerHTML: "Waveforms"
        }
        , {
            element: "select",
            properties:
            {
                id: "oscillator3-waveform"
            }
            , innerHTML:
                [
                    {
                        element: "option",
                        properties:
                        {
                            value: "sine"
                        }
                        , innerHTML: "Sine"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "square"
                        }
                        , innerHTML: "Square"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "sawtooth"
                        }
                        , innerHTML: "Sawtooth"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "triangle"
                        }
                        , innerHTML: "Triangle"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "costum"
                        }
                        , innerHTML: "Costum"
                    }
                ]
            , listeners:
            {
                input: (params) => {
                    waveform(params, synthesizerWorkbench.modules.oscillators.oscillator3);
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-frequency"
            }
            , innerHTML: "Frequency"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator3-frequency",
                type: "range",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator3, "oscillator3-frequency-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-frequency-fine-tuning"
            }
            , innerHTML: "Frequency Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator3-frequency-fine-tuning",
                type: "number",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator3, "oscillator3-frequency");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-detune"
            }
            , innerHTML: "Detune"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator3-detune",
                type: "range",
                min: "-153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners: {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator3, "oscillator3-detune-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator3-detune-fine-tuning"
            }
            , innerHTML: "Detune - Fine - Tuning"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator3-detune-fine-tuning",
                type: "number",
                min: "−153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners:
            {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator3, "oscillator3-detune");
                }
            }
        }
    ]
    ;



let oscillator4 =
    [
        {
            element: "h3",
            innerHTML: "Oscillator 4"
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-waveforms"
            }
            , innerHTML: "Waveforms"
        }
        , {
            element: "select",
            properties:
            {
                id: "oscillator4-waveform"
            }
            , innerHTML:
                [
                    {
                        element: "option",
                        properties:
                        {
                            value: "sine"
                        }
                        , innerHTML: "Sine"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "square"
                        }
                        , innerHTML: "Square"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "sawtooth"
                        }
                        , innerHTML: "Sawtooth"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "triangle"
                        }
                        , innerHTML: "Triangle"
                    }
                    , {
                        element: "option",
                        properties:
                        {
                            value: "costum"
                        }
                        , innerHTML: "Costum"
                    }
                ]
            , listeners:
            {
                input: (params) => {
                    waveform(params, synthesizerWorkbench.modules.oscillators.oscillator4);
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-frequency"
            }
            , innerHTML: "Frequency"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator4-frequency",
                type: "range",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator4, "oscillator4-frequency-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-frequency-fine-tuning"
            }
            , innerHTML: "Frequency Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "oscillator4-frequency-fine-tuning",
                type: "number",
                min: "-24000",
                max: "24000",
                step: "0.001",
                value: "440"
            }
            , listeners:
            {
                input: (params) => {
                    frequency(params, synthesizerWorkbench.modules.oscillators.oscillator4, "oscillator4-frequency");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-detune"
            }
            , innerHTML: "Detune"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator4-detune",
                type: "range",
                min: "-153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners: {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator4, "oscillator4-detune-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "oscillator4-detune-fine-tuning"
            }
            , innerHTML: "Detune - Fine - Tuning"
        }
        , {
            element: "input",
            properties:
            {
                id: "oscillator4-detune-fine-tuning",
                type: "number",
                min: "−153600",
                max: "153600",
                step: "1",
                value: "0"
            }
            , listeners:
            {
                input: (params) => {
                    detune(params, synthesizerWorkbench.modules.oscillators.oscillator4, "oscillator4-detune");
                }
            }
        }
    ]
    ;