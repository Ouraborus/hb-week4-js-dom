export class MoviesFilter {
  constructor (section, categories) {
    this.node = document.querySelector(section)
    this.selectedCategory = '*'
    this.elements = {}
  }

  static get filterStructure () {
    return {
      shell: (
    ``
    )}
  }
}
