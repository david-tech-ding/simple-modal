const openModalBtn = document.querySelector('#open-modal-btn')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

openModalBtn.addEventListener('click', () => {
    modal.classList.add('open')
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})



