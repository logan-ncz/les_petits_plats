export default class filtersBtn {
    constructor() {
        this.ingredients()
        this.appareils()
        this.ustensiles()
    }

    ingredients() {
        let button = document.querySelector('.select-ingredients')

        let selector = document.querySelector('.select-ingredients-selected')

        let selectBtn = document.querySelector('.select-ingredients-btn')

        this.click(button, selector, selectBtn) 
    }

    appareils() {
        let button = document.querySelector('.select-appareil')

        let selector = document.querySelector('.select-appareil-selected')

        let selectBtn = document.querySelector('.select-appareil-btn')

        this.click(button, selector, selectBtn)       
    }

    ustensiles() {
        let button = document.querySelector('.select-ustensiles')

        let selector = document.querySelector('.select-ustensiles-selected')

        let selectBtn = document.querySelector('.select-ustensiles-btn')

        this.click(button, selector, selectBtn)      
    }

    click(button, selector, selectBtn) {

        

        button.addEventListener('click', event => {
            if (selector.style.display === 'flex') {
                selector.style.display = 'none'
                selectBtn.style.width = '11rem'
            } else {
                selector.style.display = 'flex'
                selectBtn.style.width = '35rem'
                // selectBtn.style.margin = '0 0 1em'
            }
        })  
    }
}