function sanitizar(input) {
    return input
        .replace(/&/g, "NO;")
        .replace(/</g, "NO;")
        .replace(/>/g, "NO;")
        .replace(/"/g, "NO;")
        .replace(/'/g, "NO;")
        .replace(/\//g, "NO;");
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

    // Validar edad
    var edad = form.edad.value.trim();
    var edadSanitizada = sanitizar(edad);
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }
    if (edad !== edadSanitizada) {
        alert("No se permiten etiquetas ni caracteres especiales en la edad.");
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
