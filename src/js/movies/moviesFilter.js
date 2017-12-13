export class MoviesFilter {
  constructor (section, categories) {
    this.node = document.querySelector(section)
    this.selectedCategory = '*'
    this.elements = {}

    this.setFilter(categories)
  }

  static get filterStructure () {
    return {
      shell: (
    `<li><button class="movies-filter__element" data-category="{category}">{category}</button></li>`
    )}
  }

  setFilter (data) {
    let filterData
    data.forEach(element => {
      filterData += MoviesFilter.filterStructure.shell.replace('{category}', element.category)
    })
    this.node.innerHTML = filterData
    this.elements.categories = this.node.querySelectorAll('.movies-filter__element')
    this.elements.categories[0].classList.add('.movies-filter__element--selected')
    this.node.tabIndex = 0
  }
}
