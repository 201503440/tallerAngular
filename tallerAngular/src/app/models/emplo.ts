export class Emplo {
    constructor(cod_empleado = '',nombre = '',apellido = '', telefono ='',correo=''){
        this.cod_empleado = cod_empleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
    }

    cod_empleado: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
}
