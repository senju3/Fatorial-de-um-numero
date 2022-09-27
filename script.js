const main = document.getElementById('main')
const input = document.querySelector('#numero')
const button = document.querySelector('#button')
button.addEventListener('click', (event) => {
    event.preventDefault()
    const numero_escolhido = input.value;
    let fatorial = numero_escolhido;
    if (numero_escolhido > 0) {
        for (cont=1;cont < numero_escolhido; cont++) {
            fatorial = fatorial * (numero_escolhido - cont)
        }
        const resultado = document.createElement('h2')
        resultado.innerText = `Resultado de ${numero_escolhido}! é : ${fatorial}`
        main.appendChild(resultado)
    } else {
        alert('Escolha um número positivo')
    }
})