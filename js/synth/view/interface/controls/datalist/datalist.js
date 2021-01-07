export function createHTMLDataListElement(element) {

    if (element.element != undefined) {

        let datalist = document.createElement(element.element);

        if(element.name != undefined){
            datalist.name = element.name;
        };
    
        return datalist;

    } else{ 
        return undefined;
    }; 
};