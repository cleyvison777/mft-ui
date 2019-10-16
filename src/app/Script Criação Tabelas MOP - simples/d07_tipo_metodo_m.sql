CREATE TABLE d07_tipo_metodo_m(
	d07_cdtipometodo BIGSERIAL,
	d07_cdempresa INTEGER,
	d07_nmtipometodo VARCHAR(200),

PRIMARY KEY (d07_cdtipometodo),
CONSTRAINT empresa_fk FOREIGN KEY (d07_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);


INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Análise de mapas e/ou documentação no campo');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Análise de mapas e/ou documentação no escritório');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Entrevistas com funcionários');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Medição em campo');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Medição no acampamento');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Observação em campo');
INSERT INTO d07_tipo_metodo_m (d07_cdempresa, d07_nmtipometodo) VALUES('1', 'Observação no acampamento');