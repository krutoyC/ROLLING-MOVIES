export default class Pelicula{
    constructor(codigo, nombre, tipo, categoria, descripcion, actores, duracion, imagen, trailer, publicar){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.actores = actores;
        this.duracion = duracion;
        this.imagen = imagen;
        this.trailer = trailer;
        this.publicar = publicar;
    }
}