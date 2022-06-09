let waveforms = {
    element: "select",
    properties:
    {
        id: "osc1-waveform"
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
}