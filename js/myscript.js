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

const coloredIcons = itemsColor(iconsList, colors);
console.log(coloredIcons);
InPage(coloredIcons, container);


const types = propertyValues(iconsList, "type");
const select = document.getElementById("select");
selectOptions(types, select);
select.addEventListener("change", () => {
    const selectedValue = select.value;

    const filteredIcons = selectedChoices(iconsList, selectedValue);
    InPage(filteredIcons, container);
})






function InPage(array, container) {
    let temporaryHTML = "";

    array.forEach(element => {
        const { family, name, prefix, type, color } = element;
        temporaryHTML +=
        `<div class = "col-lg-2 col-md-3 col-sm-6 pt-5 text-center">
        <div class = "items-container">
        <i class = "${family} ${prefix}${name} icons pt-3" style ="color: ${color}"></i>
        <h4 class = "icon-title text-uppercase">${name}</h4>
        </div>
        </div>`;
    });
    container.innerHTML = temporaryHTML;
}

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
    });
    return colorArray;
}

function selectOptions(options, select){
    options.forEach((element) =>{
        select.innerHTML += `<option value = "${element}">${element} </option>`;
    });
    console.log (select);
}

function selectedChoices(array, choice){
    if(choice === "all"){
        return array;
    }
    return array.filter((element) => element.type == choice);
}
