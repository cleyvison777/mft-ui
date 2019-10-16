CREATE TABLE d03_local1_m(
	d03_cdlocal1 BIGSERIAL,
	d03_cdempresa BIGINT,
	d03_nmlocal1 VARCHAR(200),

PRIMARY KEY(d03_cdlocal1),
CONSTRAINT empresa_fk FOREIGN KEY (d03_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);



INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Floresta em operação de derruba');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Floresta em operação de arraste');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Pátio em operação');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Pátio transportado');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Infra-estrutura');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Monitoramento');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Acampamento');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Escritório (pré-campo)');
INSERT INTO d03_local1_m (d03_cdempresa, d03_nmlocal1 ) VALUES ('1', 'Entornos AMF');
