export function createHTMLOptgroupElement(element) {
    
    if (element.element != undefined) {

        let optgroup = document.createElement(element);

        return optgroup;
        
    } else{ 
        return undefined;
    };
};