function getCategories(menu) {
    return Object.keys(menu);
}

function nameToListItem(categoryName) {
    const listItem = document.createElement('li');
    listItem.textContent = categoryName;
    return listItem;
}
// console.log(nameToListItem(''));

// const arrayOfListItems = [];
// arrayOfStrings.forEach(function(string) {
    //     console.log(string);
    
function categoriesToListItems(arrayOfStrings) {
    return arrayOfStrings.map(nameToListItem);
}

const categories = getCategories(menu);
const categoryListItems = categoriesToListItems(categories);

categoryListItems.map(appendToMenu);

