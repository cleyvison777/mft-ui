﻿CREATE TABLE d12_nivel3_m(
	d12_cdempresa BIGINT,
	d12_cdnivel1 BIGINT,
	d12_cdnivel2 BIGINT,
	d12_cdnivel3 BIGSERIAL,
	d12_nmnivel3 VARCHAR(200),

	
PRIMARY KEY (d12_cdempresa, d12_cdnivel1, d12_cdnivel2, d12_cdnivel3),
CONSTRAINT nivel3_empresa_fk FOREIGN KEY (d12_cdempresa, d12_cdnivel1, d12_cdnivel2) REFERENCES d11_nivel2_m(d11_cdempresa,d11_cdnivel1, d11_cdnivel2)

);

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','1','1','Macrozoneamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','1','2','Delimitação e identificação da');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','1','3','Inventário florestal 100%');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','1','4','Corte de cipós');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','1','5','Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','2','1','Derruba');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','2','2','Arraste');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','2','3','Operações de pátio');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','2','4','Transporte');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','3','1','Silvicultura pós exploratória ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','3','2','Proteção florestal');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','3','3','Segurança no trabalho');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','1','3','4','Infra-estrutura do acampamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','1','Macrozoneamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','2','Delimitação e identificação da');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','3','Inventário florestal 100%');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','4','Corte de cipós');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','5','Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','6','Derruba');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','7','Arraste');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','8','Operações de pátio');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','9','Transporte');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','10','Silvicultura pós exploratória ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','11','Proteção florestal');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','12','Segurança no trabalho');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','2','1','13','Infra-estrutura do acampamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','1','1','A política e o comportamento d');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','1','2','O setor madeireiro è bem organ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','1','3','As condições da vida e o bem e');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','1','4','As condições ambientais afetad');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','2','1','A situação dos vizinhos contri');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','3','2','2','Providências da empresa para a');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','1','1','Gerenciamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','1','2','Condições de trabalho.');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','2','1','Segurança');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','2','2','Qualificação e equipamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','2','3','Controle e planejamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','4','2','4','Qualidade dos documentos');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','5','1','1','O zoneamento e a delimitação d');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','5','1','2','Infraestrutura permanente');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','5','2','1','Identificação e preparação das');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','5','2','2','A exploração e os tratamentos ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','6','1','1','Lista dos resultados ambientai');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2,d12_cdnivel3, d12_nmnivel3)    VALUES ('1','6','2','1','Lista dos resultados socioecon');