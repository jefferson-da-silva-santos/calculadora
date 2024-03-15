/// evento que impede que o input ultrapasse os 20 digitos
function eventLengthInput(inputId, maxLength) {
     const input = document.getElementById(inputId);
     input.addEventListener("input", function () {
          if (this.value.length > maxLength) {
               this.value = this.value.slice(0, maxLength);
          }
     });
}
eventLengthInput("tela2", 20);

///  eventos dos botões de numeros
const btn0Element = document.getElementById('btn10');
btn0Element.addEventListener('click', btn0);

const btn1Element = document.getElementById('btn7');
btn1Element.addEventListener('click', btn1);

const btn2Element = document.getElementById('btn8');
btn2Element.addEventListener('click', btn2);

const btn3Element = document.getElementById('btn9');
btn3Element.addEventListener('click', btn3);

const btn4Element = document.getElementById('btn4');
btn4Element.addEventListener('click', btn4);

const btn5Element = document.getElementById('btn5');
btn5Element.addEventListener('click', btn5);

const btn6Element = document.getElementById('btn6');
btn6Element.addEventListener('click', btn6);

const btn7Element = document.getElementById('btn1');
btn7Element.addEventListener('click', btn7);

const btn8Element = document.getElementById('btn2');
btn8Element.addEventListener('click', btn8);

const btn9Element = document.getElementById('btn3');
btn9Element.addEventListener('click', btn9);

/// eventos dos botoes deoperacao
const btnLimparCalc = document.getElementById('btnO1');
btnLimparCalc.addEventListener('click', limparCalculadora);

const btnAlterarSinal = document.getElementById('btnO2');
btnAlterarSinal.addEventListener('click', alterarSinal);

const btnDeletarDigito = document.getElementById('btnO4');
btnDeletarDigito.addEventListener('click', deletarUltimoDigito);

const btnSomar = document.getElementById('btnO10');
btnSomar.addEventListener('click', somar);

const btnSubtrair = document.getElementById('btnO7');
btnSubtrair.addEventListener('click', subtrair);

const btnMultiplicar = document.getElementById('btnO6');
btnMultiplicar.addEventListener('click', multiplicar);

const btnDividir = document.getElementById('btnO5');
btnDividir.addEventListener('click', dividir);

const btnAddVirgula = document.getElementById('btnO8');
btnAddVirgula.addEventListener('click', adicionarVirgula);

const btnResult = document.getElementById('btnO9');
btnResult.addEventListener('click', resultadoOperacoes);

/// evento do botao de mudar tema
const btnMudarTema = document.getElementById('ligthDark');
