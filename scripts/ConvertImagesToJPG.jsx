
app.displayDialogs = DialogModes.NO;

// ==============================
// Seleccionar carpeta raíz
// ==============================

var rootFolder = Folder.selectDialog(
    "Selecciona la carpeta 'registro-fotografico'"
);

if (!rootFolder) {
    alert("Proceso cancelado.");
    exit();
}

var converted = 0;
var errors = 0;

// ==============================
// Recorrer carpetas
// ==============================

processFolder(rootFolder);

alert(
    "Proceso terminado\n\n" +
    "Imágenes convertidas: " + converted +
    "\nErrores: " + errors
);

// ==============================

function processFolder(folder) {

    var files = folder.getFiles();

    for (var i = 0; i < files.length; i++) {

        if (files[i] instanceof Folder) {
            processFolder(files[i]);
            continue;
        }

        processFile(files[i]);
    }
}

// ==============================

function processFile(file) {

    var name = file.name.toLowerCase();

    if (
        !name.match(/\.(jpg|jpeg|png|tif|tiff|psd|bmp|webp)$/)
    ) {
        return;
    }

    try {

        var doc = app.open(file);

        // ==========================
        // Convertir a sRGB
        // ==========================

        try {
            doc.convertProfile(
                "sRGB IEC61966-2.1",
                Intent.PERCEPTUAL,
                true,
                true
            );
        } catch(e){}

        // ==========================
        // Nombre JPG
        // ==========================

        var jpgName = file.name.replace(/\.[^\.]+$/, ".jpg");

        var jpgFile = new File(
            file.parent + "/" + jpgName
        );

        var options = new JPEGSaveOptions();

        options.quality = 12;
        options.embedColorProfile = true;
        options.formatOptions = FormatOptions.STANDARDBASELINE;

        doc.saveAs(
            jpgFile,
            options,
            true
        );

        doc.close(SaveOptions.DONOTSAVECHANGES);

        // ==========================
        // Borrar original
        // ==========================

        if (file.fsName != jpgFile.fsName) {
            file.remove();
        }

        converted++;

        $.writeln("✓ " + jpgName);

    } catch(err) {

        errors++;

        $.writeln("ERROR: " + file.name);
    }

}