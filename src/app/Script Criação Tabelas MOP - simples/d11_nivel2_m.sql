CREATE TABLE d11_nivel2_m(
	d11_cdempresa INTEGER,
	d11_cdnivel1 INTEGER,
	d11_cdnivel2 BIGSERIAL,
	d11_nmnivel2 VARCHAR(200),


PRIMARY KEY (d11_cdnivel2),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d11_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d11_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1)


);

INSERT INTO d11_nivel2_m (d11_cdempresa, d11_cdnivel1, d11_nmnivel2) VALUES ('1','1','PRÉ EXPLORATÓRIA');
INSERT INTO d11_nivel2_m (d11_cdempresa, d11_cdnivel1, d11_nmnivel2) VALUES ('1','1','EXPLORATÓRIA');
INSERT INTO d11_nivel2_m (d11_cdempresa, d11_cdnivel1, d11_nmnivel2) VALUES ('1','1','PERMANENTE E PÓS EXPLORATÓRIA');
INSERT INTO d11_nivel2_m (d11_cdempresa, d11_cdnivel1, d11_nmnivel2) VALUES ('1','1','-');