CREATE TABLE d13_nivel4_m(
	d13_cdempresa BIGINT,
	d13_cdnivel1 BIGINT,
	d13_cdnivel2 BIGINT,
	d13_cdnivel3 BIGINT,
	d13_cdnivel4 BIGSERIAL,
	d13_nmnivel4 VARCHAR(200),

	
PRIMARY KEY (d13_cdnivel4),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d13_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d13_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1),
CONSTRAINT nivel2_fk FOREIGN KEY (d13_cdnivel2) REFERENCES d11_nivel2_m(d11_cdnivel2),
CONSTRAINT nivel3_fk FOREIGN KEY (d13_cdnivel3) REFERENCES d12_nivel3_m(d12_cdnivel3)

);



INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 1, 'Conteúdo do mapa da propriedade');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 1, 'As informações do macrozoneamento correspondem à realidade de campo');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 2, 'AMF');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 2, 'UPA');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 3, 'Picadas de orientação');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 3, 'Informações levantadas');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 3, 'Etiquetagem');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 3, 'Mapa do microzoneamento');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 4, 'Corte pré-exploratório');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Estradas principais e de acesso');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Estradas secundárias');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Pátios');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Bueiros/Pontes');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Detalhes gerais da construção');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Danos e resíduos');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 1, 5, 'Infra-estrutura nos mapas');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 6, 'Mapa de corte');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 6, 'Planejamento');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 6, 'Técnica');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 6, 'Etiquetagem');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 6, 'Legalidade');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 7, 'Planejamento de arraste');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 7, 'Operações');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 7, 'Qualidade');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 8, 'Desperdício');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 8, 'Romaneio');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 8, 'Legalidade ');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 9, 'Segurança');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 2, 9, 'Legalidade');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 10, 'Silvicultura pós-colheita.');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 10, 'Monitoramento da floresta e da AMF.');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 11, 'Incêndios');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 11, 'Invasão');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 11, 'Caça');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 11, 'Lixo inorgânico');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 12, 'Equipamento de Proteção Individual');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 12, 'Procedimentos');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 12, 'Providências gerais');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 12, 'Sinalização');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 13, 'Localização');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 13, 'Moradia');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 13, 'Higiene');
INSERT INTO d13_nivel4_m (d13_cdempresa,d13_cdnivel1,d13_cdnivel2,d13_cdnivel3,d13_nmnivel4) VALUES (1, 1, 3, 13, 'Lixo e resíduos');