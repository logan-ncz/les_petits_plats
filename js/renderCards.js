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

            card.className = 'col-3 card'

            card.setAttribute('data-attribute', recipe.id)

            let template = ``

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
                                `<p class="card-ingredients__item">${template = this.ingredientChoiceIfUndefined(ingredient)}</p>`).join(" ")}
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

    ingredientChoiceIfUndefined(ingredient) {

        if (ingredient.quantity === undefined) {
            let template = 
                        
                `<b>${ingredient.ingredient}</b>`

            return template
        } else if (ingredient.unit === undefined) {
            let template = 
                        
                `<b>${ingredient.ingredient}: </b>${ingredient.quantity}`

            return template
        } else {
            let template = 
                        
                `<b>${ingredient.ingredient}: </b>
                ${ingredient.quantity} ${ingredient.unit}`

            return template
        }
        
    }

}

export default cards