
const shoppingList = document.querySelector("#shoppingList")

const itemButtonsList = document.querySelector("#itemButtonsList")

const availableItemButtons = ["egg", "milk", "rice"]

const shoppingListItems = [
    { label: "egg", count: 1 },
    { label: "milk", count: 1 },
    { label: "rice", count: 1 }
];


//const shoppingListItems = ["egg", "milk", "rice"]

const newItemInput = document.querySelector("#newItemInput")

const newItemInputButton = document.querySelector("#inputSubmitButton")


const renderShoppingList = () => {
    shoppingListItems.forEach((shoppingListItem) => {
        shoppingList.innerHTML += `<li>${shoppingListItem.label} ${shoppingListItem.count}</li>`
    })
}


renderShoppingList()

const clearInnerHTML = (element) => {
    element.innerHTML = ""
}

const updateShoppingListItems = (item) => {

    const existingItem = shoppingListItems.find((shoppingListItem) => shoppingListItem.label === item);

    if (existingItem) {
        existingItem.count += 1;
    } else {
        shoppingListItems.push({ label: item, count: 1 })
    }

    clearInnerHTML(shoppingList)
    renderShoppingList()
}


/*
const updateShoppingListItems = (item) => {
    clearInnerHTML(shoppingList)
    shoppingListItems.push({ label: item, count: 1 })
    renderShoppingList()
}
*/

const renderItemButtons = () => {
    availableItemButtons.forEach((itemButton) => {
        const newButton = document.createElement("button")
        newButton.textContent = itemButton
        newButton.classList.add("buttonStyle")
        itemButtonsList.appendChild(newButton)

        newButton.addEventListener("click", () => {
            updateShoppingListItems(itemButton);
        })
    })
}

renderItemButtons();

newItemInputButton.addEventListener("click", () => {

    const newItemButton = newItemInput.value

    if (newItemButton === "") {
        return
    }

    clearInnerHTML(itemButtonsList)
    availableItemButtons.push(newItemButton)
    renderItemButtons()
})

/*
nv3:
os items adicionados à lista não devem repetir. Ao invés disso, eles devem mostrar a quantidade de vezes que foi adicionado.
- na primeira vez o item entra na lista
- as subsequentes aumentam a quantidade de vezes que foi adicionado
*/
