CREATE TABLE d12_nivel3_m(
	d12_cdempresa BIGINT,
	d12_cdnivel1 BIGINT,
	d12_cdnivel2 BIGINT,
	d12_cdnivel3 BIGSERIAL,
	d12_nmnivel3 VARCHAR(200),



PRIMARY KEY (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3),
CONSTRAINT nivel3_fk FOREIGN KEY (d12_cdempresa, d12_cdnivel1, d12_cdnivel2) REFERENCES d11_nivel2_m(d11_cdempresa, d11_cdnivel1, d11_cdnivel2)

);

INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 1, 1, 'Macrozoneamento');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 1, 2, 'Delimitação e identificação da AMF,UPA e UT');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 1, 3, 'Inventário florestal 100%');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 1, 4, 'Corte de cipós');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 1, 5, 'Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 2, 1, 'Derruba');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 2, 2, 'Arraste');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 2, 3, 'Operações de pátio');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 2, 4, 'Transporte');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 3, 1, 'Silvicultura pós exploratória e monitoramento da AMF e do desenvolvimento da floresta');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 3, 2, 'Proteção florestal');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 3, 3, 'Segurança no trabalho');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 3, 4, 'Infra-estrutura do acampamento');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 1, 'Macrozoneamento');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 2, 'Delimitação e identificação da AMF,UPA e UT');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 3, 'Inventário florestal 100%');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 4, 'Corte de cipós');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 5, 'Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 6, 'Derruba');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 7, 'Arraste');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 8, 'Operações de pátio');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 9, 'Transporte');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 10, 'Silvicultura pós exploratória e monitoramento da AMF e do desenvolvimento da floresta');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 11, 'Proteção florestal');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 12, 'Segurança no trabalho');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_cdnivel3,d12_nmnivel3) VALUES (1, 1, 4, 13, 'Infra-estrutura do acampamento');