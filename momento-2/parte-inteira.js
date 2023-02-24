const numerosReais = [2.5, 3.8, 4.2, 5.1, 6.4];

numerosReais.forEach(function(numero) {
  const parteInteira = Math.trunc(numero);
  console.log(`A parte inteira de ${numero} é ${parteInteira}`);
});
