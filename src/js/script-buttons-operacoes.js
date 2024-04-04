let operationSom = false;
let operationSub = false;
let operationMul = false;
let operationDiv = false;

let novaVirgula = false;

function alterarSinal() {
  const sinal = "-";
  const tela2 = document.getElementById("tela2");
  if (tela2.value !== "0" && tela2.value.charAt(0) !== sinal) {
    const valueTela2 = tela2.value;
    tela2.value = `${sinal}${valueTela2}`;
  } else if (tela2.value.charAt(0) === "-") {
    const divdedString = tela2.value.split("");
    divdedString[0] = "";
    tela2.value = divdedString.join("");
  }
}

function limparCalculadora() {
  operationSom = false;
  operationSub = false;
  operationMul = false;
  operationDiv = false;
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");
  tela1.value = "";
  tela2.value = "0";
  novaVirgula = false;
}

function deletarUltimoDigito() {
  const ponto = ".";
  const tela2 = document.getElementById("tela2");
  let divdedString = tela2.value.split("");
  for (let i = 0; i <= divdedString.length - 1; i++) {
    if (divdedString[i] === ponto) {
      divdedString[i] = "";
    } else if (i === divdedString.length - 1) {
      divdedString[i] = "";
      break;
    }
  }
  let convertNumber = adicionarSeparadorDeMilharSimples(
    parseInt(divdedString.join(""))
  );

  if (convertNumber.toString() !== "NaN") {
    tela2.value = convertNumber.toString();
  } else {
    tela2.value = "0";
  }
}

function adicionarVirgula() {
  if (novaVirgula === false) {
    let virgula = ",";
    const tela2 = document.getElementById("tela2");
    const valorAtual = tela2.value;
    tela2.value = `${valorAtual}${virgula}`;
    novaVirgula = true;
  }
}

function somar() {
  operationSom = true;

  operationSub = false;
  operationMul = false;
  operationDiv = false;

  novaVirgula = false;
  const sinal = "+";
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");

  let valor1 = tela2.value;
  tela1.value = `${valor1}${sinal}`;
  tela2.value = "0";
}

function subtrair() {
  operationSub = true;

  operationSom = false;
  operationMul = false;
  operationDiv = false;

  novaVirgula = false;
  const sinal = "-";
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");

  let valor1 = tela2.value;
  tela1.value = `${valor1}${sinal}`;
  tela2.value = "0";
}

function multiplicar() {
  operationMul = true;

  operationSom = false;
  operationSub = false;
  operationDiv = false;

  novaVirgula = false;
  const sinal = "x";
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");

  let valor1 = tela2.value;
  tela1.value = `${valor1}${sinal}`;
  tela2.value = "0";
}

function dividir() {
  operationDiv = true;

  operationSom = false;
  operationSub = false;
  operationMul = false;

  novaVirgula = false;
  const sinal = "/";
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");

  let valor1 = tela2.value;
  tela1.value = `${valor1}${sinal}`;
  tela2.value = "0";
}

function resultadoOperacoes() {
  const tela1 = document.getElementById("tela1");
  const tela2 = document.getElementById("tela2");
  novaVirgula = false;

  if (operationSom) {
    const valor1 = formatarNumber(tela1.value);
    const valor2 = formatarNumber(tela2.value);
    const calcSum = valor1 + valor2;
    tela1.value = `${formatDefaultNumber(valor1)} + ${formatDefaultNumber(
      valor2
    )}`;
    tela2.value = `${formatDefaultNumber(calcSum)}`;
    operationSom = false;
  } else if (operationSub) {
    const valor1 = formatarNumber(tela1.value);
    const valor2 = formatarNumber(tela2.value);
    const calcSub = valor1 - valor2;
    tela1.value = `${formatDefaultNumber(valor1)} - ${formatDefaultNumber(
      valor2
    )}`;
    tela2.value = `${formatDefaultNumber(calcSub)}`;
    operationSub = false;
  } else if (operationMul) {
    const valor1 = formatarNumber(tela1.value);
    const valor2 = formatarNumber(tela2.value);
    const calcMul = valor1 * valor2;
    tela1.value = `${formatDefaultNumber(valor1)} x ${formatDefaultNumber(
      valor2
    )}`;
    tela2.value = `${formatDefaultNumber(calcMul)}`;
    operationMul = false;
  } else if (operationDiv) {
    const valor1 = formatarNumber(tela1.value);
    const valor2 = formatarNumber(tela2.value);
    const calcDiv = valor1 / valor2;
    tela1.value = `${formatDefaultNumber(valor1)} / ${formatDefaultNumber(
      valor2
    )}`;
    tela2.value = `${formatDefaultNumber(calcDiv)}`;
    operationDiv = false;
  }
}

function formatarNumber(stringValor) {
  let array = stringValor.split("");

  let sinalNegativo = "";
  if (array[0] === "-") {
    sinalNegativo = "-";
  }

  for (let i = 0; i <= array.length - 1; i++) {
    if (
      array[i] === "-" ||
      array[i] === "+" ||
      array[i] === "x" ||
      array[i] === "/" ||
      array[i] === "."
    ) {
      array[i] = "";
    } else if (array[i] === ",") {
      array[i] = ".";
    }
  }

  return Number(`${sinalNegativo}${array.join("")}`);
}

function formatDefaultNumber(number) {
  const virgula = ",";
  let array = number.toString().split(".");
  let sinalNegativo = "";

  if (array.length === 1) {
    let array = number.toString().split("");
    if (array[0] === "-") {
      array[0] = "";
      return `-${adicionarSeparadorDeMilharSimples(array.join(""))}`;
    } else {
      return adicionarSeparadorDeMilharSimples(array.join(""));
    }
  } else {
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] === ".") {
        decimal = true;
      }
    }
    let part1Number = array[0].split("");
    if (part1Number[0] === "-") {
      part1Number[0] = "";
      sinalNegativo = "-";
    }
    const v1 = `${sinalNegativo}${adicionarSeparadorDeMilharSimples(
      part1Number.join("")
    )}`;
    return `${v1}${virgula}${array[1]}`;
  }
}
