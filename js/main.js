const row = document.querySelector('.carousel-container')
const movies = document.querySelectorAll('.movie')
const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')



arrowRight.addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth

  const indicatorActive = document.querySelector('.indicators .active')
  if (indicatorActive.nextSibling) {
    indicatorActive.nextSibling.classList.add('active')
    indicatorActive.classList.remove('active')
  }
})

arrowLeft.addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth

  const indicatorActive = document.querySelector('.indicators .active')
  if (indicatorActive.previousSibling) {
    indicatorActive.previousSibling.classList.add('active')
    indicatorActive.classList.remove('active')
  }
})

const numPages = Math.ceil(movies.length / 5)

for (let i = 0; i < numPages; i++) {
  const indicator = document.createElement('button')
  const indicators = document.querySelector('.indicators')

  if (i === 0) {
    indicator.classList.add('active')
  }

  indicators.appendChild(indicator)

  indicator.addEventListener('click', (e) => {
    row.scrollLeft = i * row.offsetWidth

    const indicatorActive = document.querySelector('.indicators .active')
    indicatorActive.classList.remove('active')
    e.target.classList.add('active')
  })
  
}