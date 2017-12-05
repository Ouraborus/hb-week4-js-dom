export class Gallery {
  constructor (element, img) {
        // Set Element and initial position
    this.node = document.querySelector(element)
    this.index = 0
    this.elements = {}

    this.setGalleryStructure()
    this.fillGallery(img)
    this.setArrows()
    this.setDots()
    // this.setBounds();
  }

  static get galleryStructure () {
    return {
      arrows: (
                `<div class="arrow arrow__left">
                </div>
                <div class="arrow arrow__right">
                </div>`),
      gallery: (
                `<img src="{src}" alt="" class="gallery__image hidden" data-index="{index}">`
            ),
      dots: (
        `<div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        </div>`
    )
    }
  }

  setGalleryStructure () {
    this.node.innerHTML = Gallery.galleryStructure.arrows + Gallery.galleryStructure.dots
    this.node.tabIndex = 0
  }

  setArrows () {
    this.elements.leftArrow = this.node.querySelector('.arrow__left')
    this.elements.rightArrow = this.node.querySelector('.arrow__right')

    this.elements.leftArrow.addEventListener('click', this.prev.bind(this))
    this.elements.rightArrow.addEventListener('click', this.next.bind(this))
  }

  next () {
    if (this.index < this.elements.gallery.length - 1) {
      this.reveal(this.index, ++this.index)
    }
  }
  prev () {
    if (this.index > 0) {
      this.reveal(this.index, --this.index)
    }
  }

  fillGallery (data) {
    data.map(element => {
      this.node.innerHTML += Gallery.galleryStructure.gallery.replace('{src}', element.url)
    })
    this.elements.gallery = this.node.querySelectorAll('.gallery__image')
    this.reveal(0, 0)
  }

  reveal (hide, reveal) {
    // console.log(`reveal = ${hide}, ${reveal}`)
    this.elements.gallery[hide].classList.add('hidden')
    this.elements.gallery[reveal].classList.remove('hidden')
  }

  setDots () {
    this.elements.dots = this.node.querySelectorAll('.dots')
  }
}

// Falta agregar dots con el indice correspondiente y ubicar de acuerdo a su imagen, para que al momento de hacer el
// click, se haga la transicion.
