
const shoppingListContainer = document.querySelector("#shoppingList")
// Ul onde os itens são adicionados em lista

const buttonsContainer = document.querySelector("#buttonsContainer")
// Div onde ficam os botões disponíveis

const availableItemsButton = ["egg", "milk", "rice"]
//Botões com os itens disponíveis para adicionar no Shopping List Container

const shoppingList = ["egg", "milk", "rice"]
// Lista de itens já rederizados na tela dentro do Shopping List Container

const newItemInput = document.querySelector("#newItemInput")
// Input onde podemos escrever o item que desejamos adicionar na lista

const inputSubmitButton = document.querySelector("#inputSubmitButton")
// Botão que adiciona o que foi escrito no newItemInput


//PRIMEIRA PARTE (O app VAI renderizar tudo que tem Salvo no HTML)

const renderShoppingList = () => {
    shoppingList.forEach((shoppingListItem) => {
        shoppingListContainer.innerHTML += `<li>${shoppingListItem}</li>`
    })
}

/* Comentário sobre o renderShoppingList
const renderShoppingList = () => {
    shoppingListContainer.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
    shoppingList.forEach((shoppingListItem) => {
        let li = document.createElement("li");
        li.textContent = shoppingListItem;
        shoppingListContainer.appendChild(li);
    });
}

Chat GPT Ele não é eficiente, porque toda vez que a função roda, ele reescreve o HTML.
Isso pode causar lentidão em listas grandes.

*/
/* O que a função faz?
// Renderizar a lista de compras na tela;
// Para cada item que já está no shoppingList vai rendeziar na tela;
*/


renderShoppingList()
// Chama a função e renderiza a lista de compras na tela;


// SEGUNDA PARTE (Podemos adicionar os valores dos botões já adiconados na shoppingList)

const clearInnerHTML = (element) => {
    element.innerHTML = ""
}
// Função que limpa o container da lista;

const addItemToShoppingList = (item) => {
    clearInnerHTML(shoppingListContainer)
    shoppingList.push(item)
    renderShoppingList()
}
/*O que a função faz?
Toda vez que adicionarmos um novo item (tanto na lista de texto quanto na lista de botões)
a função vai limpar as listas dos elementos, adicionar o item no array
(shoppingList ou availableItemsButton) e redenrizar novamente as listas na tela*/


/* TERCEIRA PARTE (Podemos adicionar um botão com o valor do input de texto
na lista de botões onde executam a mesma função dos botões que já
estão adicionados. (Adicionar o valor do botão na lista)*/

inputSubmitButton.addEventListener("click", () => {

    const createItemButton = newItemInput.value

    if (createItemButton === "") {
        return
    } // Verifica se o campo de texto está vazio

    clearInnerHTML(buttonsContainer)
    availableItemsButton.push(createItemButton)
    renderItemButtons()

})
// Cria um botão com o valor do input de texto e renderiza na lista de botões


const renderItemButtons = () => {
    availableItemsButton.forEach((itemButton) => {
        const newButton = document.createElement("button")
        newButton.textContent = itemButton
        newButton.classList.add("buttonStyle") // Adiciona a classe CSS
        buttonsContainer.appendChild(newButton)

        // Mesmo comportamento dos outros
        newButton.addEventListener("click", () => {
            clearInnerHTML(shoppingListContainer)
            shoppingList.push(itemButton)
            renderShoppingList()
        })
    })
}
/* O que a função faz? 
Função que vai renderizar na lista de botões
adicionados com a mesma função dos outros botões; */

renderItemButtons();
// Chama a função e renderiza a lista de botões na tela;