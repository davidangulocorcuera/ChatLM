const functions = require('firebase-functions');
exports.emojify =
    functions.database.ref('/messages/{pushId}/text')
    .onWrite(event => {
        if (!event.data.val() || event.data.previous.val()) {
            console.log("not a new write event");
            return;
        }
ç
        console.log("emojifying!");
        const originalText = event.data.val();
        const emojifiedText = emojifyText(originalText);
        return event.data.ref.set(emojifiedText);
    });

function emojifyText(text) {
    var emojifiedText = text;
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    return emojifiedText;
}

function ocultarTelefono(telefono) {
    var emojifiedText = telefono;
    if(telefono.length == 9){
      emojifiedText = emojifiedText.replace(/\b[0-9]\b/ig, "CAMPO OCULTO");

    }

    return emojifiedText;
}
