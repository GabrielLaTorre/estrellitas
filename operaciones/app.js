var password = "estrellita123";
var input = prompt("Ingrese su clave: ");

function suma() {
  var valor1 = parseInt(prompt("Ingrese el primer valor #1"));
  var valor2 = parseInt(prompt("Ingrese el segundo valor #2"));
  var resultado = valor1 + valor2;
  return resultado;
}

function promedio() {
  var valor1 = parseInt(prompt("Ingrese el primer valor #1"));
  var valor2 = parseInt(prompt("Ingrese el segundo valor #2"));
  var valor3 = parseInt(prompt("Ingrese el primer valor #3"));
  var valor4 = parseInt(prompt("Ingrese el segundo valor #4"));
  var valor5 = parseInt(prompt("Ingrese el primer valor #5"));
  var resultado = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;
  return resultado;
}

function perimetro() {
  var diametro = parseInt(prompt("Ingrese el diametro"));
  var resultado = diametro * Math.PI;
  return resultado;
}

function radio (){
  const pi = Math.PI;
  var perimetro = parseInt(prompt("Ingrese el perimetro"));
  var resultado = perimetro / (2*pi);
  return resultado;
}

function division() {
  var valor1 = parseInt(prompt("Ingrese el primer valor #1"));
  var valor2 = parseInt(prompt("Ingrese el segundo valor #2"));
  if (valor1, valor2 == 0) {
    alert("Operación inválida");
  }
  else {var resultado = valor1 / valor2}
  return resultado;
}

if (input == password) {
  alert("Operaciones disponibles: SUMA | PROMEDIO | PERIMETRO | DIVISION | RADIO");

  var operacion = prompt("Que operacion desea realizar");

  if (operacion == "suma") {
    var resultado_suma = suma();
    alert(resultado_suma);
  } else if (operacion == "promedio") {
    var resultado_promedio = promedio();
    alert(resultado_promedio);
  } else if (operacion == "perimetro") {
    var resultado_perimetro = perimetro();
    alert(resultado_perimetro);
  } else if ( operacion == "radio") {
    var resultado_radio = radio();
    alert(resultado_radio);
  }
  else if (operacion == "division"){
    var resultado_division = division();
    if(resultado_division != undefined) {
      alert(resultado_division);  
    }
  }
  else {
    alert("Operacion no disponible");
  }
} else {
  alert("Clave incorrecta (IP BLOQUEADA)");
}
