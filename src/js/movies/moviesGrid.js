export class MoviesGrid {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.dataLength = data.length

    this.setCardsShell()
  }

  static get cardsShell () {
    return {
      shell: (``)
    }
  }
}
