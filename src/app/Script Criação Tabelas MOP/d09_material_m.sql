CREATE TABLE d09_material_m(
	d09_cdmaterial BIGSERIAL,
	d09_cdempresa BIGINT,
	d09_nmmaterial VARCHAR(200),

PRIMARY KEY(d09_cdmaterial),
CONSTRAINT empresa_fk FOREIGN KEY (d09_cdempresa) REFERENCES d24_empresa(d24_cdempresa)

);

INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'GPS');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Trena 50m');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Fita métrica');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Bússola');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Mapa da UMF');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Mapa da UPA');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Mapa da UT');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Mapa de arraste');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Mapa de derruba');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Dados do inventário florestal');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'PMFS');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'POA ano vigente');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'POAs anos anteriores');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Dados de parcelas de monitoramento');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (acordos, atas, convênios, parcerias, etc.)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (pagamentos de funcionários e fornecedores)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (planilha de custos)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (ATPF, AUTEX e demais autorizações)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (freqüência e rendimento de funcionários)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (pesquisas, estatísticas, etc.)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Documentação (segurança do trabalho)');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Legislação pertinente');
INSERT INTO d09_material_m (d09_cdempresa, d09_nmmaterial) VALUES('1', 'Cronograma de atividades');