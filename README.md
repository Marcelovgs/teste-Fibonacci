# Fibonacci Sequence Checker

Este projeto é uma aplicação simples em JavaScript que calcula a sequência de Fibonacci e verifica se um número informado pertence à sequência. A sequência de Fibonacci inicia com os números 0 e 1, e o próximo número é sempre a soma dos dois anteriores. Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

## Como funciona

1. O programa recebe um número e calcula a sequência de Fibonacci até que o número seja encontrado ou até que o valor ultrapasse o número informado.
2. Em seguida, ele verifica se o número está presente na sequência.
3. A resposta é exibida no console informando se o número pertence ou não à sequência de Fibonacci.

## Exemplo de uso

```javascript
// Defina aqui o número que deseja verificar
const numero = 21; // Altere o valor para o número que deseja verificar

// Exibe o resultado no console
console.log(pertenceFibonacci(numero));
