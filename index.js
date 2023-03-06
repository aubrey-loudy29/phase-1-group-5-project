document. addEventListener("DOMContentLoaded" , fetchDrinks)

function fetchDrinks() {
    fetch('http://localhost:3000/drinks')
    .then(res => res.json())
    .then(results => renderDrinks(results))
}

function renderDrinks(results) {
    const drinkBar = document.getElementById("image-flex-container")
    results.forEach((drinks) => {
        const drinkImage = document.createElement('img')
        drinkImage.src = drinks.image
        drinkBar.append(drinkImage)

        drinkImage.addEventListener('click', () => {

            const detailImage = document.getElementById("left-drink-image")
            detailImage.src = drinks.image

            const detailName = document.getElementById("cocktail-title")
            detailName.innerText = drinks.name

            const detailType = document.getElementById("cocktail-type")
            detailType.innerText = drinks.type

            const detailBio = document.getElementById("cocktail-bio-body")
            detailBio.innerText = drinks.bio

            const detailIngr = document.getElementById("ingredient-list-items")
            detailIngr.innerText = drinks.ingredients

            const ingrList = document.getElementById("cocktail-ingredients")
            // ingrList.innerText = ""

        })
    })
}