const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const historyContainer = document.querySelector('#history-container');
const historyList = document.querySelector('#history-list');
const operationsHistory = JSON.parse(window.localStorage.getItem("History")) || [];


const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));

});

const saveInHistory = () => {
    operationsHistory.push(`${display.computar(boton.value)}`);
    window.localStorage.setItem("History", JSON.stringify(operationsHistory));
}

const deleteHistory = () => {
    window.localStorage.removeItem("History");
    operationsHistory.length = 0;
    setHistory();
}

const showHistory = () => {
    historyContainer.classList.add('show');
    setHistory();
}

const closeHistory = () => {
    historyContainer.classList.remove('show');
    historyList.innerHTML = ''
}

const setHistory = () => {

    noOperation.innerHTML = '';
    historyList.innerHTML = ''

    if (operationsHistory.length > 0) {
        historyList.classList.add('showSection')
        noOperation.classList.remove('showSection')
            (operationsHistory.reverse().map(operation => {
                const grid = document.createElement('p');
                grid.innerHTML = operation
                historyList.appendChild(grid)
            }))
    } else {
        noOperation.classList.add('showSection')
        historyList.classList.remove('showSection')
        const message = document.createElement('h3');
        message.innerHTML = "No hay ninguna operación en el historial"
        noOperation.appendChild(message)
    }
}