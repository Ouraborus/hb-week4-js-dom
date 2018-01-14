export class MoviesGrid {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.dataLength = data.length
    this.setCardsShell(data)
    this.setCardsFlip()
    this.flippedCard = undefined
  }

  static get cardsShell () {
    return {
      shell: (`<li class="movies-grid__container">
      <picture class="movies-grid__front">
        <img class="movies-grid__element" src="{url}" data-category="{category}" alt=""/>
        </picture>
      <picture class="movies-grid__back">
        <div class="movies-grid__description">
        <p>{year}</p>
        <p>{description}</p>
        </div>
        </picture>
    </li>`)
    }
  }

  setCardsShell (data) {
    let gridData = ''
    data.forEach(element => {
      gridData += MoviesGrid.cardsShell.shell.replace('{url}', element.url).replace('{category}', element.category).replace('{year}', element.year).replace('{description}', element.description)
    })
    this.node.innerHTML += gridData
    this.elements.movies = this.node.querySelectorAll('.movies-grid__container')
    this.elements.movies.tabIndex = 0
  }
  updateGrid (data) {
    if (data === 'All') {
      this.elements.movies.forEach(element => {
        element.classList.remove('movies-grid__hidden')
      })
    } else {
      this.elements.movies.forEach(element => {
        if (element.children[0].children[0].dataset.category !== data) {
          element.classList.add('movies-grid__hidden')
        } else {
          element.classList.remove('movies-grid__hidden')
        }
      })
    }
  }
  setCardsFlip () {
    this.elements.movies.forEach(element => {
      element.addEventListener('click', this.flipCard.bind(this))
    })
  }
  flipCard (evt) {
    if (this.flippedCard === undefined) {
      this.flippedCard = evt.currentTarget
    }
    if (this.flippedCard !== evt.currentTarget) {
      this.flippedCard.classList.remove('movies-grid__container--flipped')
      this.flippedCard = evt.currentTarget
      this.flippedCard.classList.add('movies-grid__container--flipped')
    } else {
      this.flippedCard.classList.toggle('movies-grid__container--flipped')
    }
  }
}
