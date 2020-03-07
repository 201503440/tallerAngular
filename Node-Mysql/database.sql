create database Taller;
use Taller;

create table Empleado(
	cod_empleado int not null primary key,
	nombre varchar(50),
    apellido varchar(50),
    telefono int,
    correo varchar(100)
);

insert into Empleado values (201500000, 'Pedro', 'Lopez', 44556677, 'pedrolopez@gmail.com');
insert into Empleado values (201500001, 'Maria', 'Perez', 11223344, 'marieperez@gmail.com');

select *from Empleado;