const menuBtn = document.querySelector("#menu-btn")  
const cover = document.querySelector(".page-cover")
const navMenu = document.querySelector(".hamburgerNav")
const closeBtn = document.querySelector("#close")
const arrowRight = document.querySelector("#right-arrow")
const arrowLeft = document.querySelector("#left-arrow")
const imageGallery = document.querySelector("#showCaseImg")

const imgSources = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg"
]

const navHandler = function () {
  cover.classList.toggle("visible")
  navMenu.classList.toggle("visible")
  const body = document.body
  body.classList.toggle("disable-scroll")
}

const forwardImg = function () {
  let imageCurrentSource = imageGallery.src.split("/")
  imageCurrentSource = imageCurrentSource[imageCurrentSource.length - 1]
  imgSources.forEach( (source, index) => {
    source = source.split("/")
    if(imageCurrentSource == source[source.length - 1]) {
      if (index + 1 >= 4) {
        imageGallery.src = imgSources[0]
      }
      else {
        imageGallery.src = imgSources[index + 1]
      }
    }
  });
}

const backwardImg = function () {
  const reversedImgSources = [ ...imgSources ].reverse()
  let imageCurrentSource = imageGallery.src.split("/")
  imageCurrentSource = imageCurrentSource[imageCurrentSource.length - 1]
  reversedImgSources.forEach( (source, index) => {
    source = source.split("/")
    if(imageCurrentSource == source[source.length - 1]) {
      if (index + 1 >= 4) {
        imageGallery.src = reversedImgSources[0]
      }
      else {
        imageGallery.src = reversedImgSources[index + 1]
      }
    }
  });
}

menuBtn.addEventListener("click", navHandler)
closeBtn.addEventListener("click", navHandler)
arrowRight.addEventListener("click", forwardImg)
arrowLeft.addEventListener("click", backwardImg)