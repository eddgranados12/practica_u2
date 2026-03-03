/*
    Archivo: script.js
    Controla:
    - Ciclo de colores
    - Cambio cíclico de integrantes
*/

// =========================
// CAMBIO DE COLORES
// =========================

const colores = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#9B59B6"];
let indiceColor = 0;

const botonColor = document.getElementById("colorButton");

botonColor.addEventListener("click", function () {
    document.body.style.backgroundColor = colores[indiceColor];
    indiceColor++;

    if (indiceColor >= colores.length) {
        indiceColor = 0;
    }
});


// =========================
// CAMBIO DE INTEGRANTES
// =========================

const alumnos = [
    {
        nombre: "Eduardo Granados",
        descripcion: "Estudiante de programación con interés en desarrollo web.",
        foto: "images/eduardo.jpeg"
    },
    {
        nombre: "Carmen Arreguin",
        descripcion: "Apasionada por el diseño UI/UX y el desarrollo frontend.",
        foto: "images/carmen.jpeg"
    }
];

let indiceAlumno = 0;

const botonAlumno = document.getElementById("alumnoButton");

botonAlumno.addEventListener("click", function () {

    indiceAlumno++;

    if (indiceAlumno >= alumnos.length) {
        indiceAlumno = 0;
    }

    document.getElementById("nombreAlumno").textContent = alumnos[indiceAlumno].nombre;
    document.getElementById("descripcionAlumno").textContent = alumnos[indiceAlumno].descripcion;
    document.getElementById("fotoAlumno").src = alumnos[indiceAlumno].foto;

});