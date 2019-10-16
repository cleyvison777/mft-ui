CREATE TABLE d04_local2_m(
	d04_cdempresa BIGINT, 
	d04_cdlocal1 BIGINT,
	d04_cdlocal2 BIGSERIAL,
	d04_nmlocal2 VARCHAR(200),

PRIMARY KEY(d04_cdlocal2),
CONSTRAINT local1_fk FOREIGN KEY (d04_cdlocal1) REFERENCES d03_local1_m(d03_cdlocal1),
CONSTRAINT local1_empresa_fk FOREIGN KEY (d04_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 1, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 1, 'Picadas do inventário');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 1, 'Derruba');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 2, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 2, 'Trilhas de arraste');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 3, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 3, 'Todo o pátio');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 3, 'Bordas do pátio');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 3, 'Saída do pátio');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 4, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 4, 'Todo o pátio');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 5, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 5, 'Estradas principais e de acesso');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 5, 'Estradas secundárias');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 5, 'Toda malha viária');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 6, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 6, 'Parcela');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 6, 'Geral');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 7, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 7, 'Geral');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 7, 'Alojamento');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 8, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 8, 'Geral');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 8, 'PMFS/POA');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 9, '-');
INSERT INTO d04_local2_m (d04_cdempresa, d04_cdlocal1, d04_nmlocal2) VALUES(1, 9, 'Geral');
