function jsonToHTML(innerHTML) {

    let html = [];

    if (innerHTML != undefined) {
        if (Array.isArray(innerHTML)) {
            innerHTML.forEach((element) => {
                html.push(createHTML(element));
            });
        } else {
            html.push(createHTML(innerHTML));
        };
    };

    return html;

    function createHTML(element) {
        if (typeof (element) == "string") {
            return document.createTextNode(element);
        } else {

            let html;

            for (const property in element) {
                if (Object.hasOwnProperty.call(element, property)) {
                    const value = element[property];
                    if (property == "element") {
                        html = document.createElement(value);
                    } else if (property == "properties" && html != undefined) {
                        setProperties(element, html);
                    } else if (property == "listeners" && html != undefined) {
                        setListeners(element, html);
                    } else if (property == "innerHTML" && html != undefined) {
                        jsonToHTML(element.innerHTML).forEach((htmlElement => {
                            html.appendChild(htmlElement);
                        }));
                    };
                };
            };

            return html;
        };
    };

    function setProperties(element, html) {
        for (const property in element.properties) {
            if (Object.hasOwnProperty.call(element.properties, property)) {
                const value = element.properties[property];
                html.setAttribute(property, value);
            };
        };
    };

    function setListeners(element, html) {
        for (const listener in element.listeners) {
            if (Object.hasOwnProperty.call(element.listeners, listener)) {
                const func = element.listeners[listener];
                html.addEventListener(listener, func);
            };
        };
    };
};

jsonToHTML(innerHTML).forEach((htmlElement) => { document.body.appendChild(htmlElement); });