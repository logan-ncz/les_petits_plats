export default class filtersBtn {
    constructor() {
        this.ingredients()
        this.appareils()
        this.ustensiles()
    }

    ingredients() {
        let selector = document.querySelector('.select-ingredients-selected')

        let selectBtn = document.querySelector('.select-ingredients-btn')

        let openBtn = document.querySelector('#openIngredientsFilter')

        let closeBtn = document.querySelector('#closeIngredientsFilter')

        this.click(selector, selectBtn, openBtn, closeBtn) 
    }

    appareils() {
        let selector = document.querySelector('.select-appareil-selected')

        let selectBtn = document.querySelector('.select-appareil-btn')

        let openBtn = document.querySelector('#openAppareilFilter')

        let closeBtn = document.querySelector('#closeAppareilFilter')

        this.click(selector, selectBtn, openBtn, closeBtn)       
    }

    ustensiles() {
        let selector = document.querySelector('.select-ustensiles-selected')

        let selectBtn = document.querySelector('.select-ustensiles-btn')

        let openBtn = document.querySelector('#openUstensilesFilter')

        let closeBtn = document.querySelector('#closeUstensilesFilter')

        console.log(closeBtn)

        this.click(selector, selectBtn, openBtn, closeBtn)      
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