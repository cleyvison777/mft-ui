CREATE TABLE d10_nivel1_m(
	d10_cdnivel1 BIGSERIAL,
	d10_cdempresa BIGINT,
	d10_nmnivel1 VARCHAR(200),

PRIMARY KEY(d10_cdnivel1, d10_cdempresa),
CONSTRAINT empresa_fk FOREIGN KEY (d10_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','1','Somente Etapa / Item / Subitem');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','2','Somente Item / Subitem');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','3','A situação fora da UMF e as pr');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','4','Providências internas para o f');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','5','Sobre a realização das operaçõ');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','6','As atividades empresarias têm ');