import renderTags from "./renderTags.js";

import recipes from './recipes.js'

export default class search {

    constructor() {

        this.table = ['ingredients', 'appareil', 'ustensiles'];

        this.tags = ['ingredients__item', 'appareil__item', 'ustensiles__item']

        this.selectedTags = []

        this.selectedIngredients = []

        this.selectedAppareils = []

        this.selectedUstensiles = []

        this.displayTagsRecipe(this.table)

        this.search()

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

    search(){

        let searchBar = document.getElementById('searchBarInput')

        let x = document.querySelectorAll('.card');

        x.forEach (card => { 

            searchBar.addEventListener('keyup', event => {

                this.filterBySearch(searchBar, card)

            }) 
        })
    }

    filterBySearch(searchBar, card) {
        let input = searchBar.value

        input = input.toLowerCase();

        card.style.display = 'flex'

        let filtre1 = true

        if (input.length >= 3) {

            if (!card.innerHTML.toLowerCase().includes(input)) {

                card.style.display = "none";

                filtre1 = false;

            } 

        }

        this.displayTagsRecipe(this.table)

        this.errorMessage()
    }

    filterByIngredients(element) {

        let x = document.getElementsByClassName('card');

        for (let i = 0; i < x.length; i++) {
            
            const card = x[i];

            if(!card.innerHTML.toLowerCase().includes(element.toLowerCase())) {

                card.style.display = 'none'

            }

        }

    }

    filterByAppareil(element) {

        let x = document.getElementsByClassName('card');

        for (let i = 0; i < x.length; i++) {
            
            const card = x[i];

            let bdd = recipes

            let id = card.getAttribute('data-attribute')

            const recipe = !id ? bdd : bdd.find(recipe => recipe.id == id);

            if(card.style.display === 'flex') {

                if(!recipe.appliance.toLowerCase().includes(element.toLowerCase())) {

                    card.style.display = 'none'

                }

            }

        }
    }

    filterByUstensiles(element) {

        let x = document.getElementsByClassName('card');

        for (let i = 0; i < x.length; i++) {
            
            const card = x[i];

            let bdd = recipes

            let id = card.getAttribute('data-attribute')

            const recipe = !id ? bdd : bdd.find(recipe => recipe.id == id);

            if(card.style.display === 'flex') {

                if(!recipe.ustensils.includes(element.toLowerCase())) {

                    card.style.display = 'none'

                }

            }

        }

    }

    removeTagHTML(tag, tagArray) {
            
        let removeBtn = document.querySelector(`.removeTagBtn-${tag.toLowerCase().replace(/'/g, "_").replace(/ /g, "_").replace(/é/g, "e").replace(/[\d+()]/g, "")}`)

        removeBtn.addEventListener('click', event => {

            event.target.parentElement.remove()

            this.removeTag(tagArray, tag.toLowerCase())

            let searchBar = document.getElementById('searchBarInput')

            let x = document.getElementsByClassName('card');

            for (let i = 0; i < x.length; i++) {
                this.filterBySearch(searchBar, x[i])
            }

            this.selectedIngredients.map(tag => {
                this.filterByIngredients(tag)
            })

            this.selectedAppareils.map(tag => {
                this.filterByAppareil(tag)
            })

            this.selectedUstensiles.map(tag => {
                this.filterByUstensiles(tag)
            })

            this.displayTagsRecipe(this.table)
            
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

                if(!this.selectedIngredients.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedIngredients.push(element.innerHTML.toLowerCase())

                    new renderTags().renderIngredientTag(element.innerHTML)

                    this.filterByIngredients(element.innerHTML)

                }

                this.displayTagsRecipe(this.table)
                    
                this.removeTagHTML(element.innerHTML, this.selectedIngredients)

            })

        });

    }

    selectAppareil() {

        let appareilItem = document.querySelectorAll('.appareil__item')

        appareilItem.forEach(element => {

            element.addEventListener('click', event => {

                if(!this.selectedAppareils.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedAppareils.push(element.innerHTML.toLowerCase())

                    new renderTags().renderAppareilTag(element.innerHTML)

                    this.filterByAppareil(element.innerHTML)

                }

                this.displayTagsRecipe(this.table)

                this.removeTagHTML(element.innerHTML, this.selectedAppareils)
                
            })

        });

    }

    selectUstensile() {

        let ustensilesItem = document.querySelectorAll('.ustensiles__item')

        ustensilesItem.forEach(element => {

            element.addEventListener('click', event => {

                if(!this.selectedUstensiles.includes(element.innerHTML.toLowerCase())) {
                    
                    this.selectedUstensiles.push(element.innerHTML.toLowerCase())

                    new renderTags().renderUstensilesTag(element.innerHTML)

                    this.filterByUstensiles(element.innerHTML)

                }

                this.displayTagsRecipe(this.table)
                    
                this.removeTagHTML(element.innerHTML, this.selectedUstensiles)
                
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