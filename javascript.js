function main() {

    let numero1, numero2, resultado;
    let impar, par;

    numero1 = prompt("Digite o  primeiro número");
    numero2 = prompt("Digite o segundo número maior do que o primeiro")
  
    resultado = numero1

    while (resultado < numero2) {
        if (resultado % 2 == 0) {
       resultado=alert( resultado + " esse número será par ");
        } else {
            resultado=alert( resultado + " esse número será impar ");
        }
    }

}

main()
