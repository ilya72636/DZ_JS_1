document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-answer')

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling
            answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none'
            this.textContent = (this.textContent === 'Показать ответ') ? 'Скрыть ответ' : 'Показать ответ'
        })
    })
})