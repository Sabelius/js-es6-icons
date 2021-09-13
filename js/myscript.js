let iconsList = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

const colors = ["blue", "orange", "purple"];

let container = document.getElementById("icons-container");
console.log(container);

function InPage(array, container) {
    array.forEach(element => {
        const { family, name, prefix, type, color } = element;
        container.innerHTML +=
        `<div class = "col-3 pt-3">
        <i class = "${family} ${prefix}${name}" style ="color: ${color}"></i>
        <h4 class = "icon-title">${name} (${type})</h4>
        </div>`;
    });
}

InPage(iconsList, container);

function propertyValues(array, property){
    const types = [];
    array.forEach((element) => {
        if(! types.includes(element[property])){
            types.push(element[property]);
        }
    });
    return types;
}



function itemsColor(array, colors){
    const types = propertyValues(array, "type");

    const colorArray = array.map((element) => {
        const indexOfType = types.indexOf(element.type);
        if(indexOfType !== -1){
            element.color = colors[indexOfType];
        }
        return element;
    })
    return colorArray;
}

InPage(iconsList, itemsColor(iconsList, colors));

