// Esperamos a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos los elementos
    const textarea = document.querySelector(".formato");
    const btnNegritas = document.querySelector(".bt_negritas");
    const btnSubrayar = document.querySelector(".bt_subrayar");
    const btnMayusculas = document.querySelector(".bt_mayusculas");

    // Función para modificar el texto seleccionado
    function modificarTexto(formato) {
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        let texto = textarea.value;
        let seleccionado = texto.substring(start, end);

        if (seleccionado.length > 0) {
            let nuevoTexto = "";
            if (formato === "negritas") {
                nuevoTexto = `**${seleccionado}**`;
            } else if (formato === "subrayar") {
                nuevoTexto = `_${seleccionado}_`;
            } else if (formato === "mayusculas") {
                nuevoTexto = seleccionado.toUpperCase();
            }

            // Reemplazamos el texto en el área de texto
            textarea.value = texto.substring(0, start) + nuevoTexto + texto.substring(end);
            
            // Mantener el cursor en la misma posición
            textarea.setSelectionRange(start, start + nuevoTexto.length);
            textarea.focus();
        }
    }

    // Eventos para los botones
    btnNegritas.addEventListener("click", () => modificarTexto("negritas"));
    btnSubrayar.addEventListener("click", () => modificarTexto("subrayar"));
    btnMayusculas.addEventListener("click", () => modificarTexto("mayusculas"));
});
