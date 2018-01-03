export class MoviesGrid {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.dataLength = data.length

    this.setCardsShell(data)
  }

  static get cardsShell () {
    return {
      shell: (`<li>
      <div class="movies-grid__container">
        <img class="movies-grid__element" src="{url}" data-category="{category}" alt=""/>
        <div class="movies-grid__description">
        <p>{description}</p>
        </div>
      </div>
    </li>`)
    }
  }

  setCardsShell (data) {
    let gridData = ''
    data.forEach(element => {
      gridData += MoviesGrid.cardsShell.shell.replace('{url}', element.url).replace('{category}', element.category).replace('{description}', element.description)
    })
    this.node.innerHTML += gridData
    this.elements.movies = this.node.querySelectorAll('.movies-grid__container')
    this.elements.movies.tabIndex = 0
  }
}
