class Humano {
  
  // me permite ejecutar acciones durante la creación del objeto
  // lo primero que se ejecuta de una clase
  // no es obligatorio
  constructor(colorPiel, colorOjos, colorCabello, idioma) {
    this.colorPiel = colorPiel;
    this.colorOjos = colorOjos;
    this.colorCabello = colorCabello;
    this.idioma = idioma;
  }

  // metodo personalizado
  hablar() {
    alert("hola soy un humano");
  }

  // metodo personalizado
  comer() {
    alert("ñam ñam")
  }
}



// function Humano(colorPiel, colorOjos, colorCabello, idioma) {
//   this.colorPiel = colorPiel;
//   this.colorOjos = colorOjos;
//   this.colorCabello = colorCabello;
//   this.idioma = idioma;
// }

// Humano.prototype.hablar = function() {
//   alert("hola soy un humano");
// }

// Humano.prototype.comer = function() {
//   alert("ñam ñam");
// }