export class MoviesGrid {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.dataLength = data.length
    this.setCardsShell(data)
    this.setCardsFlip()
    this.flippedCard = undefined
  }

  static get cardsStr () {
    return {
      shell: (`<li class="movies-grid__container">
      <picture class="movies-grid__front">
        <img class="movies-grid__element" src="{url}" data-category="{category}" alt=""/>
        </picture>
      <picture class="movies-grid__back">
        <div class="movies-grid__description">
        <p>{title}</p>
        <p>{year}</p>
        <p>{description}</p>
        </div>
        </picture>
    </li>`),
      flipped: (
      `movies-grid__container--flipped`
    ),
      hidden: (
      `movies-grid__hidden`
    )
    }
  }

  setCardsShell (data) {
    let gridData = ''
    data.forEach(element => {
      gridData += MoviesGrid.cardsStr.shell.replace('{url}', element.url).replace('{category}', element.category).replace('{year}', element.year).replace('{description}', element.description).replace('{title}', element.title)
    })
    this.node.innerHTML += gridData
    this.elements.movies = this.node.querySelectorAll('.movies-grid__container')
    this.elements.movies.tabIndex = 0
  }
  updateGrid (data) {
    if (data === 'All') {
      this.elements.movies.forEach(element => {
        element.classList.remove(MoviesGrid.cardsStr.hidden)
      })
    } else {
      this.elements.movies.forEach(element => {
        if (element.children[0].children[0].dataset.category !== data) {
          element.classList.add(MoviesGrid.cardsStr.hidden)
        } else {
          element.classList.remove(MoviesGrid.cardsStr.hidden)
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
    if (evt === 'reset' && this.flippedCard !== undefined) {
      this.flippedCard.classList.remove(MoviesGrid.cardsStr.flipped)
    } else {
      if (this.flippedCard === undefined) {
        this.flippedCard = evt.currentTarget
      }
      if (this.flippedCard !== evt.currentTarget && this.flippedCard !== undefined) {
        this.flippedCard.classList.remove(MoviesGrid.cardsStr.flipped)
        this.flippedCard = evt.currentTarget
        this.flippedCard.classList.add(MoviesGrid.cardsStr.flipped)
      } else {
        this.flippedCard.classList.toggle(MoviesGrid.cardsStr.flipped)
      }
    }
  }
}
