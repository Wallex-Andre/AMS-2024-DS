function verificarParImpar() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");
  
    if (numero === "") {
      resultado.textContent = "Por favor, insira um número.";
      return;
    }
  
    numero = parseInt(numero);

    if (isNaN(numero)) {
      return 'O valor inserido não é um número válido.';
    }

    else if (numero % 2 === 0){
        resultado.textContent = "O numero " + numero + " é par.";
    }

    else{
        resultado.textContent = "O numero " + numero + " é ímpar.";
    }
  }