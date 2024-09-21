let gastos = [];
let totalGastos = 0;

function clickBoton() {
    const nombre = document.getElementById('nombreGasto').value;
    const valor = parseFloat(document.getElementById('valorGasto').value);
    const descripcion = document.getElementById('descripcionGasto').value;

    if (valor > 150) {
        alert("¡Gasto mayor a 150$!");
    }

    gastos.push({ nombre, valor, descripcion });
    totalGastos += valor;
    
    actualizarLista();
    limpiarFormulario();
}

function actualizarLista() {
    const lista = document.getElementById('listaDeGastos');
    lista.innerHTML = '';
    
    gastos.forEach((gasto, index) => {
        const li = document.createElement('li');
        li.textContent = `${gasto.nombre}: $${gasto.valor} - ${gasto.descripcion}`;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarGasto(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
    
    document.getElementById('totalGastos').textContent = totalGastos.toFixed(2);
}

function eliminarGasto(index) {
    totalGastos -= gastos[index].valor;
    gastos.splice(index, 1);
    actualizarLista();
}

function limpiarFormulario() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}
