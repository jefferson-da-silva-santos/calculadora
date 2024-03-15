function darkLigth() {
     ///componentes principais
     const body = document.body;
     const div = document.getElementById('div-central');
     const btnVoltar = document.getElementById('btnVoltar');
     const imgVoltar = document.getElementById('imgVoltar');
     const h1Titulo = document.getElementById('tituloCalc');
     ///tela da calculadora (input)
     const inputScreen1 = document.getElementById('tela1');
     const inputScreen2 = document.getElementById('tela2');
     ///botões de operações
     const buttonOperation1 = document.getElementById('btnO1');
     const buttonOperation2 = document.getElementById('btnO2');
     const buttonOperation3 = document.getElementById('btnO3');
     const buttonOperation4 = document.getElementById('btnO4');
     const buttonOperation5 = document.getElementById('btnO5');
     const buttonOperation6 = document.getElementById('btnO6');
     const buttonOperation7 = document.getElementById('btnO7');
     const buttonOperation8 = document.getElementById('btnO8');
     const buttonOperation9 = document.getElementById('btnO9');
     const buttonOperation10 = document.getElementById('btnO10');
     ///botões numéricos
     const buttonNumber1 = document.getElementById('btn1');
     const buttonNumber2 = document.getElementById('btn2');
     const buttonNumber3 = document.getElementById('btn3');
     const buttonNumber4 = document.getElementById('btn4');
     const buttonNumber5 = document.getElementById('btn5');
     const buttonNumber6 = document.getElementById('btn6');
     const buttonNumber7 = document.getElementById('btn7');
     const buttonNumber8 = document.getElementById('btn8');
     const buttonNumber9 = document.getElementById('btn9');
     const buttonNumber10 = document.getElementById('btn10');
     
     ///alterando entre as classes
     body.classList.toggle('calculate-body');
     body.classList.toggle('calculate-body-dark');

     div.classList.toggle('calculate-form-ligth');
     div.classList.toggle('calculate-form-dark');

     btnVoltar.classList.toggle('calculate-button-voltar-ligth');
     btnVoltar.classList.toggle('calculate-button-voltar-dark');

     imgVoltar.classList.toggle('img-voltar-ligth');
     imgVoltar.classList.toggle('img-voltar-dark');

     h1Titulo.classList.toggle('calculate-h1-titulo-ligth');
     h1Titulo.classList.toggle('calculate-h1-titulo-dark');

     inputScreen1.classList.toggle('calculate-tela-ligth');
     inputScreen1.classList.toggle('calculate-tela-dark');

     inputScreen2.classList.toggle('calculate-tela2-ligth');
     inputScreen2.classList.toggle('calculate-tela2-dark');

     buttonOperation1.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation1.classList.toggle('calculate-botao-operador-dark');

     buttonOperation2.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation2.classList.toggle('calculate-botao-operador-dark');

     buttonOperation3.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation3.classList.toggle('calculate-botao-operador-dark');

     buttonOperation4.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation4.classList.toggle('calculate-botao-operador-dark');

     buttonOperation5.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation5.classList.toggle('calculate-botao-operador-dark');

     buttonOperation6.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation6.classList.toggle('calculate-botao-operador-dark');

     buttonOperation7.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation7.classList.toggle('calculate-botao-operador-dark');

     buttonOperation8.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation8.classList.toggle('calculate-botao-operador-dark');

     buttonOperation9.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation9.classList.toggle('calculate-botao-operador-dark');

     buttonOperation10.classList.toggle('calculate-botao-operador-ligth');
     buttonOperation10.classList.toggle('calculate-botao-operador-dark');

     buttonNumber1.classList.toggle('calculate-botao-ligth');
     buttonNumber1.classList.toggle('calculate-botao-dark');

     buttonNumber2.classList.toggle('calculate-botao-ligth');
     buttonNumber2.classList.toggle('calculate-botao-dark');

     buttonNumber3.classList.toggle('calculate-botao-ligth');
     buttonNumber3.classList.toggle('calculate-botao-dark');

     buttonNumber4.classList.toggle('calculate-botao-ligth');
     buttonNumber4.classList.toggle('calculate-botao-dark');

     buttonNumber5.classList.toggle('calculate-botao-ligth');
     buttonNumber5.classList.toggle('calculate-botao-dark');
     
     buttonNumber6.classList.toggle('calculate-botao-ligth');
     buttonNumber6.classList.toggle('calculate-botao-dark');
     
     buttonNumber7.classList.toggle('calculate-botao-ligth');
     buttonNumber7.classList.toggle('calculate-botao-dark');
     
     buttonNumber8.classList.toggle('calculate-botao-ligth');
     buttonNumber8.classList.toggle('calculate-botao-dark');
     
     buttonNumber9.classList.toggle('calculate-botao-ligth');
     buttonNumber9.classList.toggle('calculate-botao-dark');
     
     buttonNumber10.classList.toggle('calculate-botao-ligth');
     buttonNumber10.classList.toggle('calculate-botao-dark');
}