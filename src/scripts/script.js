const $ = document.getElementById.bind(document); // 
const calcularImc = $('calcularImc');

const calcular = () => {
    let peso = parseFloat($('peso').value);
    let altura = parseFloat($('altura').value);
    let resultado = $('resultado');

    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        resultado.innerHTML = classificaImc(imc);

        // Limpar resultado após 9 segundos (9000 milissegundos)
        setTimeout(() => {
            resultado.innerHTML = '';
            $('peso').value = 0; // Limpar campo de peso
            $('altura').value = 0; // Limpar campo de altura
        }, 9000);
        
    } else {
        resultado.innerHTML = 'Preencha os campos com valores válidos';
    }
}

const classificaImc = (imc) => {
    if (imc <= 18.5) {
        return `<p class="mt-4 bg-danger text-light p-3">O seu IMC é ${imc.toFixed(2)} e você está Abaixo do Peso!</p>`;
    } else if (imc <= 25) {
        return `<p class="mt-4 bg-success text-light p-3">O seu IMC é ${imc.toFixed(2)} e você está com Peso Normal.</p>`;
    } else if (imc <= 30) {
        return `<p class="mt-4 bg-warning text-dark p-3">O seu IMC é ${imc.toFixed(2)} e você está com Sobrepeso!</p>`;
    } else if (imc <= 35) {
        return `<p class="mt-4 bg-danger text-light p-3">O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 1!</p>`;
    } else if (imc <= 40) {
        return `<p class="mt-4 bg-danger text-light p-3">O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 2!</p>`;
    } else {
        return `<p class="mt-4 bg-danger text-light p-3">O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 3!</p>`;
    }
}

calcularImc.addEventListener('click', calcular);
