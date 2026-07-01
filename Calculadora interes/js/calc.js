/*let ciclo = true;
function suma() {
    let suma;

    let cant = parseInt(prompt("Desea sumar tres números? \n(Indique con [3] o presione enter para omitir."));

  if (cant == 3) {
    suma2();
    return;
  }

    num1 = parseFloat(prompt("Introduzca el primer valor a sumar: "));
    num2 = parseFloat(prompt("Introduzca el segundo valor a sumar: "));

    suma = num1 + num2;

    alert("El resultado de la suma de dos números es " + suma);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));
    if (print == 1) {
        document.write(num1 + " + " + num2 + " Es igual a" + "<br>" + suma);
        ciclo = false;
  }
}
function suma2() {
    let suma;

    num1 = parseFloat(prompt("Suma con tres números\nIntroduzca el primer valor a sumar: "));
    num2 = parseFloat(prompt("Suma con tres números\nIntroduzca el segundo valor a sumar: "));
    num3 = parseFloat(prompt("Suma con tres números\nIntroduzca el tercer valor a sumar: "));

    suma = num1 + num2 + num3;

    alert("El resultado de la suma de tres números es " + suma);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? \npresione 1. omitir con enter."));

    if (print == 1) {
        document.write(
        num1 + " + " + num2 + " + " + num3 + " Es igual a" + "<br>" + suma);
        ciclo = false;
  }
}
function mult() {
  let cant = parseInt(prompt("Desea multiplicar tres números? \n(Indique con [3] o presione enter para omitir."));

  if (cant == 3) {
    mult2();
    return;
  }

  let mult;

  num1 = parseFloat(prompt("Introduzca el primer valor a multiplicar: "));
  num2 = parseFloat(prompt("Introduzca el segundo valor a multiplicar: "));

  mult = num1 * num2;

  alert("El resultado de la multiplicación de dos números es " + mult);

  let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));
  if (print == 1) {
    document.write(num1 + " x " + num2 + " Es igual a" + "<br>" + mult);
    ciclo = false;
  }
}
function mult2() {
    let mult;

    num1 = parseFloat(prompt("Multiplicación con tres números-\nIntroduzca el primer valor a multiplicar: "));
    num2 = parseFloat(prompt("Multiplicación con tres números-\nIntroduzca el segundo valor a multiplicar: "));
    num3 = parseFloat(prompt("Multiplicación con tres números-\nIntroduzca el tercer valor a multiplicar: "));

    mult = num1 * num2 * num3;

    alert("El resultado de la multiplicación de tres números es " + mult);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));

    if (print == 1) {
        document.write(
        num1 + " x " + num2 + " x " + num3 + " Es igual a" + "<br>" + mult);
        ciclo = false;
    }
}
function divi() {
    let cant = parseInt(prompt("Desea dividir tres números? \n(Indique con [3] o presione enter para omitir."));

    if (cant == 3) {
    divi2();
    return;
    }

    let div;

    num1 = parseFloat(prompt("Introduzca el primer valor a dividir: "));
    num2 = parseFloat(prompt("Introduzca el segundo valor a dividir: "));

    div = num1 / num2;

    alert("El resultado de la división de dos números es " + div);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));

    if (print == 1) {
        document.write(num1 + " % " + num2 + " Es igual a" + "<br>" + div);
        ciclo = false;
    }
}
function divi2() {
    let div;

    num1 = parseFloat(prompt("División con tres números\nIntroduzca el primer valor a dividir: "));
    num2 = parseFloat(prompt("División con tres números\nIntroduzca el segundo valor a dividir: "));
    num3 = parseFloat(prompt("División con tres números\nIntroduzca el tercer valor a dividir: "));

    div = num1 / num2 / num3;

    alert("El resultado de la división de tres números es " + div);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));

    if (print == 1) {
        document.write(
        num1 + " % " + num2 + " % " + num3 + " Es igual a" + "<br>" + div);
        ciclo = false;
    }
}
function interes() {
    sim = parseInt(prompt("Desea calcular interés simple o compuesto?\n1 para calcular interés compuesto.\nenter para simple"));
    if (sim == 1) {
        interesComp();
        return
    }
    let int;

    num1 = parseFloat(prompt("Calculadora interés simple\nIntroduzca la cantidad: (valor a calcular)."));
    num2 = parseFloat(prompt("Calculadora interés simple\na que cantidad de intereses? \n(indique con decimales)."));
    num3 = parseFloat(prompt("Calculadora interés simple\nA cuánto tiempo? (años)."));

    int = num1 * num2 * num3;
    total = int + num1;

    alert(num1 + " A una tasa de intereses del " + num2 + " es igual a " + total);

    let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));

    if (print == 1) {
        document.write(num1 + " A una tasa de intereses del " + num2 + " Durante " + num3 + " años " + " es igual a " + total);
        ciclo = false;
    }
}*/

    /*num1 = parseFloat(prompt("Calculadora interés compuesto\nIntroduzca la cantidad: (valor a calcular)."));
    num2 = parseFloat(prompt("Calculadora interés compuesto\na que cantidad de intereses?)."));
    num3 = parseFloat(prompt("Calculadora interés compuesto\nA cuánto tiempo? (años)."));*/
    /*alert(num1 + " a una tasa de interés compuesto del " + num2 + "% anual, durante " + num3 + " años " + " es igual a $" + total + "<br> añadiendo un " + int + "% el primer año,<br> " + int*int + "% el segundo, etc..")*//*alert(num1 + " a una tasa de interés compuesto del " + num2 + "% anual, durante " + num3 + " años " + " es igual a $" + total );

   let print = parseInt(prompt("Desea mostrar el resultado en el navegador? presione 1. \nomitir con enter."));

    if (print == 1) {
        document.write(num1 + " a una tasa de interés compuesto del " + num2 + "% anual, durante " + num3 + " años " + " es igual a $" + total + "<br> añadiendo un " + int + "% el primer año,<br> " + int*int + "% el segundo, etc..");
        ciclo = false;
    }*/
/*while (ciclo == true) {
    let calcular = parseInt(prompt("Que operación quiere hacer?\n(1 para suma) (2 para multiplicar) (3 para dividir) (4 para calcular intereses). \nPresione 5 para salir." ));
    if (calcular == 1) {
        suma();
    }
    if (calcular == 2) {
        mult();
    }
    if (calcular == 3) {
        divi();
    }
    if (calcular == 4) {
        interes();
    }
    if (calcular == 5) {
        alert("Deteniendo proceso...")
        break;
    }
    if (calcular > 5) {
      alert("Fuera de rango! Introduzca un valor igual o menor a 4");
    }
}*/