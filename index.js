const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const product = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

numberIndicator.innerHTML = '01'
let active = 0
const total = product.length
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1
        if (active === total) {
            active = 0

        }
    } else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1


        }
    }

    product[active].classList.add('active')
    dots[active].classList.add('active')
    numberIndicator.innerHTML = `0${active+1}`
}

prev.addEventListener('click', () => {
    update(-1)
})
next.addEventListener('click', () => {
    update(1)
})

