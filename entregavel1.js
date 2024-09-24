//CONTADOR:
function Contador() {
    let n = prompt("Diga a quantidade de notas");
    let tempGrade;
    let gradeList = [];
    let counter = 0;
    let i = 0;
    while (i < n) {
      tempGrade = prompt(`Diga a nota número ${i + 1}`);
      gradeList.push(tempGrade);
      if (tempGrade > 50) {
        counter++;
      }
      i++;
    }
    console.log(counter);
    console.log(gradeList.join(" "));
  }
  
  //FIBONACCI:
  function Fibonacci() {
    let n = prompt("Diga qual será o número de termos da sequência");
    n = parseInt(n);
    console.log(n);
    let fib1 = 0;
    let fib2 = 1;
    let fibTemp;
    let fibList = [];
    let i = 3;
    while (i <= n) {
      fibTemp = fib1 + fib2;
      fibList.push(fibTemp);
      fib1 = fib2;
      fib2 = fibTemp;
      i++;
    }
    console.log(`0, 1, ${fibList.join(", ")}`);
  }
  
  //MDC:
  function MDC() {
    let input = prompt("Diga os dois números separados por vírgula");
    let numList = input.split(",");
    let sorted = input.split(",").sort((a, b) => a - b);
    let mdc = 0;
    if (sorted[1] % sorted[0] === 0) {
      mdc = sorted[0];
    } else {
      for (let i = 0; i < sorted[0]; i++) {
        if (sorted[1] % i === 0 && sorted[0] % i === 0) {
          mdc = i;
        }
      }
    }
    console.log(numList);
    console.log(mdc);
  }
  
  //ORDENAGEM:
  function Ordenagem() {
    let n = prompt("Diga a quantidade de números que serão inseridos");
    let i = 0;
    let sorted = [];
    let notSorted = [];
    while (i < n) {
      let input = prompt(`Diga o ${i + 1}° número`);
      notSorted.push(input);
      sorted.push(input);
      i++;
    }
    sorted.sort((a, b) => a - b);
    console.log(notSorted.join(", "));
    console.log(sorted.join(", "));
  }
  
  //PRIMO
  function NumeroPrimo() {
    let input = prompt("Diga o número que você quer checar se é primo");
    let primeCheck = "É primo";
    for (let i = 0; i < input; i++) {
      if (input % i === 0 && i != input && i != 1) {
        primeCheck = "Não é primo";
      }
    }
    console.log(input);
    console.log(primeCheck);
  }
  
  //SomaTotal
  function SomaTotal() {
    let n = prompt("Diga a quantidade de números");
    let numberList = [];
    let i = 0;
    while (i < parseInt(n)) {
      numberInput = prompt(`Diga o ${i + 1}° número`);
      numberList.push(parseFloat(numberInput));
      i++;
    }
    numberSum = numberList.reduce((a, b) => a + b);
    console.log(numberList.join(`, `));
    console.log(numberSum);
  }
  
  //ativando as funções:
  Contador();
  //Fibonacci();
  //MDC();
  //Ordenagem();
  //NumeroPrimo();
  //SomaTotal();
  
  