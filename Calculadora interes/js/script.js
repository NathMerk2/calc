let num1, num2, num3;

function interesComp() {
    let int, total;
    
    num1 = document.getElementById("valor1").value;
    num2 = document.getElementById("valor2").value;
    num3 = document.getElementById("valor3").value;
    por = num2 / 100;
    int = 1 + por;
    total = num1 * Math.pow(int, num3);

    let r = total;

    document.getElementById("resultado").innerHTML = " $"+ total.toFixed(2);
    document.getElementById("interes").innerHTML = "";
    for (let i = 1; i <= num3; i++) {
        let interes = num1 * Math.pow(int, i);
        document.getElementById("interes").innerHTML += "Año " + i + ": $" + interes.toFixed(2) + "<br>" + "Interés: +" + (interes - num1).toFixed(2) + "<br>"; 
    } 

}

