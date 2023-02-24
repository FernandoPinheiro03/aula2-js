const numerosReais = [3.2, 4.7, 6.9, 5.5, 1.3];

numerosReais.forEach(function(numero) {
  const arredondado = Math.floor(numero);
  console.log(`O número ${numero} arredondado para baixo é ${arredondado}`);
});
