CREATE TABLE d11_nivel2_m(
	d11_cdempresa BIGINT,
	d11_cdnivel1 BIGINT,
	d11_cdnivel2 BIGSERIAL,
	d11_nmnivel2 VARCHAR(200),


PRIMARY KEY (d11_cdempresa, d11_cdnivel1, d11_cdnivel2),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d11_cdempresa, d11_cdnivel1) REFERENCES d10_nivel1_m(d10_cdempresa, d10_cdnivel1)



);


INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','1','1','PRÉ EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','1','2','EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','1','3','PERMANENTE E PÓS EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','2','1','-');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','3','1','As condições amplamente fora d');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','3','2','A UMF está efetivamente proteg');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','4','1','Organização das atividades emp');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','4','2','Providências Técnicas para um ');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','5','1','Preparação da infra-estrutura ');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','5','2','Exploração e tratamento silvic');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','6','1','O funcionamento do ecossistema');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1, d11_cdnivel2, d11_nmnivel2)   VALUES ('1','6','2','Os resultados sócio-econômicos');