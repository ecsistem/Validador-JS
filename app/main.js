const lyrics = document.getElementById('lyrics');
const lines = document.getElementById('line');
const bytes = document.getElementById('bytes');
const time = document.getElementById('time')
var textarea = document.getElementById("textarea");

if (textarea) {
  textarea.addEventListener("keyup", function () {
    var text = textarea.value;
    var byte = text.length * 1;
    var line = text.split("\n").length;
    var empty = text.split(" ").length;
    bytes.innerHTML = `${byte} bytes`
    lyrics.innerHTML = `${(byte-empty-line)+2} caracteres`
    lines.innerHTML = `${line} linhas`
  });
}