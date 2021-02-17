function inicioDinero() {
  let dinero = 5;
  return dinero
}

function inicioApuesta() {
  let numApostar = Number(prompt("Elija un numero entre 1 y 6"));
  return numApostar;
} 

function elijaMonto() {
  let montJuego = Number(prompt("Ingrese el monto a apostar. (Apuesta minima S/1)"));
  return montJuego;
}

function dadoAzar(min,max) {
  let dado = Math.floor(Math.random() * (max - min) + min);
  return dado;
}

function decision() {
  let continuar = true;
  return continuar;
}

function juego(nuevoDinero, nuevaApuesta, nuevoDado, nuevoMonto, continuidad) {

  nuevoDinero = inicioDinero();
  nuevaApuesta = inicioApuesta();
  nuevoMonto = elijaMonto();
  nuevoDado = dadoAzar(1,6);
  continuidad = decision();

  if(nuevoMonto<0 || nuevoMonto>5) {
    return alert('Ingrese un monto válido');
  }    

  do {

      if(nuevaApuesta === nuevoDado) {
          nuevoDinero = (nuevoMonto * 2) + nuevoDinero;
          alert(`¡Acertaste! Tienes ahora S/${nuevoDinero}`);
      } else if(nuevaApuesta !== nuevoDado) {
          nuevoDinero = nuevoDinero - nuevoMonto;
          alert(`¡Por poco! Tienes ahora S/${nuevoDinero}`);
      } 
      
      
      if(nuevoDinero <= 0) {
          alert("¡Fin del juego! Te quedaste sin saldo");
          break;
      } else if(nuevoDinero >= 200) {
          alert("¡Fin del juego! Llegaste al monto maximo");
          break;
      }
      
      continuidad = confirm("¿Desea seguir jugando?")

      if(continuidad) {
          nuevaApuesta = prompt("Elija un nuevo numero entre 1 y 6");
          nuevoMonto = prompt("Ingrese el nuevo monto a apostar. (Apuesta minima S/1)");
          //if(nuevoMonto > nuevoDinero) {
            //return alert('Usted no cuenta con ese dinero');
          //}
          nuevoDado;
      } else if(!continuidad) {
          alert(`Te retiras con S/${nuevoDinero}`);
      }

  } while (continuidad === true);
}

juego();

alert("¡Gracias por jugar con nosotros!");