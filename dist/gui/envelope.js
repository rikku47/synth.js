let attack =
    [
        {
            element: "h3",
            innerHTML: "Attack"
        }
        , {
            element: 'label',
            properties:
            {
                for: "attack-time"
            }
            , innerHTML: "Time"
        }
        , {
            element: 'input',
            properties:
            {
                id: "attack-time",
                type: "range",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.attack, "attack-time-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "attack-time-fine-tuning"
            }
            , innerHTML: "Time - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "attack-time-fine-tuning",
                type: "number",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.attack, "attack-time");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "attack-amplitude"
            }
            , innerHTML: "Amplitude"
        }
        , {
            element: 'input',
            properties:
            {
                id: "attack-amplitude",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "1"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.attack, "attack-amplitude-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "attack-amplitude-fine-tuning"
            }
            , innerHTML: "Amplitude - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "attack-amplitude-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "1"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.attack, "attack-amplitude");
                }
            }
        }
    ]
    ;



let decay =
    [
        {
            element: "h3",
            innerHTML: "Decay"
        }
        , {
            element: 'label',
            properties:
            {
                for: "decay-time"
            }
            , innerHTML: "Time"
        }
        , {
            element: 'input',
            properties:
            {
                id: "decay-time",
                type: "range",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.decay, "decay-time-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "decay-time-fine-tuning"
            }
            , innerHTML: "Time - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "decay-time-fine-tuning",
                type: "number",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.decay, "decay-time");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "decay-amplitude"
            }
            , innerHTML: "Amplitude"
        }
        , {
            element: 'input',
            properties:
            {
                id: "decay-amplitude",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.5"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.decay, "decay-amplitude-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "decay-amplitude-fine-tuning"
            }
            , innerHTML: "Amplitude - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "decay-amplitude-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.5"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.decay, "decay-amplitude");
                }
            }
        }
    ]
    ;



let sustain =
    [
        {
            element: "h3",
            innerHTML: "Sustain"
        }
        , {
            element: 'label',
            properties:
            {
                for: "sustain-time"
            }
            , innerHTML: "Time"
        }
        , {
            element: 'input',
            properties:
            {
                id: "sustain-time",
                type: "range",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.sustain, "sustain-time-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "sustain-time-fine-tuning"
            }
            , innerHTML: "Time - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "sustain-time-fine-tuning",
                type: "number",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.sustain, "sustain-time");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "sustain-amplitude"
            }
            , innerHTML: "Amplitude"
        }
        , {
            element: 'input',
            properties:
            {
                id: "sustain-amplitude",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.5"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.sustain, "sustain-amplitude-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "sustain-amplitude-fine-tuning"
            }
            , innerHTML: "Amplitude - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "sustain-amplitude-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0.5"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.sustain, "sustain-amplitude");
                }
            }
        }
    ]
    ;



let release =
    [
        {
            element: "h3",
            innerHTML: "Release"
        }
        , {
            element: 'label',
            properties:
            {
                for: "release-time"
            }
            , innerHTML: "Time"
        }
        , {
            element: 'input',
            properties:
            {
                id: "release-time",
                type: "range",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.release, "release-time-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "release-time-fine-tuning"
            }
            , innerHTML: "Time - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "release-time-fine-tuning",
                type: "number",
                min: "0",
                max: "16",
                step: "0.001",
                value: "0.3"
            }
            , listeners:
            {
                input: (params) => {
                    setTime(params, synthesizerWorkbench.modules.envelope.timeTable.release, "release-time");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "release-amplitude"
            }
            , innerHTML: "Amplitude"
        }
        , {
            element: 'input',
            properties:
            {
                id: "release-amplitude",
                type: "range",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.release, "release-amplitude-fine-tuning");
                }
            }
        }
        , {
            element: 'label',
            properties:
            {
                for: "release-amplitude-fine-tuning"
            }
            , innerHTML: "Amplitude - Fine - Tuning"
        }
        , {
            element: 'input',
            properties:
            {
                id: "release-amplitude-fine-tuning",
                type: "number",
                min: "0",
                max: "1",
                step: "0.001",
                value: "0"
            }
            , listeners:
            {
                input: (params) => {
                    setAmplitude(params, synthesizerWorkbench.modules.envelope.timeTable.release, "release-amplitude");
                }
            }
        }
    ]
    ;