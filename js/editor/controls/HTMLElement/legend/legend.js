export function createHTMLLegendElement(element) {

    if (element.element != undefined) {
         
    let legend = document.createElement(element.element);

    return legend;

    } else{ 
        return undefined;
    }; 
};