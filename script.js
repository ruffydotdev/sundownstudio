// locomotive scroll..
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
})

// video Animation function.
const videoAnimation = () => {
  let elementContainer = document.querySelector('.element-container')
  let fixedVideo = document.querySelector('.fixed-video')

  elementContainer.addEventListener('mouseenter', () => {
    fixedVideo.style.display = 'block'
  })
  elementContainer.addEventListener('mouseleave', () => {
    fixedVideo.style.display = 'none'
  })

  let elements = document.querySelectorAll('.elements')
  let video = document.querySelector('.video')

  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      let videoData = element.getAttribute('data-video')
      video.src = videoData
    })
  })
}

// reel Animation function.......
const reelAnimation = () => {
  let reelTags = document.querySelectorAll('.reel-header')
  let reelImage = document.querySelector('.reel-image')
  let reelPara = document.querySelector('.reel-para')

  let currentTag = document.querySelector('.orange-border')
  currentTag.style.borderColor = `rgb(254, 56, 12)`
  currentTag.style.color = `white`

  reelTags.forEach((reelTag) => {
    reelTag.addEventListener('click', () => {
      let reelParas = reelTag.getAttribute('data-para')
      let reelImages = reelTag.getAttribute('data-image')
      let currentTag = document.querySelector('.orange-border')
      currentTag.classList.remove('orange-border')
      reelTag.classList.add('orange-border')
      reelTag.style.borderColor = `rgb(254, 56, 12)`
      reelTag.style.color = `white`
      currentTag.style.borderColor = `rgb(80, 74, 69)`
      currentTag.style.color = `rgb(80, 74, 69)`
      reelImage.src = reelImages
      reelPara.textContent = reelParas
    })
  })
}

// Swiper animation Function...
const slideAnimation = () => {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

// Animating the drag cursor...
const cursorAnimation = () => {
  const cursor = document.querySelector('.drag-cursor')
  window.addEventListener('mousemove', (details) => {
    cursor.style.top = `${details.clientY}px`
    cursor.style.left = `${details.clientX}px`
  })
}

// Function to show drag cursor on swiper....
const showCursor = () => {
  const cursor = document.querySelector('.drag-cursor')
  const slider = document.querySelector('.swiper')
  slider.addEventListener('mouseover', () => {
    cursor.style.display = 'flex'
  })
  slider.addEventListener('mouseleave', () => {
    cursor.style.display = 'none'
  })
}

videoAnimation()
reelAnimation()
slideAnimation()
cursorAnimation()
showCursor()
