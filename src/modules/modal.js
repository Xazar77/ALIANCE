

const modal = () => {
    const overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.popup')
   

    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target.closest('.btn__consult') || e.target.closest('.step__btn')) {
            overlay.style.display = 'block'
            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
        }
        if (e.target.closest('.overlay') || e.target.closest('.popup__close')) {
            overlay.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
        
    })
    document.addEventListener('keydown', (e) => { 
        if (e.code === 'Escape') {
            overlay.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
    })
}
export default modal