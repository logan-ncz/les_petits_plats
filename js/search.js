import renderTags from "./renderTags.js";

import recipes from './recipes.js'

export default class search {

    constructor() {

        this.table = ['ingredients', 'appareil', 'ustensiles'];

        this.tags = ['ingredients__item', 'appareil__item', 'ustensiles__item']

        this.selectedTags = []

        this.displayIngredientsOfEachRecipe()

        this.displayApplianceOfEachRecipe()

        this.displayUstensilsOfEachRecipe()

        this.selectIngredient()

        this.selectAppareil()

        this.selectUstensile()

        this.search('searchBarInput' , 'card')

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

    search(MyId, MyClass){

        let searchBar = document.getElementById(MyId)

        let x = document.getElementsByClassName(MyClass);

        for (let i = 0; i < x.length; i++) { 

            searchBar.addEventListener('keyup', event => {

                let input = searchBar.value

                input = input.toLowerCase();

                //MEttre toutes les card en flex

                x[i].style.display = 'flex'

                let filtre1 = true

                if (input.length >= 3) {

                    if (!x[i].innerHTML.toLowerCase().includes(input)) {

                        x[i].style.display = "none";

                        filtre1 = false;

                    } 

                }

                //Si j'ai de tags et filtre1 == true (ail & banane & tomate)
                        //Foreach (this.selectedTags)
                            //IF (!x[i].innerHTML.toLowerCase().includes(tags))
                                    //Display
                        //EndFroeach

                this.tags.map(tag => {
                    
                    let searchTags = document.querySelectorAll(`.${tag}`)

                    searchTags.forEach(searchTag => {

                        searchTag.addEventListener("click", event => {
                            if (this.selectedTags.length >= 1 && filtre1 === true) {
                                this.selectedTags.forEach(element => {
                                    if (!x[i].innerHTML.toLowerCase().includes(element)) {
                                        x[i].style.display = 'none'
                                    }
                                });
                            }
                        })
                    })

                    
                })

                this.displayIngredientsOfEachRecipe()

                this.displayApplianceOfEachRecipe()

                this.displayUstensilsOfEachRecipe()

                this.errorMessage()

            }) 
        }
    }

    removeTagHTML(tag) {
            
        let removeBtn = document.querySelector(`.removeTagBtn-${tag.toLowerCase().replace(/ /g, "_")}`)

        removeBtn.addEventListener('click', event => {

            event.target.parentElement.remove()

            this.removeTag(this.selectedTags, tag.toLowerCase())

            console.log(this.selectedTags)

        })

    }

    displayIngredientsOfEachRecipe() {

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

        let tags = []

        correspondingRecipe.forEach(element => {
            element.ingredients.map(ingredient => {

                if (!tags.includes(ingredient.ingredient.toLowerCase())) {
                    tags.push(ingredient.ingredient.toLowerCase())
                }
                
            })
        });

        // console.log(tags)

        tags.sort()

        let ingredientsList = document.querySelector('.ingredients-list')

        ingredientsList.innerHTML = `${tags.map(ingredient => 
            `<li class="ingredients__item">${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>`
            // Mettre la premiere lettre en majuscule de chaque ingrédient
        ).join(" ")}`

        this.selectIngredient()

    }

    displayApplianceOfEachRecipe() {

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

        let tags = []

        correspondingRecipe.forEach(element => {

            if (!tags.includes(element.appliance.toLowerCase())) {
            
                tags.push(element.appliance.toLowerCase())
                
            }

        });

        tags.sort()

        let applianceList = document.querySelector('.appareil-list')

        applianceList.innerHTML = `${tags.map(appliance => 
            `<li class="appareil__item">${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</li>`
            // Mettre la premiere lettre en majuscule de chaque ingrédient
        ).join(" ")}`

        this.selectAppareil()

    }

    displayUstensilsOfEachRecipe() {

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

        let tags = []

        correspondingRecipe.forEach(element => {

            element.ustensils.map(ustensil => {

                if (!tags.includes(ustensil.toLowerCase())) {
            
                    tags.push(ustensil.toLowerCase())
                    
                }

            })

        });

        tags.sort()

        let ustensilsList = document.querySelector('.ustensiles-list')

        ustensilsList.innerHTML = `${tags.map(ustensil => 
            `<li class="ustensiles__item">${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</li>`
            // Mettre la premiere lettre en majuscule de chaque ustensile
        ).join(" ")}`

        this.selectUstensile()

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