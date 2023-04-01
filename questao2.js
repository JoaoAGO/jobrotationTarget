function isFibonacci(num) {
    let prev = 0;
    let curr = 1;
    let next = 1;
  
    while (next <= num) {
      if (num === next) {
        return true; // o número pertence à sequência de Fibonacci
      }
      prev = curr;
      curr = next;
      next = prev + curr;
    }
  
    return false; // o número não pertence à sequência de Fibonacci
  }
  
  const num = parseInt(prompt("Digite um número inteiro:"));
  const isNumFibonacci = isFibonacci(num);
  
  if (isNumFibonacci) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
  