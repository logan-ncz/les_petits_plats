import renderTags from "./renderTags.js";

export default class search {

    constructor() {

        this.table = ['ingredients', 'appareil', 'ustensiles'];

        this.tags = ['ingredients__item', 'appareil__item', 'ustensiles__item']

        this.selectedTags = []

        this.selectIngredient()

        this.selectAppareil()

        this.selectUstensile()

        this.search('searchBarInput' , 'card')

        this.searchTag()

    }

    search(MyId, MyClass){

        let searchBar = document.getElementById(MyId)

        searchBar.addEventListener('keyup', event => {

            let input = searchBar.value

            input = input.toLowerCase();

            let x = document.getElementsByClassName(MyClass);
            //MEttre toutes les card en flex

            

            for (let i = 0; i < x.length; i++) { 

                x[i].style.display = 'flex'

                let filtre1 = true

                if (!x[i].innerHTML.toLowerCase().includes(input)) {

                    x[i].style.display = "none";
                    filtre1 = false;
                } 

                //Si j'ai de tags et filtre1 == true (ail & banane & tomate)
                        //Foreach (this.selectedTags)
                            //IF (!x[i].innerHTML.toLowerCase().includes(tags))
                                    //Display
                        //EndFroeach
                
                        
                if (this.selectedTags.length >= 1 && filtre1 === true) {
                    this.selectedTags.forEach(element => {
                        if (!x[i].innerHTML.toLowerCase().includes(element)) {
                            x[i].style.display = 'none'
                            console.log(element)
                        }
                    });
                }

            }

        }) 
    }

    removeTagHTML(tag) {
            
        let removeBtn = document.querySelector(`.removeTagBtn-${tag.toLowerCase()}`)

        removeBtn.addEventListener('click', event => {

            event.target.parentElement.remove()

            this.removeTag(this.selectedTags, tag.toLowerCase())

            console.log(this.selectedTags)

        })

    }

    searchTag() {

        this.table.forEach(element => {

            this.search(`search-${element}-input` , `${element}__item`)

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