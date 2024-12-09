let somaidades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt('Digite a idade da ' + i + ' pessoa:'));
    
    somaidades += idade;
}
let mediadasidades = somaidades/20;

alert('A soma das idades é: ' + somaidades);
