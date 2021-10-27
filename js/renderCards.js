import recipes from './recipes.js'

class cards {

    constructor() {
        this.bdd = recipes

        this.render();
    }
    
    render() {

        console.log(this.bdd)

        this.bdd.forEach(recipe => {
            let cards = document.querySelector('.recipes');

            let card = document.createElement('div')

            card.className = 'col-3 mx-4 my-3 card'

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

}

export default cards