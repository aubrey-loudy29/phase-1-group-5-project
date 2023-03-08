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

            const detailComment = document.getElementById("comment-list")
            detailComment.innerText = drinks.comments

            const cocktailIngredientList = document.getElementById('ingredients-list')
            cocktailIngredientList.innerText = ''
            
            for(let i = 0; i < drinks.ingredients.length; i++) {  
                const detailIngr = document.createElement("li")
                detailIngr.append(drinks.ingredients[i])
                cocktailIngredientList.appendChild(detailIngr)
            }
        })
        
        // drinkImage.addEventListener('mouseover', () => {
        //     drinkImage.style.boxShadow= "10px 20px 30px #b9d0be";
        // })

    })
}

const likeBttn = document.getElementById("like-button")
let count = 0
likeBttn.addEventListener('click', () => {
    count += 1;
    const likeCount = document.getElementById("like-count")
    likeCount.innerText = count
})


const dislikeBttn = document.getElementById("dislike-button")
let number = 0
dislikeBttn.addEventListener('click', () => {
    number += 1;
    const dislikeCount = document.getElementById("dislike-count")
    dislikeCount.innerText = number
})

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