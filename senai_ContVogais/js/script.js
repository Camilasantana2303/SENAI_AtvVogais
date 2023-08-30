function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}

function contarEVoltar() {
    const userInput = document.getElementById("inputString").value;
    const numeroVogais = contarVogais(userInput);
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `O número de vogais na palavra "${userInput}" é: ${numeroVogais}`;
}



