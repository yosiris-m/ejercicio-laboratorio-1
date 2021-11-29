"use strict";

const form = document.querySelector("#form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault(); 
    onClickHandleDelete(); 
}



function onClickHandleDelete() {
  const form = document.querySelector("#form").reset();
}





