

app.displayDialogs = DialogModes.NO;

// =========================================
// Seleccionar carpeta raíz
// =========================================

var rootFolder = Folder.selectDialog(
    "Selecciona la carpeta 'registro-fotografico'"
);

if (!rootFolder) {
    alert("Proceso cancelado.");
    exit();
}

var renamed = 0;

// =========================================

processFolder(rootFolder);

alert(
    "Proceso terminado\n\n" +
    "Imágenes renombradas: " + renamed
);

// =========================================
// Procesar carpetas recursivamente
// =========================================

function processFolder(folder) {

    var files = folder.getFiles();

    var images = [];

    // Buscar únicamente imágenes JPG
    for (var i = 0; i < files.length; i++) {

        if (files[i] instanceof Folder) {
            processFolder(files[i]);
            continue;
        }

        if (/\.jpg$/i.test(files[i].name)) {
            images.push(files[i]);
        }
    }

    // Ordenar alfabéticamente
    images.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(
            b.name.toLowerCase()
        );
    });

    var folderName = decodeURI(folder.name);

    // Renombrar imágenes
    for (var j = 0; j < images.length; j++) {

        var number = ("000" + (j + 1)).slice(-3);

        var newName =
            folderName +
            "_image_" +
            number +
            ".jpg";

        // Si ya tiene el nombre correcto, continuar
        if (images[j].name === newName) {
            continue;
        }

        // Evitar sobrescribir archivos existentes
        var destination = new File(
            folder.fsName + "/" + newName
        );

        if (destination.exists) {
            $.writeln("⚠ Ya existe: " + newName);
            continue;
        }

        $.writeln(
            images[j].name +
            "  →  " +
            newName
        );

        images[j].rename(newName);

        renamed++;
    }
}