import recipes from './recipes.js'

class cards {

    constructor() {
        this.bdd = recipes

        this.render();
    }
    
    render() {

        this.bdd.forEach(recipe => {

            let cards = document.querySelector('.recipes');

            let card = document.createElement('div')

            // card.className = recipe.ingredients.map(ingredient => ingredient.ingredient.replace(/ /g,"_")).join(" ") +  ' col-3 card'

            card.className = 'col-3 card'

            let HTML = `<div class="card-top">

                </div>
                <div class="card-body">
                <div class="card-body-top">
                    <h5>${recipe.name}</h5>
                    <div class="card-body-top-time">
                    <img src="images/icons/clock.svg" alt="">
                    <p>${recipe.time} min</p>
                    </div>
                </div>

                <div class="card-body-bottom">
                    <div class="card-body-bottom-ingredients">
                    ${recipe.ingredients.map(ingredient =>
                        
                        `<p><b>${ingredient.ingredient}:</b> ${ingredient.quantity} ${ingredient.unit}</p>`).join(" ")}
                    </div>

                    <div class="card-body-bottom-description">
                    <p>${recipe.description}</p>
                    </div>
                </div>
                
                
                
                </div>`

            cards.appendChild(card)

            card.innerHTML = HTML

            
        })
    }

    // ingredients(ingredient) {

    //     if (ingredient.quantity.length === 0) {
    //         let template = 
                        
    //             `<b>${ingredient.ingredient}</b>`

    //         let ingredientsDiv = document.querySelector('.card-body-bottom-ingredients p')
    //         console.log(ingredientsDiv)
    //         ingredientsDiv.innerHTML = template

    //     } if (ingredient.unit.length === 0) {
    //         let template = 
                        
    //             `<b>${ingredient.ingredient}:</b>${ingredient.quantity}`

    //         let ingredientsDiv = document.querySelector('.card-body-bottom-ingredients p')
    //         ingredientsDiv.innerHTML = template
    //     } else {
    //         let template = 
                        
    //             `<b>${ingredient.ingredient}:</b>
    //             ${ingredient.quantity} ${ingredient.unit}`

    //         let ingredientsDiv = document.querySelector('.card-body-bottom-ingredients p')
    //         ingredientsDiv.innerHTML = template
    //     }
    // }

}

export default cards