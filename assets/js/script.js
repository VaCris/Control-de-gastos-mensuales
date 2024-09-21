let gastos = [];
let total = 0;

function clickBoton() {
    const nombre = document.getElementById('nombreGasto').value;
    const valor = parseFloat(document.getElementById('valorGasto').value);
    const descripcion = document.getElementById('descripcionGasto').value;

    if (nombre && valor >= 0) {
        const gasto = { nombre, valor, descripcion };
        gastos.push(gasto);
        renderGastos();
        actualizarTotal();
        limpiarFormulario();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function renderGastos() {
    const lista = document.getElementById('listaDeGastos');
    lista.innerHTML = '';

    gastos.forEach((gasto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${gasto.nombre} - US$ ${gasto.valor.toFixed(2)} 
            <button onclick="editarGasto(${index})"><i class="fas fa-edit"></i></button>
            <button onclick="eliminarGasto(${index})"><i class="fas fa-trash"></i></button>
        `;
        lista.appendChild(li);
    });
}

function eliminarGasto(index) {
    gastos.splice(index, 1);
    renderGastos();
    actualizarTotal();
}

function editarGasto(index) {
    const gasto = gastos[index];
    document.getElementById('nombreGasto').value = gasto.nombre;
    document.getElementById('valorGasto').value = gasto.valor;
    document.getElementById('descripcionGasto').value = gasto.descripcion;

    eliminarGasto(index);
}

function actualizarTotal() {
    total = gastos.reduce((sum, gasto) => sum + gasto.valor, 0);
    document.getElementById('totalGastos').innerText = total.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}
