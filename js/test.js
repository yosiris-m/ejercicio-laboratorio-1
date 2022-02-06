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
    "Código postal válido, corresponde a la provincia de La Coruna"
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
