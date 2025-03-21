
const shoppingList = document.querySelector("#shoppingList")

const itemButtonsList = document.querySelector("#itemButtonsList")

const availableItemButtons = ["egg", "milk", "rice"]

const shoppingListItems = ["egg", "milk", "rice"]

const newItemInput = document.querySelector("#newItemInput")

const newItemInputButton = document.querySelector("#inputSubmitButton")


const renderShoppingList = () => {
    shoppingListItems.forEach((shoppingListItem) => {
        shoppingList.innerHTML += `<li>${shoppingListItem}</li>`
    })
}

console.log("Texto");


renderShoppingList()

const clearInnerHTML = (element) => {
    element.innerHTML = ""
}


const updateShoppingListItems = (item) => {
    clearInnerHTML(shoppingList)
    shoppingListItems.push(item)
    renderShoppingList()
}

const renderItemButtons = () => {
    availableItemButtons.forEach((itemButton) => {
        const newButton = document.createElement("button")
        newButton.textContent = itemButton
        newButton.classList.add("buttonStyle")
        itemButtonsList.appendChild(newButton)

        newButton.addEventListener("click", () => {
            uppdateShoppingListItems(itemButton);
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
