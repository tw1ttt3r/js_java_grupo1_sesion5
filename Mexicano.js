class Mexicano extends Humano {
  
  constructor(lugarNacimiento, curp, fechaNacimiento, ine, colorPiel, colorOjos, colorCabello, idioma) {
    super(colorPiel, colorOjos, colorCabello, idioma);
    this.lugarNacimiento = lugarNacimiento;
    this.curp = curp;
    this.fechaNacimiento = fechaNacimiento;
    this.ine = ine;
  }

  trabajar() {
    this.hablar(); // Mexicano.hablar
    alert("trabajando 8 horas")
  }

  comprar() {}

  festejar() {}

  hablar() {
    alert("viva mexico")
  }
}
