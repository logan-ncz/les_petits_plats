export default class filtersBtn {
    constructor() {
        
        this.table = [ 'ingredients', 'appareil', 'ustensiles'];
        
        this.filterTag(this.table)
        
    }

    filterTag(type) {

        type.forEach(element => {

            let selector = document.querySelector(`.select-${element}-selected`)
            // let selector = document.querySelector('.select-' + type + '-selected')

            let selectBtn = document.querySelector(`.select-${element}-btn`)

            let openBtn = document.querySelector(`#open-${element}-filter`)

            let closeBtn = document.querySelector(`#close-${element}-filter`)

            this.click(selector, selectBtn, openBtn, closeBtn) 

        });
        
    }

    click(selector, selectBtn, openBtn, closeBtn) {

        selectBtn.addEventListener('click', event => {

            selector.style.display = 'flex'

            selectBtn.style.width = '35rem'

            openBtn.style.display = 'none'

            closeBtn.style.display = 'block'

        })

        closeBtn.addEventListener('click', event => {
            
            selector.style.display = 'none'

            selectBtn.style.width = '11rem'

            closeBtn.style.display = 'none'

            openBtn.style.display = 'block'

        })

    }

}