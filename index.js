document. addEventListener("DOMContentLoaded" , fetchDrinks)

function fetchDrinks() {
    fetch('http://localhost:3000/drinks')
    .then(res => res.json())
    .then(results => renderDrinks(results))
}

function renderDrinks(results) {
    console.log(results)

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


            // const ingredientsTitle = document.getElementById('ingredients-title')
            // const cocktailIngredientList = document.createElement('ul')
            // ingredientsTitle.appendChild(cocktailIngredientList)
            
            // const detailIngr = document.createElement("li")
            // cocktailIngredientList.innerText = ""
            // detailIngr.innerText = drinks.ingredients
            
            // cocktailIngredientList.appendChild(detailIngr)


            // const ingrList = document.getElementById("cocktail-ingredients")
        })
        
        // drinkImage.addEventListener('mouseover', () => {
        //     drinkImage.style.boxShadow= "10px 20px 30px #b9d0be";
        // })

    })
}

const form = document.getElementById('comment-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const commentList = document.getElementById('comment-list')
    const newComment = document.createElement('li')
    let comment = document.getElementById('comment-text').value
    newComment.innerText = comment
    commentList.append(newComment)
    

    form.reset();

})