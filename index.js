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

        drinkImage.addEventListener('mouseover', (e) => {
            drinkImage.setAttribute('style', 'box-shadow: 0 4px 8px 0 rgba(255, 99, 71, 0.2), 0 6px 20px 0 rgba(255, 99, 71, 0.19);');
        }, false);
        
        drinkImage.addEventListener('mouseout', (e) => {
            drinkImage.setAttribute('style', 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);');
        }, false);

        drinkImage.addEventListener('click', () => {

            const cocktailGif = document.getElementById('cocktail-gif')
            cocktailGif.style.display = 'none';

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

            const likeCount = document.getElementById("like-count")
            let count = 0
            likeCount.innerText = `${count}`

            const likeBttn = document.getElementById("like-button")
            likeBttn.addEventListener('click', () => {
                count += 1;
                likeCount.innerText = count
            })
            
            const dislikeCount = document.getElementById("dislike-count")
            let number = 0
            dislikeCount.innerText = `${number}`

            const dislikeBttn = document.getElementById("dislike-button")
            dislikeBttn.addEventListener('click', () => {
                number += 1;
                dislikeCount.innerText = number
            })
        })
    })
}


const form = document.getElementById('comment-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const commentList = document.getElementById('comment-list')
    const newComment = document.createElement('li')
    let comment = document.getElementById('comment-text').value
    let username = document.getElementById("comment-username").value
    newComment.innerText = `${username} says: "${comment}"`
    commentList.append(newComment)
    

    form.reset();

})