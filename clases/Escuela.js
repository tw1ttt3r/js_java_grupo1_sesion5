class Escuela {

  constructor(permiso, nombre, clave, nivel) {
    this.permiso = permiso;
    this.nombre = nombre;
    this.clave = clave;
    this.nivel = nivel;
    this.alumnos = [];
  }

  getPermiso() {
    return this.permiso;
  }

  getNombre() {
    return this.nombre;
  }

  getClave() {
    return this.clave;
  }

  getNivel() {
    return this.nivel;
  }

  getAlumnos() {
    return this.alumnos;
  }

  registraAlumnos(nombre, grado) {
    // registrar alumnos
    const alumno = new Alumno(nombre, grado, this.alumnos.length+1);
    this.alumnos.push(alumno);
    console.log(this.alumnos);
  }

  registraCalificaciones() {}

}