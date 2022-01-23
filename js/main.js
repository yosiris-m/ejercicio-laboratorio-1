"use strict";

const form = document.querySelector("#form");

function handleSubmit(ev) {
  ev.preventDefault();
  onClickHandleDelete();

  // var validForm = form;
  // var data = validForm[0];
  // if (data.value === "send") {
  //   //revisar no se envian los datos al hacer submit entra por el else
  //   alert("Su formulario ha sido enviado");
  //   validForm.submit();
  //   return true;
  // } else {
  //   alert("No se a podido envíar el formulario");
  //   return false;
  // }
}

form.addEventListener("submit", handleSubmit);

function onClickHandleDelete() {
  document.querySelector("#form").reset();
  valueSpan.innerText = "";
}

const postalCodes = [
  { id: "01", name: "Álava" },
  { id: "02", name: "Albacete" },
  { id: "03", name: "Alicante" },
  { id: "04", name: "Almería" },
  { id: "05", name: "Ávila" },
  { id: "06", name: "Badajoz" },
  { id: "07", name: "Islas Baleares" },
  { id: "09", name: "Barcelona" },
  { id: "10", name: "Cáceres" },
  { id: "11", name: "Cádiz" },
  { id: "12", name: "Castellón" },
  { id: "13", name: "Ciudad Real" },
  { id: "14", name: "Córdoba" },
  { id: "15", name: "La Coruña" },
  { id: "16", name: "Cuenca" },
  { id: "17", name: "Gerona" },
  { id: "18", name: "Granada" },
  { id: "19", name: "Guadalajara" },
  { id: "20", name: "Guipúzcoa" },
  { id: "21", name: "Huelva" },
  { id: "22", name: "Huesca" },
  { id: "23", name: "Jaén" },
  { id: "23", name: "León" },
  { id: "25", name: "Lérida" },
  { id: "26", name: "La Rioja" },
  { id: "27", name: "Lugo" },
  { id: "28", name: "Madrid" },
  { id: "29", name: "Málaga" },
  { id: "30", name: "Murcia" },
  { id: "31", name: "Navarra" },
  { id: "32", name: "Orense" },
  { id: "33", name: "Asturia" },
  { id: "34", name: "Palencia" },
  { id: "35", name: "Las Palmas" },
  { id: "36", name: "Pontevedra" },
  { id: "37", name: "Salamanca" },
  { id: "38", name: "Santa Cruz de Tenerife" },
  { id: "39", name: "Cantabria " },
  { id: "40", name: "Segovia" },
  { id: "41", name: "Sevilla" },
  { id: "42", name: "Soria" },
  { id: "43", name: "Tarragona" },
  { id: "44", name: "Teruel" },
  { id: "45", name: "Toledo" },
  { id: "46", name: "Valencia" },
  { id: "47", name: "Valladolid" },
  { id: "48", name: "Vizcaya" },
  { id: "49", name: "Zamora" },
  { id: "50", name: "Zaragoza" },
  { id: "51", name: "Ceuta" },
  { id: "52", name: "Melilla" },
];

function validPostalCode(postalCode) {
  if (postalCode === "") {
    return { isValid: false, mensaje: "El código postal está vacío" };
  }
  if (isNaN(postalCode)) {
    return { isValid: false, mensaje: "Solo puede contener números" };
  }
  if (postalCode.length != 5) {
    return { isValid: false, mensaje: "El campo debe contener 5 números" };
  }
  let code = postalCode.substring(0, 2);
  let codeFound = postalCodes.find((item) => item.id === code);
  if (codeFound === undefined) {
    return {
      isValid: false,
      mensaje: "El código postal no corresponde a ninguna provincia",
    };
  }

  return {
    isValid: true,
    mensaje: `Código postal válido, corresponde a la provincia de ${codeFound.name}`,
  };
}

const inputText = document.getElementById("inputText");
const valueSpan = document.getElementById("valueMessage");

function inputNumberOnChange(ev) {
  const inputV = ev.target.value;
  const valid = validPostalCode(inputV);
  console.log(valid);

  valueSpan.innerText = valid.mensaje;

  valueSpan.classList.remove("colorG");
  valueSpan.classList.remove("colorR");
  if (valid.isValid) {
    valueSpan.classList.add("colorG");
  } else {
    valueSpan.classList.add("colorR");
  }
}

inputText.addEventListener("keyup", inputNumberOnChange);
//
//
//
//

//test
function testPostalCodeIsEmpty() {
  console.log("tesPostalCodeIsEmpty");
  const resultado = validPostalCode("");

  if (resultado.isValid) {
    console.error("El código deberia ser no válido");
  }

  if (resultado.mensaje != "El código postal está vacío") {
    console.error("mensaje invalido");
  }
}

function testValidPostalCode() {
  console.log("testCodigoPostalValidFive");
  const resultado = validPostalCode("1512");

  if (resultado.isValid) {
    console.error("El código deberia ser no válido");
  }

  if (resultado.mensaje != "El campo debe contener 5 números") {
    console.error("mensaje invalido");
  }
}

function testValidPostalCodeWithLetters() {
  console.log("testCodigoPostalConLetras");
  const resultado = validPostalCode("28abc");

  if (resultado.isValid) {
    console.error("El código deberia ser no válido");
  }

  if (resultado.mensaje != "Solo puede contener números") {
    console.error("mensaje invalido");
  }
}

function testValidPostalCodeInvalidCity() {
  console.log("testCodigoPostalConProvinciaInvalida");
  const resultado = validPostalCode("99765");

  if (resultado.isValid) {
    console.error("El código deberia ser no válido");
  }

  if (
    resultado.mensaje != "El código postal no corresponde a ninguna provincia"
  ) {
    console.error("mensaje invalido");
  }
}

function testValidPostalCodeValid() {
  console.log("testCodigoPostalValido");
  const resultado = validPostalCode("28981");

  if (!resultado.isValid) {
    console.error("El código deberia ser válido");
  }

  if (
    resultado.mensaje !=
    "Código postal válido, corresponde a la provincia de Madrid"
  ) {
    console.error("mensaje invalido");
  }
}

function testValidPostalCodeValid2() {
  console.log("testCodigoPostalValido2");
  const resultado = validPostalCode("50123");

  if (!resultado.isValid) {
    console.error("El código deberia ser válido");
  }

  if (
    resultado.mensaje !=
    "Código postal válido, corresponde a la provincia de Zaragoza"
  ) {
    console.error("mensaje invalido");
  }
}

function testValidPostalCodeValid3() {
  console.log("testCodigoPostalValido3");
  const resultado = validPostalCode("15123");

  if (!resultado.isValid) {
    console.error("El código deberia ser válido");
  }

  if (
    resultado.mensaje !=
    "Código postal válido, corresponde a la provincia de La Coruña"
  ) {
    console.error("mensaje invalido");
  }
}

testPostalCodeIsEmpty();
testValidPostalCodeWithLetters();
testValidPostalCode();
testValidPostalCodeInvalidCity();
testValidPostalCodeValid();
testValidPostalCodeValid2();
testValidPostalCodeValid3();
