const functions = require('firebase-functions');

exports.emojify = functions.database.ref("/messages/{pushID}/text").onCreate(myHandler => {
  console.log ("emojify...");
  var originaldata = myHandler.val();
  var emojifyData = emojifyText(originaldata);
  return myHandler.ref.set(emojifyData);
});

function emojifyText(text) {
    var emojifiedText = text;
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    emojifiedText = emojifiedText.replace(/\b611111111\b/ig, "campo oculto");
    return emojifiedText;
}
