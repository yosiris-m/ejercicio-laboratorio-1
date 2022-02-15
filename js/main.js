"use strict";

const form = document.querySelector("#form");

function handleSubmit(ev) {
  ev.preventDefault();
  onClickHandleDelete();
}

form.addEventListener("submit", handleSubmit);

function onClickHandleDelete() {
  document.querySelector("#form").reset();
  postalValidation.innerText = "";
  changeReview(0);
}

function validStateAndPostalCode(postalCode, state) {
  if (state === "") {
    return { isValid: false, mensaje: "La provincia está vacía" };
  }
  if (/[0-9]/.test(state)) {
    return {
      isValid: false,
      mensaje: "La provincia no puede contener números",
    };
  }
  let found = postalCodes.find(
    (item) => item.name.toLowerCase() === state.toLowerCase()
  );
  if (!found) {
    return {
      isValid: false,
      mensaje:
        "La nombre de provicia introducida es erróneo y no corresponde a ninguna provincia",
    };
  }

  if (postalCode === "") {
    return { isValid: false, mensaje: "El código postal está vacío" };
  }
  if (isNaN(postalCode)) {
    return {
      isValid: false,
      mensaje: "El código postal solo puede contener números",
    };
  }
  if (postalCode.length != 5) {
    return {
      isValid: false,
      mensaje: "El código postal debe contener 5 números",
    };
  }
  let code = postalCode.substring(0, 2);
  let codeFound = postalCodes.find((item) => item.id === code);
  if (codeFound === undefined) {
    return {
      isValid: false,
      mensaje: "El código postal no corresponde a ninguna provincia",
    };
  }

  if (state.toLowerCase() !== codeFound.name.toLowerCase()) {
    return {
      isValid: false,
      mensaje: `Código postal pertenece a ${codeFound.name} y no coincide con la provincia introducida`,
    };
  }

  return {
    isValid: true,
    mensaje: `La provincia y el código postal son válidos`,
  };
}

const postalInput = document.getElementById("postalInput");
const stateInput = document.getElementById("stateInput");
const postalValidation = document.getElementById("postalValidation");

function stateAndPostalCodeOnKeyUp() {
  const postalCode = postalInput.value;
  const state = stateInput.value;
  const valid = validStateAndPostalCode(postalCode, state);

  postalValidation.innerText = valid.mensaje;

  postalValidation.classList.remove("colorG");
  postalValidation.classList.remove("colorR");
  if (valid.isValid) {
    postalValidation.classList.add("colorG");
  } else {
    postalValidation.classList.add("colorR");
  }
}

postalInput.addEventListener("keyup", stateAndPostalCodeOnKeyUp);
stateInput.addEventListener("keyup", stateAndPostalCodeOnKeyUp);

const stars = [...document.querySelectorAll(".fa-star")];

let review = 0;

function handleStarClick(ev) {
  const index = stars.indexOf(ev.target);
  changeReview(index + 1);
}

function changeReview(newReview) {
  review = newReview;
  for (let i = 0; i < stars.length; i++) {
    const element = stars[i];

    if (i <= review - 1) {
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

function removeNoNumbers(ev) {
  const input = ev.target;
  input.value = input.value.replace(/[^0-9]/g, "");
}

function showBank() {
  const country = document.getElementById("country");
  const bankName = document.getElementById("bankName");
  const direction = document.getElementById("direction");
  const codeBank = document.getElementById("codeBank");
  const dc = document.getElementById("dc");
  const numberBank = document.getElementById("numberBank");

  alert(
    `Le informamos que su cuenta bancaria es: ${country.value}${bankName.value}-
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
