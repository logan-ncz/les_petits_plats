export default class renderTags {

    renderIngredientTag(tag) {

        let divHTML = document.createElement('div')

        divHTML.className = 'tag'

        divHTML.style.background = '#3282F7'

        let template = `<p>${tag}</p>
        <i class="removeTagBtn-${tag.toLowerCase()} far fa-times-circle"></i>`

        divHTML.innerHTML = template

        let container = document.querySelector('.tagsSelected')

        container.appendChild(divHTML)

    }

    renderAppareilTag(tag) {

        let divHTML = document.createElement('div')

        divHTML.className = 'tag'

        divHTML.style.background = '#68D9A4'

        let template = `<p>${tag}</p>
        <i class="removeTagBtn-${tag.toLowerCase()} far fa-times-circle"></i>`

        divHTML.innerHTML = template

        let container = document.querySelector('.tagsSelected')

        container.appendChild(divHTML)

    }

    renderUstensilesTag(tag) {

        let divHTML = document.createElement('div')

        divHTML.className = 'tag'

        divHTML.style.background = '#ED6454'

        let template = `<p>${tag}</p>
        <i class="removeTagBtn-${tag.toLowerCase()} far fa-times-circle"></i>`

        divHTML.innerHTML = template

        let container = document.querySelector('.tagsSelected')

        container.appendChild(divHTML)

    }

}