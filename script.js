const btn_objetivo = document.getElementById('btn_objetivo');
const btn_mision = document.getElementById('btn_mision');
const btn_vision = document.getElementById('btn_vision');

const objetivo = document.getElementById('objetivo');
const mision = document.getElementById('mision');
const vision = document.getElementById('vision');

btn_objetivo.addEventListener('click', () => {
    btn_objetivo.classList.add('botonactivo');
    btn_mision.classList.remove('botonactivo');
    btn_vision.classList.remove('botonactivo');

    mostrarObjetivo();
});

btn_mision.addEventListener('click', () => {
    btn_objetivo.classList.remove('botonactivo');
    btn_mision.classList.add('botonactivo');
    btn_vision.classList.remove('botonactivo');

    mostrarMision();
});

btn_vision.addEventListener('click', () => {
    btn_objetivo.classList.remove('botonactivo');
    btn_mision.classList.remove('botonactivo');
    btn_vision.classList.add('botonactivo');

    mostrarVision();
});

function mostrarObjetivo() {
    objetivo.style.display = 'flex';
    mision.style.display = 'none';
    vision.style.display = 'none';
}

function mostrarMision() {
    objetivo.style.display = 'none';
    mision.style.display = 'flex';
    vision.style.display = 'none';
}

function mostrarVision() {
    objetivo.style.display = 'none';
    mision.style.display = 'none';
    vision.style.display = 'flex';
}