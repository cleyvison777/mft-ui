CREATE TABLE d10_nivel1_m(
	d10_cdnivel1 BIGSERIAL,
	d10_cdempresa BIGINT,
	d10_nmnivel1 VARCHAR(200),

PRIMARY KEY(d10_cdnivel1),
CONSTRAINT empresa_fk FOREIGN KEY (d10_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d10_nivel1_m(d10_cdempresa, d10_nmnivel1) VALUES('1','-')