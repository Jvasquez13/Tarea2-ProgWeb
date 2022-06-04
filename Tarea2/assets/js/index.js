let resultado = document.getElementById("inputext");
let historial = [];
let operacion;
localStorage.setItem('Historial', JSON.stringify(resultado.value));
const data = JSON.parse(localStorage.getItem('items'));

let calculate = (num) => {
    resultado.value += num;
}

let Result = () => {
    try {

        operacion = historial.push(resultado.value + " = " + eval(resultado.value));
        resultado.value = eval(resultado.value)

        localStorage.setItem('Historial', JSON.stringify(historial));

    } catch (err) {
        alert("Ingresa un operacion valida");
    }
}

function Clear() {

    resultado.value = " ";
}

function Del() {

    resultado.value = resultado.value.slice(0, -1);
}

const DesplegarHistorial = () => {
    let historial = JSON.parse(localStorage.getItem('Historial'));
    let tableBody = document.getElementById('tablaid');

    tableBody.innerHTML = '';

    historial.map(d => {
        let fila = document.createElement('tr');
        let resultado = document.createElement('td');

        resultado.innerText = d.resultado;

        fila.appendChild(resultado);
        tableBody.appendChild(fila);
    });

}
const limpiarHistorial = () => {
    localStorage.clear();
    cargarHistorial();
}