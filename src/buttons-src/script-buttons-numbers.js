const tela2 = document.getElementById('tela2');
tela2.value = `0`;

function addNumber(number) {
     const tela2 = document.getElementById('tela2');
     const textTela2 = tela2.value;

     if (textTela2.length <= 20) {
          if (tela2.value === '0') {
               tela2.value = number;
          } else {
               if (searchComma(tela2.value) === true) {
                    tela2.value = tela2.value+""+number;
               } else {
                    tela2.value = `${addThousandsSeparator(tela2.value + number)}`;
               }
          }
     }
}
function btn1() {
     addNumber('1');
}

function btn2() {
     addNumber('2');
}

function btn3() {
     addNumber('3');
}

function btn4() {
     addNumber('4');
}

function btn5() {
     addNumber('5');
}

function btn6() {
     addNumber('6');
}

function btn7() {
     addNumber('7');
}

function btn8() {
     addNumber('8');
}

function btn9() {
     addNumber('9');
}

function btn0() {
     addNumber('0');
}

function searchComma(valueTela1) {
     const value = valueTela1.split("");
     for (let i = 0; i <= value.length - 1; i++) {
          if (value[i] === ',') {
               return true;
          }
     }
     return false;
}