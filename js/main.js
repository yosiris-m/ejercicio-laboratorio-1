"use strict";

const form = document.querySelector("#form");

function handleSubmit(ev) {
  ev.preventDefault();
  onClickHandleDelete();
}

form.addEventListener("submit", handleSubmit);

function onClickHandleDelete() {
  document.querySelector("#form").reset();
  valueSpan.innerText = "";
  valueStar("");
}

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

const stars = [...document.querySelectorAll(".fa-star")];

let review = 0;
function valueStar(ev) {
  const index = stars.indexOf(ev.target);
  review = index + 1;
  for (let i = 0; i < stars.length; i++) {
    const element = stars[i];

    if (i <= index) {
      element.classList.add("starActive");
      element.classList.add("fas");
      element.classList.remove("far");
    } else {
      element.classList.remove("starActive");
      element.classList.remove("fas");
      element.classList.add("far");
    }
  }
}

function reviewStars() {
  alert(`Has valorado con ${review} puntos`);
}

function showBank() {
  const es = document.getElementById("es");
  const bankName = document.getElementById("bankName");
  const direction = document.getElementById("direction");
  const codeBank = document.getElementById("codeBank");
  const dc = document.getElementById("dc");
  const numberBank = document.getElementById("numberBank");

  alert(
    `Le informamos que su cuenta bancaria es: ${es.value}${bankName.value}-
     ${direction.value}-${codeBank.value}-${dc.value}-${numberBank.value}`
  );
}

let day = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

function showDate() {
  const date = document.getElementById("date");

  let newDate = new Date(date.value.replace(/-+/g, "/"));
  alert(
    `La fecha seleccionada en el elemento de fecha es un  ${
      day[newDate.getDay()]
    }`
  );
}
