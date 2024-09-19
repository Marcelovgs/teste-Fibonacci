// Função para gerar a sequência de Fibonacci até o número informado
function pertenceFibonacci(num) {
    if (num < 0) return `${num} não pertence à sequência de Fibonacci.`;

    // Inicializando os primeiros valores da sequência
    let fib1 = 0;
    let fib2 = 1;

    // Caso o número seja 0 ou 1, já pertence à sequência
    if (num === fib1 || num === fib2) return `${num} pertence à sequência de Fibonacci.`;

    // Calculando a sequência de Fibonacci até encontrar ou ultrapassar o número
    let fibAtual = fib1 + fib2;
    while (fibAtual <= num) {
        if (fibAtual === num) return `${num} pertence à sequência de Fibonacci.`;
        
        // Atualizando os valores para os próximos na sequência
        fib1 = fib2;
        fib2 = fibAtual;
        fibAtual = fib1 + fib2;
    }

    // Se o laço termina, o número não pertence à sequência
    return `${num} não pertence à sequência de Fibonacci.`;
}

// Defina aqui o número que deseja verificar
const numero = 21; // Altere o valor para o número que deseja verificar

// Exibe o resultado no console
console.log(pertenceFibonacci(numero));
