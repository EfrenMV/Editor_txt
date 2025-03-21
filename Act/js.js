// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const textarea = document.querySelector('.formato');
    const btnNegritas = document.querySelector('.bt_negritas');
    const btnSubrayar = document.querySelector('.bt_subrayar');
    const btnMayusculas = document.querySelector('.bt_mayusculas');
    
    // Función para obtener el texto seleccionado o todo el texto
    function getSelectedTextOrAll() {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        // Si hay texto seleccionado, devuelve la selección
        if (start !== end) {
            return {
                text: textarea.value.substring(start, end),
                start: start,
                end: end
            };
        } 
        // Si no hay selección, devuelve todo el texto
        else {
            return {
                text: textarea.value,
                start: 0,
                end: textarea.value.length
            };
        }
    }
    
    // Función para aplicar negritas
    btnNegritas.addEventListener('click', function() {
        const selection = getSelectedTextOrAll();
        
        // Modificar el estilo del texto seleccionado
        textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
        
        // Mantener el foco en el textarea
        textarea.focus();
    });
    
    // Función para aplicar subrayado
    btnSubrayar.addEventListener('click', function() {
        const selection = getSelectedTextOrAll();
        
        // Modificar el estilo del texto seleccionado
        textarea.style.textDecoration = textarea.style.textDecoration === 'underline' ? 'none' : 'underline';
        
        // Mantener el foco en el textarea
        textarea.focus();
    });
    
    // Función para convertir a mayúsculas
    btnMayusculas.addEventListener('click', function() {
        const selection = getSelectedTextOrAll();
        
        // Si hay texto seleccionado
        if (selection.start !== selection.end) {
            // Convertir el texto seleccionado a mayúsculas
            const textoMayusculas = selection.text.toUpperCase();
            textarea.value = 
                textarea.value.substring(0, selection.start) + 
                textoMayusculas + 
                textarea.value.substring(selection.end);
                
            // Mantener la selección
            textarea.setSelectionRange(selection.start, selection.end);
        } else {
            // Convertir todo el texto a mayúsculas
            textarea.value = textarea.value.toUpperCase();
        }
        
        // Mantener el foco en el textarea
        textarea.focus();
    });
});