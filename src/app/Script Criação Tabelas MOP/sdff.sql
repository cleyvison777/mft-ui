CREATE TABLE usuario (
	codigo BIGSERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(150) NOT NULL
);

CREATE TABLE permissao (
	codigo BIGSERIAL PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
);

CREATE TABLE usuario_permissao (
	codigo_usuario BIGSERIAL NOT NULL,
	codigo_permissao BIGINT NOT NULL,
	PRIMARY KEY (codigo_usuario, codigo_permissao),
	FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
	FOREIGN KEY (codigo_permissao) REFERENCES permissao(codigo)
);

select * from usuario;

UPDATE usuario SET senha = '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.' where codigo = 1;
INSERT INTO usuario (codigo, nome, email, senha) values (1, 'Administrador', 'admin', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');
INSERT INTO usuario (codigo, nome, email, senha) values (2, 'Convidado', 'convidado', '$2a$10$L.7Oker/D5dM9yB.v9jCz.Y7s1dxFv31Uo.4yHciIGA7ZF7Oioexi');

INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_CADASTRAR_EMPRESA');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_REMOVER_EMPRESA');
INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_PESQUISAR_EMPRESA');

INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_PESQUISAR_CADTIPODEVERIFICADOR');

INSERT INTO permissao (codigo, descricao) values (5, 'ROLE_PESQUISAR_CADNIVELDEAVALIACAO');

INSERT INTO permissao (codigo, descricao) values (6, 'ROLE_CADASTRAR_CADAMOSTRAGEM');
INSERT INTO permissao (codigo, descricao) values (7, 'ROLE_REMOVER_CADAMOSTRAGEM');
INSERT INTO permissao (codigo, descricao) values (8, 'ROLE_PESQUISAR_CADAMOSTRAGEM');

INSERT INTO permissao (codigo, descricao) values (9, 'ROLE_CADASTRAR_CADFREQUENCIA');
INSERT INTO permissao (codigo, descricao) values (10, 'ROLE_REMOVER_CADFREQUENCIA');
INSERT INTO permissao (codigo, descricao) values (11, 'ROLE_PESQUISAR_CADFREQUENCIA');

INSERT INTO permissao (codigo, descricao) values (12, 'ROLE_CADASTRAR_CADTIPODEMETODO');
INSERT INTO permissao (codigo, descricao) values (13, 'ROLE_REMOVER_CADTIPODEMETODO');
INSERT INTO permissao (codigo, descricao) values (14, 'ROLE_PESQUISAR_CADTIPODEMETODO');

INSERT INTO permissao (codigo, descricao) values (15, 'ROLE_CADASTRAR_CADMATERIAL');
INSERT INTO permissao (codigo, descricao) values (16, 'ROLE_REMOVER_CADMATERIAL');
INSERT INTO permissao (codigo, descricao) values (17, 'ROLE_PESQUISAR_CADMATERIAL');





-- admin
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 6);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 7);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 9);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 10);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 11);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 12);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 13);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 14);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 15);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 16);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 17);

-- convidade
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 8);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 11);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 14);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 17);