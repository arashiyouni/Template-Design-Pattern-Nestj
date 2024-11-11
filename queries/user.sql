create table dbo.[user]
(
    id_user     int identity
        primary key,
    username    varchar(100),
    name        varchar(100),
    lastname    varchar(100),
    email       varchar(100),
    password    varchar(100),
    description varchar(100),
    country     int,
    birthday    date,
    isActive    bit
)
go

INSERT INTO management_user.dbo.[user] (id_user, username, name, lastname, email, password, description, country, birthday, isActive) VALUES (1, N'test_mssql', N'User Test in social media, pero en MSSQL ', N'User lastname', N'tester@gmail.com', N'sin encriptar porque no hay funcionalidad para eso', N'prueba feli', 170, N'2024-10-10', 1);
INSERT INTO management_user.dbo.[user] (id_user, username, name, lastname, email, password, description, country, birthday, isActive) VALUES (2, N'itsarashi', N'Maki', N'Uzumaki', N'Maki@gmail.com', N'sin encriptar porque no hay funcionalidad para eso', N'feli', 170, N'2024-10-10', 1);
