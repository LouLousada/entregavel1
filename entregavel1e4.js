// CONTADOR
function Contador(notas) {
  let counter = 0;
  notas.forEach((nota) => {
    if (nota > 50) {
      counter++;
    }
  });
  return counter;
}

// Testes para Contador
console.log(Contador([55, 60, 70]) === 3);  // Esperado: 3 (todas acima de 50)
console.log(Contador([40, 51, 20, 52]) === 2);  // Esperado: 2 (apenas duas acima de 50)


// FIBONACCI
function Fibonacci(n) {
  let fib1 = 0, fib2 = 1, fibList = [0, 1];
  for (let i = 3; i <= n; i++) {
    let fibTemp = fib1 + fib2;
    fibList.push(fibTemp);
    fib1 = fib2;
    fib2 = fibTemp;
  }
  return fibList;
}

// Testes para Fibonacci
console.log(Fibonacci(5).join(",") === "0,1,1,2,3");  // Esperado: [0, 1, 1, 2, 3]
console.log(Fibonacci(8).join(",") === "0,1,1,2,3,5,8,13");  // Esperado: [0, 1, 1, 2, 3, 5, 8, 13]


// MDC
function MDC(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Testes para MDC
console.log(MDC(48, 12) === 12);  // Esperado: 12
console.log(MDC(17, 23) === 1);  // Esperado: 1 (não têm divisores comuns além de 1)


// ORDENAGEM
function Ordenagem(lista) {
  return lista.slice().sort((a, b) => a - b);
}

// Testes para Ordenagem
console.log(Ordenagem([3, 1, 4, 5, 2]).join(",") === "1,2,3,4,5");  // Esperado: [1, 2, 3, 4, 5]
console.log(Ordenagem([1, 2, 3, 4]).join(",") === "1,2,3,4");  // Esperado: [1, 2, 3, 4] (já ordenado)


// PRIMO
function NumeroPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Testes para NumeroPrimo
console.log(NumeroPrimo(17) === true);  // Esperado: true (é primo)
console.log(NumeroPrimo(15) === false);  // Esperado: false (não é primo)


// SOMATOTAL
function SomaTotal(numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

// Testes para SomaTotal
console.log(SomaTotal([10, 20, 30]) === 60);  // Esperado: 60
console.log(SomaTotal([10, -5, 15]) === 20);  // Esperado: 20

  
  //ativando as funções:
  Contador();
  //Fibonacci();
  //MDC();
  //Ordenagem();
  //NumeroPrimo();
  //SomaTotal();
  
  
