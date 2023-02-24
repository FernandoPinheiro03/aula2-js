const numerosReais = [2.5, 3.8, 4.2, 5.1, 6.4];

numerosReais.forEach(function(numero) {
  const quadrado = Math.pow(numero, 2);
  console.log(`O quadrado de ${numero} é ${quadrado}`);
});
