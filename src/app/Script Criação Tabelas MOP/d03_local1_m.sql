CREATE TABLE d03_local1_m(
	d03_cdlocal1 BIGINT,
	d03_cdempresa BIGINT,
	d03_nmlocal1 VARCHAR(200),

CONSTRAINT  d03_local1_m_pk PRIMARY KEY(d03_cdlocal1, d03_cdempresa),
CONSTRAINT empresa_fk FOREIGN KEY (d03_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','1','Sítio em operações de derruba');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','2','Sítio em operações de arraste');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','3','Pátios');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','4','Pátio transportado');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','5','Infra-estrutura');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','6','Parcelas de monitoramento e de silvicultura pós-colheita');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','7','Acampamento');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','8','Escritório ');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1) VALUES ('1','9','Entornos UMF');