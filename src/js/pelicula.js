export default class Pelicula{
    constructor(codigo, nombre, tipo, categoria, descripcion, actores, duracion, imagen, imagenInfo, trailer, publicar, destacado, imagenDestacado){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.actores = actores;
        this.duracion = duracion;
        this.imagen = imagen;
        this.imagenInfo = imagenInfo;
        this.trailer = trailer;
        this.imagenDestacado = imagenDestacado;
        this.publicar = publicar;
        this.destacado = false;
    }
}