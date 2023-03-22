const openModalBtn = document.querySelector('#open-modal-btn')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

openModalBtn.addEventListener('click', () => {
    modal.classList.add('open')
    overlay.classList.add('show')
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open')
    overlay.classList.remove('show')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('open')
    overlay.classList.remove('show')
})
