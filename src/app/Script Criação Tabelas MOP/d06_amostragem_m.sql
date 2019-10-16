CREATE TABLE d06_amostragem_m(
	d06_cdamostragem BIGSERIAL,
	d06_cdempresa BIGINT,
	d06_nmamostragem VARCHAR(200),

PRIMARY KEY (d06_cdamostragem),
CONSTRAINT empresa_fk FOREIGN KEY (d06_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);


INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Uma checagem nos mapas e/ou documentos');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Uma medição no campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Duas medições no campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Três medições no campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Quatro ou mais medições no campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Uma observação em campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Duas observações em campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Três observações em campo');
INSERT INTO d06_amostragem_m (d06_cdempresa, d06_nmamostragem) VALUES('1', 'Quatro ou mais observações em campo');

