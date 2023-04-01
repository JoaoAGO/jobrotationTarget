let str = prompt("Insira uma string para ser invertida:");
let strRev = "";

for (let i = str.length - 1; i >= 0; i--) {
  strRev += str[i];
}

console.log(`A string original era: ${str}`);
console.log(`A string invertida é: ${strRev}`);