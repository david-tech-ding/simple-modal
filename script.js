const openModalBtn = document.querySelector('#open-modal-btn')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

openModalBtn.addEventListener('click', () => {
    openModal()
})

closeModalBtn.addEventListener('click', () => {
    closeModal()
})

overlay.addEventListener('click', () => {
    closeModal()
})

function openModal() {
    modal.classList.add('open')
    overlay.classList.add('show')    
}

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('show')    
}