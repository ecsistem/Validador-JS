function Validator() {
  var textarea = document.getElementById("textarea");
  var divtime = document.getElementById('time')
  var msg = document.getElementById('msg')
  var text = textarea.value;
  try {
    const start = performance.now();
    eval(text);
    const end = performance.now();
    msg.innerHTML = `Seu código está funcionando`
    divtime.innerHTML = `${end - start} ms`
  } catch (error) {
    msg.innerHTML = `Código inválido: ${error}`;
    divtime.innerHTML = `Não foi executado`
  }
}