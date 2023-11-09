// ==UserScript==
// @name         Lab4
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://testbenj.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==
// @grant        none
// ==/UserScript==

(function () {
  var todoElTexto = document.body.innerText;

  var letrasMayusculas = todoElTexto.match(/[A-Z]/g);
  var letrasMayusculasString = letrasMayusculas.join("");

  console.log("La llave es: " + letrasMayusculasString);

  var divs = document.getElementsByTagName("div");

  var divIds = [];

  for (var i = 0; i < divs.length; i++) {
    var divId = divs[i].id;
    if (divId) {
      divIds.push(divId);
    }
  }

  console.log("Los mensajes cifrados son: " + divIds.length);

  var config = { mode: CryptoJS.mode.ECB };
  var words = CryptoJS.enc.Utf8.parse(letrasMayusculasString);
  var contenedor = document.createElement("div");
  for (var j = 0; j < divIds.length; j++) {
    var decryp = CryptoJS.TripleDES.decrypt(divIds[j], words, config);
    var parrafo = document.createElement("p");
    parrafo.textContent = decryp.toString(CryptoJS.enc.Utf8);
    contenedor.appendChild(parrafo);

    console.log(divIds[j] + " " + decryp.toString(CryptoJS.enc.Utf8));
  }

  document.body.appendChild(contenedor);
})();
