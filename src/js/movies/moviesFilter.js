export class MoviesFilter {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.selectedCategory = 'All'
    this.elements = {}
    this.setFilter(this.filterCategories(data))
  }

  static get filterStructure () {
    return {
      shell: (
    `<li><button class="movies-filter__element" data-category="{category}">{category}</button></li>`
    )}
  }

  filterCategories (data) {
    const categories = []
    data.map(element => {
      if (!categories.includes(element.category)) {
        categories.push(element.category)
      }
    })
    return categories
  }
  setFilter (data) {
    let filterData = ''
    data.forEach(element => {
      filterData += MoviesFilter.filterStructure.shell.replace('{category}', element).replace('{category}', element)
    })
    this.node.innerHTML += filterData
    this.elements.categories = this.node.querySelectorAll('.movies-filter__element')
    this.elements.categories[0].classList.add('movies-filter__element--selected')
    this.elements.categories.tabIndex = 0
  }
}
