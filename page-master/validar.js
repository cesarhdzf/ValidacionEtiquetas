// Función para sanitizar y validar el input
function sanitizar(input) {
    // Lista de caracteres permitidos (letras, números, espacios y algunos símbolos básicos)
    var permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 áéíóúÁÉÍÓÚñÑ.,-";
    var resultado = "";

    // Recorre cada carácter del input
    for (var i = 0; i < input.length; i++) {
        var char = input[i];

        // Si el carácter está en la lista de permitidos, se agrega al resultado
        var permitido = false;
        for (var j = 0; j < permitidos.length; j++) {
            if (char === permitidos[j]) {
                permitido = true;
                break;
            }
        }

        // Si el carácter es permitido, se agrega al resultado
        if (permitido) {
            resultado += char;
        } else {
            // Si encuentra un carácter no permitido, muestra una alerta y termina la función
            alert("Se encontró un carácter no permitido: " + char);
            return "";
        }
    }

    // Devuelve el texto sanitizado (o vacío si había caracteres no permitidos)
    return resultado;
}

function validar(form) {
    // Validar nombre
    var nombre = form.nombre.value.trim();
    var nombreSanitizado = sanitizar(nombre);
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    if (nombre !== nombreSanitizado) {
        alert("No se permiten etiquetas ni caracteres especiales en el nombre.");
        return false;
    }

    // Validar edad (solo números positivos)
    var edad = form.edad.value.trim();
    var edadSanitizada = sanitizar(edad);

    // Comprobación manual de si es un número positivo
    var esNumero = true;
    for (var i = 0; i < edadSanitizada.length; i++) {
        if (edadSanitizada[i] < '0' || edadSanitizada[i] > '9') {
            esNumero = false;
            break;
        }
    }
    
    if (edad === "" || !esNumero || parseInt(edad) <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Validar selección de sexo
    var sexo = form.querySelector('input[name="sexo"]:checked');
    if (!sexo) {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Si todo es válido
    return true;
}
