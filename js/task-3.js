const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
input.addEventListener("input", () => {
    const trimInput = input.value.trim()
    
    if (trimInput === '') {
        output.textContent = 'Anonymous'
    } else {
        output.textContent = input.value
    }
})