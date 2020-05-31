/*Crear Base de datos*/
CREATE DATABASE cine DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE  cine ;
/*Crear tablas*/
CREATE TABLE usuario (
    idUsuario int NOT NULL AUTO_INCREMENT,
    nombre varchar(45) NOT NULL,
    email varchar(45),
    pws varchar(45) NOT NULL,
    admin int,
    imagen varchar (60);
    CONSTRAINT PK_usuario PRIMARY KEY (idUsuario)
);
CREATE TABLE pelicula (
    idPelicula int NOT NULL AUTO_INCREMENT,
    anio int NOT NULL,
    titulo varchar(45) NOT NULL,
    pais varchar(45),
    genero varchar(45),
    duracion varchar(45),
    fecha_estreno varchar(45),
    calificacion varchar(45),
    sinopsis varchar(10000000),
    actores varchar (10000000),
    imagen varchar(100),
    mostrar int NOT NULL,
    CONSTRAINT PK_pelicula PRIMARY KEY (idPelicula)
);
CREATE TABLE valoracion (
    idUsuario int,
    idPelicula int NOT NULL,
    valoracion FLOAT,
    CONSTRAINT FK_valoracionUsuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT FK_valoracionPelicula FOREIGN KEY (idPelicula) REFERENCES pelicula(idPelicula)
);
CREATE TABLE sala (
    idSala int NOT NULL AUTO_INCREMENT,
    butaca varchar(45) NOT NULL,
    tipo varchar(45),
    CONSTRAINT PK_sala PRIMARY KEY (idSala)
);
CREATE TABLE tarifa (
    idTipo int NOT NULL AUTO_INCREMENT,
    nombre varchar (45) NOT NULL,
    definicion varchar(100000) NOT NULL,
    precio FLOAT NOT NULL,
    CONSTRAINT PK_tarifa PRIMARY KEY (idTipo)
);
CREATE TABLE proyeccion (
    idProyeccion int NOT NULL AUTO_INCREMENT,
    idSala int NOT NULL,
    idPelicula int NOT NULL,
    idTipo int NOT NULL,
    fecha DATE,
    hora varchar(45),
    CONSTRAINT PK_proyeccion PRIMARY KEY (idProyeccion),
    CONSTRAINT FK_proyeccionSala FOREIGN KEY (idSala) REFERENCES sala(idSala),
    CONSTRAINT FK_proyeccionPelicula FOREIGN KEY (idPelicula) REFERENCES pelicula(idPelicula),
    CONSTRAINT FK_proyeccionTipo FOREIGN KEY (idTipo) REFERENCES tarifa(idTipo)
);
CREATE TABLE reserva (
    idReserva int NOT NULL AUTO_INCREMENT,
    idUsuario int NOT NULL,
    idProyeccion int NOT NULL,
    butaca int NOT NULL,
    CONSTRAINT PK_reserva PRIMARY KEY (idReserva),
    CONSTRAINT FK_reservaUsuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT FK_reservaProyeccion FOREIGN KEY (idProyeccion) REFERENCES proyeccion(idProyeccion)
);
/*Insertar en tablas*/
/*Usuario*/
INSERT INTO usuario (idUsuario, nombre, email, pws, admin, imagen)
VALUES ("1", "Juan", "juan@gmail.com", "1234" , 1, '../../imagenes/user.png');
INSERT INTO usuario (idUsuario, nombre, email, pws, admin, imagen)
VALUES ("2", "Lola", "lola@gmail.com", "1234" , 1, '../../imagenes/user.png');
INSERT INTO usuario (idUsuario, nombre, email, pws, admin, imagen)
VALUES ("3", "Pedro", "pedro@gmail.com", "1234" , 0, '../../imagenes/user.png');
INSERT INTO usuario (idUsuario, nombre, email, pws, admin, imagen)
VALUES ("4", "Angela", "angela@gmail.com", "1234" , 0, '../../imagenes/user.png');
/*Pelicula*/
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("1", "2020", "Aves de presa", "Estados Unidos" , "Superhéroes", "109 minutos", "6 de febrero de 2020", "+16" ,
 "Tras los acontecimientos de Escuadrón suicida, Harley Quinn es abandonada por el Joker. Cuando Cassandra Cain, 
 una joven, se encuentra con un diamante que pertenece al amo del crimen Máscara Negra, después de una serie de 
 eventos, Harley termina haciendo una alianza con Canario Negro, Cazadora y Renée Montoya para ayudar a protegerla.", 
 "Margot Robbie (Harleen Quinzel/Harley Quinn), Mary Elizabeth Winstead (Helena Bertinelli/Huntress(Cazadora)), 
 Jurnee Smollett-Bell (Dinah Laurel Lance/Black Canary (Canario Negro)), Rosie Perez (Renée Montoya), 
 Ella Jay Basco (Cassandra Cain), Ewan McGregor(Roman Sionis/Black Mask(Máscara Negra)), Chris Messina(Victor Zsasz)", 
 '../../imagenes/avesdepresa.jpg', 1
 );
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("2", "2020", "Black Widow", "Estados Unidos" , "Cine de superhéroes", "109 minutos", "6 de noviembre de 2020" , "+17", 
"Situada 1 año después de los sucesos de Capitán América: 
Civil War y antes de Avengers: Infinity War, Natasha Romanoff se encuentra sola y obligada a enfrentar una peligrosa 
conspiración con lazos con su pasado mientras es buscada por la ley. Perseguida por una fuerza que no se detendrá 
ante nada para derribarla, Romanoff debe lidiar con su historia como espía y las relaciones rotas que 
dejó a su paso mucho antes de convertirse en Vengadora.","Scarlett Johansson (Natasha Romanoff/Black Widow), 
David Harbour (Alexei Shostakov/Red Guardian), Florence Pugh (Yelena Belova/Black Widow), Rachel Weisz (Melina Vostokoff/Black Widow), 
O.T.Fagbenle (Rick Mason), William Hurt (Thaddeus 'Thunderbolt' Ross)", "../../imagenes/blackwidow.webp",0
);
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("3", "2019", "Once Upon a Time in Hollywood", "Estados Unidos" , "Comedia dramática", "160 minutos", "21 de mayo de 2019" , "+16", 
"Hollywood, años 60. La estrella de un western televisivo, Rick Dalton (DiCaprio), intenta amoldarse a los cambios del 
medio al mismo tiempo que su doble (Pitt). La vida de Dalton está ligada completamente a Hollywood, y es vecino de la 
joven y prometedora actriz y modelo Sharon Tate (Robbie) que acaba de casarse con el prestigioso director Roman Polanski.",
"Leonardo DiCaprio (Rick Dalton), Brad Pitt (Cliff Booth), Margot Robbie (Sharon Tate), Emile Hirsch (Jay Sebring), 
Margaret Qualley («Pussycat»), Timothy Olyphant (James Stacy), Julia Butters (Trudi Fraser), Austin Butler (Charles «Tex» Watson), 
Dakota Fanning (Lynette «Squeaky» Fromme), Bruce Dern (George Spahn), Mike Moh (Bruce Lee), Luke Perry (Wayne Maunder), Damian Lewis 
(Steve McQueen), Al Pacino (Marvin Schwarzs), Nicholas Hammond (Sam Wanamaker), Samantha Robinson (Abigail Folger)",
"../../imagenes/OnceUponaTimeinHollywood.jpeg",1
);
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("4", "2019", "Historia de un matrimonio", "Estados Unidos" , "Drama", "136 minutos", "6 de noviembre de 2019" , "+12", 
"Un director de teatro y su mujer, actriz, luchan por superar un divorcio que les lleva al extremo tanto en lo personal como en lo creativo. 
Además de aprender a convivir para lograr una estabilidad en la vida de su pequeño hijo.", "Scarlett Johansson (Nicole Barber), 
Adam Driver (Charlie Barber), Laura Dern (Nora Fanshaw), Alan Alda (Bert Spitz), Ray Liotta (Jay Marotta), Julie Hagerty (Sandra), 
Merritt Wever (Cassie), Azhy Robertson (Henry Barber), Wallace Shawn(Frank), Martha Kelly (Nancy Katz), Mark O'Brien (Carter Mitchum)",
"../../imagenes/Historiadeunmatrimonio.jpg",0
);
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("5", "2019 ", "Mujercitas", "Estados Unidos" , "Drama", "134 minutos", "25 de diciembre de 2019" , "+13", 
"Amy, Jo, Beth y Meg son cuatro hermanas que atraviesan Massachussets con su madre durante la Guerra Civil, unas 
vacaciones que realizan sin su padre evangelista itinerante. Durante estas vacaciones las adolescentes descubren 
el amor y la importancia de los lazos familiares.", "Saoirse Ronan (Josephine 'Jo' March), 
Emma Watson (Margaret 'Meg' March), Florence Pugh (Amy March), Eliza Scanlen (Elizabeth 'Beth' March), 
Timothée Chalamet (Theodore 'Laurie' Laurence), Laura Dern (Marmee March), Meryl Streep (Tía March), 
Tracy Letts (Sr. Dashwood), Bob Odenkirk (padre de la familia March), James Norton (John Brooke), 
Louis Garrel (Friedrich Bhaer), Chris Cooper (Sr. Laurence)", "../../imagenes/Mujercitas.jpg",1
);
INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar)
VALUES ("6", "2019 ", "Zombieland: Double Tap", "Estados Unidos" , "Post-apocalíptica", "99 minutos", "18 de octubre de 2019" , "+17", 
"Los cazadores de zombis viajan desde la Casa Blanca hasta el corazón de los Estados Unidos, donde tendrán 
que defenderse de nuevas clases de muertos vivientes que han evolucionado. Mientras intentan salvar 
el mundo, los miembros de la pandilla también tendrán que aprender a convivir.", " Woody Harrelson (Tallahassee), 
Jesse Eisenberg (Columbus), Emma Stone (Wichita/Kristal), Abigail Breslin (Little Rock), Rosario Dawson (Nevada), 
Zoey Deutch (Madison), Luke Wilson (Albuquerque), Avan Jogia (Berkeley), Thomas Middleditch (Flagstaff)",
"../../imagenes/Zombieland.jpg",0
);
/*Valoracion*/
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("1", "4", "8");
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("2", "3", "9");
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("3", "2", "6");
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("4", "1", "5");
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("1", "5", "4");
INSERT INTO valoracion (idUsuario, idPelicula, valoracion)
VALUES ("4", "6", "3");
/*Sala*/
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("1", "180", "4DX");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("2", "180", "3D");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("3", "180", "iMax");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("4", "180", "normal");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("5", "180", "XD");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("6", "180", "4DX");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("7", "180", "3D");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("8", "180", "iMax");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("9", "180", "normal");
INSERT INTO sala (idSala, butaca, tipo)
VALUES ("10", "180", "XD");
/*Tarifa*/
INSERT INTO tarifa (idTipo, nombre , definicion, precio)
VALUES ("1", "Entrada normal",'', "7,00");
INSERT INTO tarifa (idTipo, nombre , definicion, precio)
VALUES ("2", "Día espectador",'El miercoles el precio de la entrada bajará de precio durante todo el día', "3,50");
INSERT INTO tarifa (idTipo, nombre , definicion, precio)
VALUES ("3", "Día pareja",'Ven con un acompañante y pagais la entrada de solo uno, esta tarifa se  realiza los jueves' ,7);
INSERT INTO tarifa (idTipo, nombre , definicion, precio)
VALUES ("4", "Matinal", 'El sabado y domingo a las 12:00, se realizará una rebaja en el precio de la entrada',5);
INSERT INTO tarifa (idTipo, nombre , definicion, precio)
VALUES ("5", "Sala 3D", 'Se proyectaran peliculas en 3D',7);
/*Proyeccion*/
INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("1", "5", "1", "4", STR_TO_DATE('19/09/2020', '%d/%m/%Y'), "17:00");

INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("2", "3", "3", "4", STR_TO_DATE('22/09/2020', '%d/%m/%Y'), "18:00");

INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("3", "9", "2", "4", STR_TO_DATE('25/09/2020', '%d/%m/%Y'), "19:00");

INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("4", "1", "5", "4", STR_TO_DATE('3/10/2020', '%d/%m/%Y'), "20:00");

INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("5", "2", "4", "4", STR_TO_DATE('7/10/2020', '%d/%m/%Y'), "17:30");

INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora)
VALUES ("6", "5", "6", "4", STR_TO_DATE('14/2/2020', '%d/%m/%Y'), "17:30");
/*Reserva*/
INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca)
VALUES ("1", 2, 1, 3);
INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca)
VALUES ("2", 3, 3, 5);
INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca)
VALUES ("3", 4, 2, 6);
INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca)
VALUES ("4", 1, 4, 2);
INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca)
VALUES ("5", 2, 5, 10);
/*Crear usuario*/
CREATE USER  cine 
IDENTIFIED BY  'abc123.' ;
GRANT ALL ON  cine.*
TO  cine ;