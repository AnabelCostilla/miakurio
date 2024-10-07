class MiPez {
    constructor(nombreAdoptado, nombreCientifico, nombreComun, fechaAdquisicion, caracteristicas, comportamiento, estadoSalud, aislamiento, observacion) {
        this.nombreAdoptado = nombreAdoptado;
        this.nombreCientifico = nombreCientifico;
        this.nombreComun = nombreComun;
        this.fechaAdquisicion = fechaAdquisicion;
        this.caracteristicas = caracteristicas;
        this.comportamiento = comportamiento;
        this.estadoSalud = estadoSalud;
        this.aislamiento = aislamiento;
        this.observacion = observacion;
    }
}

let misPeces = [];

function guardarPecesEnLocalStorage() {
    for (let i = 0; i < misPeces.length; i++) {
        const pez = misPeces[i];
        localStorage.setItem(`pez_${i}_nombreAdoptado`, pez.nombreAdoptado);
        localStorage.setItem(`pez_${i}_nombreCientifico`, pez.nombreCientifico);
        localStorage.setItem(`pez_${i}_nombreComun`, pez.nombreComun);
        localStorage.setItem(`pez_${i}_fechaAdquisicion`, pez.fechaAdquisicion);
        localStorage.setItem(`pez_${i}_caracteristicas`, pez.caracteristicas);
        localStorage.setItem(`pez_${i}_comportamiento`, pez.comportamiento);
        localStorage.setItem(`pez_${i}_estadoSalud`, pez.estadoSalud);
        localStorage.setItem(`pez_${i}_aislamiento`, pez.aislamiento);
        localStorage.setItem(`pez_${i}_observacion`, pez.observacion);
    }
    localStorage.setItem('numPeces', misPeces.length.toString());
}

function cargarPecesDesdeLocalStorage() {
    const peces = [];
    const numPeces = parseInt(localStorage.getItem('numPeces') || '0');
    for (let i = 0; i < numPeces; i++) {
        const nombreAdoptado = localStorage.getItem(`pez_${i}_nombreAdoptado`);
        const nombreCientifico = localStorage.getItem(`pez_${i}_nombreCientifico`);
        const nombreComun = localStorage.getItem(`pez_${i}_nombreComun`);
        const fechaAdquisicion = localStorage.getItem(`pez_${i}_fechaAdquisicion`);
        const caracteristicas = localStorage.getItem(`pez_${i}_caracteristicas`);
        const comportamiento = localStorage.getItem(`pez_${i}_comportamiento`);
        const estadoSalud = localStorage.getItem(`pez_${i}_estadoSalud`);
        const aislamiento = localStorage.getItem(`pez_${i}_aislamiento`);
        const observacion = localStorage.getItem(`pez_${i}_observacion`);
        peces.push(new MiPez(nombreAdoptado, nombreCientifico, nombreComun, fechaAdquisicion, caracteristicas, comportamiento, estadoSalud, aislamiento, observacion));
    }
    return peces;
}

function actualizarListaMisPeces() {
    const listaMisPeces = document.getElementById('listaMisPeces');
    listaMisPeces.innerHTML = '';

    misPeces.forEach((pez, index) => {
        const pezElement = document.createElement('div');
        pezElement.classList.add('pez-item');
        pezElement.innerHTML = `
            <h3>${pez.nombreAdoptado}</h3>
            <p>Nombre científico: ${pez.nombreCientifico}</p>
            <p>Nombre común: ${pez.nombreComun}</p>
            <p>Fecha de adquisición: ${pez.fechaAdquisicion}</p>
            <p>Características: ${pez.caracteristicas}</p>
            <p>Comportamiento: ${pez.comportamiento}</p>
            <p>Estado de salud: ${pez.estadoSalud}</p>
            <p>Aislamiento: ${pez.aislamiento}</p>
            <p>Observación: ${pez.observacion}</p>
            <button onclick="modificarPez(${index})">Modificar</button>
        `;
        listaMisPeces.appendChild(pezElement);
    });
}

function modificarPez(index) {
    const pez = misPeces[index];
    document.getElementById('nombreAdoptado').value = pez.nombreAdoptado;
    document.getElementById('nombreCientificoMiPez').value = pez.nombreCientifico;
    document.getElementById('nombreComunMiPez').value = pez.nombreComun;
    document.getElementById('fechaAdquisicion').value = pez.fechaAdquisicion;
    document.getElementById('caracteristicas').value = pez.caracteristicas;
    document.getElementById('comportamiento').value = pez.comportamiento;
    document.getElementById('estadoSalud').value = pez.estadoSalud;
    document.getElementById('aislamiento').value = pez.aislamiento;
    document.getElementById('observacion').value = pez.observacion;

    const submitButton = document.querySelector('#misPecesForm button[type="submit"]');
    submitButton.textContent = 'Actualizar Pez';
    submitButton.onclick = function(e) {
        e.preventDefault();
        actualizarPez(index);
    };
}

function actualizarPez(index) {
    const nombreAdoptado = document.getElementById('nombreAdoptado').value;
    const nombreCientifico = document.getElementById('nombreCientificoMiPez').value;
    const nombreComun = document.getElementById('nombreComunMiPez').value;
    const fechaAdquisicion = document.getElementById('fechaAdquisicion').value;
    const caracteristicas = document.getElementById('caracteristicas').value;
    const comportamiento = document.getElementById('comportamiento').value;
    const estadoSalud = document.getElementById('estadoSalud').value;
    const aislamiento = document.getElementById('aislamiento').value;
    const observacion = document.getElementById('observacion').value;

    misPeces[index] = new MiPez(nombreAdoptado, nombreCientifico, nombreComun, fechaAdquisicion, caracteristicas, comportamiento, estadoSalud, aislamiento, observacion);
    
    guardarPecesEnLocalStorage();
    actualizarListaMisPeces();
    resetearFormulario();
}

function resetearFormulario() {
    document.getElementById('misPecesForm').reset();
    const submitButton = document.querySelector('#misPecesForm button[type="submit"]');
    submitButton.textContent = 'Agregar Mi Pez';
    submitButton.onclick = null;
}

document.getElementById('misPecesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombreAdoptado = document.getElementById('nombreAdoptado').value;
    const nombreCientifico = document.getElementById('nombreCientificoMiPez').value;
    const nombreComun = document.getElementById('nombreComunMiPez').value;
    const fechaAdquisicion = document.getElementById('fechaAdquisicion').value;
    const caracteristicas = document.getElementById('caracteristicas').value;
    const comportamiento = document.getElementById('comportamiento').value;
    const estadoSalud = document.getElementById('estadoSalud').value;
    const aislamiento = document.getElementById('aislamiento').value;
    const observacion = document.getElementById('observacion').value;

    const nuevoMiPez = new MiPez(nombreAdoptado, nombreCientifico, nombreComun, fechaAdquisicion, caracteristicas, comportamiento, estadoSalud, aislamiento, observacion);
    misPeces.push(nuevoMiPez);
  
    guardarPecesEnLocalStorage();
    actualizarListaMisPeces();
    resetearFormulario();
});

// Cargar peces al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    misPeces = cargarPecesDesdeLocalStorage();
    actualizarListaMisPeces();

    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    // Cambio automático de diapositivas cada 5 segundos
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});