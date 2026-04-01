//solicitar os dados do usuario 
let peso = Number(prompt("digite seu peso (ex: 60kg)"));
let altura = Number(prompt("digite sua altura em metros (ex: 1,75)"));

if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0){
    let imc = peso / (altura ** 2);
    let imcFormatado = imc.toFixed(1);

    let classificado = "";
    if (imc < 18.5) {
        classificação = "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        classificação = "sobrepeso";
    }
    else if (imc >= 30) {
        classificação = "obesidade";
    }
    alert(`Seu imc é ${imcFormatado}. Classificação`); {       
    } 
    } else {
        alert("Valores invalidos. lembre de usar apenas numeros e ponto no lugar de virgula(ex: 1.75)");
}

