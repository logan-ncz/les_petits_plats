export default class search {

    constructor() {

        this.table = [ 'ingredients', 'appareil', 'ustensiles'];

        this.search()

        this.searchTag(this.table)

    }

    search() {

        let searchBar = document.getElementById('searchBarInput')
        
        searchBar.addEventListener('keyup', event => {

            let input = searchBar.value

            input = input.toLowerCase();

            let x = document.getElementsByClassName('card');

            for (let i = 0; i < x.length; i++) { 

                if (!x[i].innerHTML.toLowerCase().includes(input)) {

                    x[i].style.display = "none";

                } else {

                    x[i].style.display = "flex";
                    
                }

            }

        })

    }

    searchTag(type) {

        type.forEach(element => {

            let searchBar = document.getElementById(`search-${element}-input`)

            searchBar.addEventListener('keyup', event => {

                let input = searchBar.value

                input = input.toLowerCase();
                
                let x = document.getElementsByClassName(`${element}__item`);

                for (let i = 0; i < x.length; i++) { 

                    if (!x[i].innerHTML.toLowerCase().includes(input)) {

                        x[i].style.display = "none";
                        
                    }
                    else {

                        x[i].style.display = "flex";    

                    }

                }

            })

        });

    }

}