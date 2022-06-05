const containerModal = document.querySelector(".container-modal");
let resultado = document.getElementById("inputext");
let historial = JSON.parse(localStorage.getItem("Historial")) || [];
let operacion;

const closeHistorial = document.querySelector("#close-historial");
closeHistorial.addEventListener("click", () => {
    containerModal.style.display = "none";
});

let calculate = (num) => {
    resultado.value += num;
};

let Result = () => {
    try {
        operacion = historial.push(resultado.value + " = " + eval(resultado.value));
        resultado.value = eval(resultado.value);
        localStorage.setItem("Historial", JSON.stringify(historial));
    } catch (err) {
        alert("Ingresa un operacion valida");
    }
};

function Clear() {
    resultado.value = " ";
}

function Del() {
    resultado.value = resultado.value.slice(0, -1);
}

const DesplegarHistorial = () => {
    let historial = JSON.parse(localStorage.getItem("Historial"));
    let tableBody = document.getElementById("tablaid");
    containerModal.style.display = "block";
    tableBody.innerHTML = "";

    historial.map((d) => {
        let fila = document.createElement("tr");
        let resultado = document.createElement("td");
        resultado.innerText = d;

        fila.appendChild(resultado);
        tableBody.appendChild(fila);
    });
};
const limpiarHistorial = () => {
    localStorage.clear();
    historial = [];
    document.querySelector("#tablaid").innerHTML = "";
};