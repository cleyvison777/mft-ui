CREATE TABLE d04_local2_m(
	d04_cdempresa BIGINT, 
	d04_cdlocal1 BIGINT,
	d04_cdlocal2 BIGSERIAL,
	d04_nmlocal2 VARCHAR(200),

CONSTRAINT d04_local2_m_PK PRIMARY KEY(d04_cdempresa, d04_cdlocal1, d04_cdlocal2),
CONSTRAINT local2_fk FOREIGN KEY (d04_cdempresa, d04_cdlocal1) REFERENCES d03_local1_m(d03_cdempresa, d03_cdlocal1)
);

INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','1','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','1','1','Picadas do inventário');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','1','2','Local da derruba');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','2','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','2','1','Trilhas de arraste');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','3','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','3','1','Todo o pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','3','2','Bordas do pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','3','3','Saída do pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','4','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','4','1','Todo o pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','5','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','5','1','Estradas principais e de acesso');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','5','2','Estradas secundárias');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','5','3','Toda malha viária');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','6','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','6','1','Parcela');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','6','2','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','7','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','7','1','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','7','2','Alojamento');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','8','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','8','1','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','8','2','PMFS/POA');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2)   VALUES ('1','9','0','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_cdlocal2, d04_nmlocal2) VALUES ('1','9','1','Geral');