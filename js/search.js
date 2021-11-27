import renderTags from "./renderTags.js";

import recipes from './recipes.js'

export default class search {

    constructor() {

        this.table = ['ingredients', 'appareil', 'ustensiles'];

        this.tags = ['ingredients__item', 'appareil__item', 'ustensiles__item']

        this.selectedTags = []

        this.displayTagsRecipe(this.table)

        this.searchEvent()

        this.searchTag()

    }

    errorMessage() {

        let errorMessage =  document.querySelector('.errorMessage')

        let ingredientsList = document.querySelector('.ingredients-list').innerHTML

        errorMessage.style.display = 'none'

        if (ingredientsList.length === 0) {

            errorMessage.style.display = 'block'

        }
    }

    searchEvent(){

        let searchBar = document.getElementById('searchBarInput')

        let x = document.getElementsByClassName('card');

        for (let i = 0; i < x.length; i++) { 

            searchBar.addEventListener('keyup', event => {

                this.filterBySearch(searchBar, x, i)

            }) 
        }
    }

    filterBySearch(searchBar, x, i) {
        let input = searchBar.value

        input = input.toLowerCase();

        x[i].style.display = 'flex'

        let filtre1 = true

        if (input.length >= 3) {

            if (!x[i].innerHTML.toLowerCase().includes(input)) {

                x[i].style.display = "none";

                filtre1 = false;

            } 

        }

        if (this.selectedTags.length >= 1 && filtre1 === true) {

            this.filterByTag(x[i])

        }

        this.displayTagsRecipe(this.table)

        this.errorMessage()
    }

    filterByTag(cards) {
        for (let index = 0; index < this.selectedTags.length; index++) {
            const tag = this.selectedTags[index];
            if (!cards.innerHTML.toLowerCase().includes(tag)) {
                cards.style.display = 'none'
            }
        }
    }

    removeTagHTML(tag) {
            
        let removeBtn = document.querySelector(`.removeTagBtn-${tag.toLowerCase().replace(/ /g, "_").replace(/[\d+()]/g, "")}`)

        removeBtn.addEventListener('click', event => {

            event.target.parentElement.remove()

            this.removeTag(this.selectedTags, tag.toLowerCase())

            let searchBar = document.getElementById('searchBarInput')

            let x = document.getElementsByClassName('card');

            for (let i = 0; i < x.length; i++) {
                this.filterBySearch(searchBar, x, i)
            }

        })

    }

    displayTagsRecipe(type) {

        let bdd = recipes

        let cards = document.querySelectorAll('.card')

        let correspondingRecipe = []

        for (let i = 0; i < cards.length; i++) {

            const card = cards[i];

            if (card.style.display === 'flex' || card.style.display === '') {
                let id = card.getAttribute("data-attribute")

                const recipe = !id ? bdd : bdd.find(recipe => recipe.id == id);

                correspondingRecipe.push(recipe);
            }

        }

        for (let i = 0; i < type.length; i++) {

            let tags = []

            const element = type[i];

            switch (element) {

                case 'ingredients':
                    tags = this.displayIngredientsOfEachRecipe(correspondingRecipe, tags)
                    break;

                case 'appareil':
                    tags = this.displayApplianceOfEachRecipe(correspondingRecipe, tags)
                    break;
            
                case 'ustensiles':
                    tags = this.displayUstensilsOfEachRecipe(correspondingRecipe, tags)
                    break;       
                
            }

            tags.sort()

            let tagsList = document.querySelector('.' + element + '-list')

            tagsList.innerHTML = `${tags.map(tag => 
                `<li class="${element}__item">${tag.charAt(0).toUpperCase() + tag.slice(1)}</li>`      // Mettre la première lettre de chaque ingrédient en majuscule
            ).join(" ")}`

            this.selectIngredient()

            this.selectAppareil()

            this.selectUstensile()

        }

    }

    displayIngredientsOfEachRecipe(recipe, tags) {

        recipe.forEach(element => {

            element.ingredients.map(ingredient => {

                if (!tags.includes(ingredient.ingredient.toLowerCase())) {

                    tags.push(ingredient.ingredient.toLowerCase())

                }
                
            })

        });

        return tags

    }

    displayApplianceOfEachRecipe(recipe, tags) {

        recipe.forEach(element => {

            if (!tags.includes(element.appliance.toLowerCase())) {
            
                tags.push(element.appliance.toLowerCase())
                
            }

        });

        return tags

    }

    displayUstensilsOfEachRecipe(recipe, tags) {

        recipe.forEach(element => {

            element.ustensils.map(ustensil => {

                if (!tags.includes(ustensil.toLowerCase())) {
            
                    tags.push(ustensil.toLowerCase())
                    
                }

            })

        });

        return tags

    }

    searchTag() {

        // this.table.forEach(element => {

        //     this.search(`search-${element}-input` , `${element}__item`)

        // });
        

        this.table.forEach(element => {

            let searchBar = document.getElementById(`search-${element}-input`)

            searchBar.addEventListener('keyup', event => {

                let input = searchBar.value

                input = input.toLowerCase();

                let x = document.getElementsByClassName(`${element}__item`);

                for (let i = 0; i < x.length; i++) { 

                    x[i].style.display = 'flex'

                    if (!x[i].innerHTML.toLowerCase().includes(input)) {

                        x[i].style.display = "none";

                    }

                }

            }) 

        });
    }

    selectIngredient() {

        let ingredientsItem = document.querySelectorAll('.ingredients__item')

        ingredientsItem.forEach(element => {

            element.addEventListener('click', event => {

                if(!this.selectedTags.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedTags.push(element.innerHTML.toLowerCase())

                    new renderTags().renderIngredientTag(element.innerHTML)

                    let x = document.getElementsByClassName('card');

                    for (let i = 0; i < x.length; i++) {
                        const cards = x[i];
                        this.filterByTag(cards)
                    }

                }
                    
                this.removeTagHTML(element.innerHTML.toLowerCase())

            })

        });

    }

    selectAppareil() {

        let appareilItem = document.querySelectorAll('.appareil__item')

        appareilItem.forEach(element => {

            element.addEventListener('click', event => {

                if(!this.selectedTags.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedTags.push(element.innerHTML.toLowerCase())

                    new renderTags().renderAppareilTag(element.innerHTML)

                    let x = document.getElementsByClassName('card');

                    for (let i = 0; i < x.length; i++) {
                        const cards = x[i];
                        this.filterByTag(cards)
                    }

                }

                this.removeTagHTML(element.innerHTML.toLowerCase())
                
            })

        });

    }

    selectUstensile() {

        let ustensilesItem = document.querySelectorAll('.ustensiles__item')

        ustensilesItem.forEach(element => {

            element.addEventListener('click', event => {

                if(!this.selectedTags.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedTags.push(element.innerHTML.toLowerCase())

                    new renderTags().renderUstensilesTag(element.innerHTML)

                    let x = document.getElementsByClassName('card');

                    for (let i = 0; i < x.length; i++) {
                        const cards = x[i];
                        this.filterByTag(cards)
                    }

                }
                    
                this.removeTagHTML(element.innerHTML.toLowerCase())
                
            })

        });

    }

    removeTag(arr, value) { 

        let index = arr.indexOf(value);

        if (index > -1) {

            arr.splice(index, 1);
            
        }

        return arr;
    }

}