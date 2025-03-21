// Obtener los elementos
const botonNegritas = document.querySelector('.bt_negritas');
const botonSubrayar = document.querySelector('.bt_subrayar');
const botonMayusculas = document.querySelector('.bt_mayusculas');
const textarea = document.querySelector('textarea');

// Función para cambiar el texto a negritas
botonNegritas.addEventListener('click', () => {
    if (textarea.style.fontWeight === 'bold') {
        textarea.style.fontWeight = 'normal';
    } else {
        textarea.style.fontWeight = 'bold';
    }
});

// Función para subrayar el texto
botonSubrayar.addEventListener('click', () => {
    if (textarea.style.textDecoration === 'underline') {
        textarea.style.textDecoration = 'none';
    } else {
        textarea.style.textDecoration = 'underline';
    }
});

// Función para cambiar el texto a mayúsculas
botonMayusculas.addEventListener('click', () => {
    if (textarea.value === textarea.value.toUpperCase()) {
        textarea.value = textarea.value.toLowerCase();
    } else {
        textarea.value = textarea.value.toUpperCase();
    }
});
