CREATE TABLE d12_nivel3_m(
	d12_cdempresa BIGINT,
	d12_cdnivel1 BIGINT,
	d12_cdnivel2 BIGINT,
	d12_cdnivel3 BIGSERIAL,
	d12_nmnivel3 VARCHAR(200),

	
PRIMARY KEY (d12_cdnivel3),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d12_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d12_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1),
CONSTRAINT nivel2_fk FOREIGN KEY (d12_cdnivel2) REFERENCES d11_nivel2_m(d11_cdnivel2)

);

INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 1, 'Macrozoneamento');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 1, 'Delimitação e identificação da AMF,UPA e UT');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 1, 'Inventário florestal 100%');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 1, 'Corte de cipós');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 1, 'Instalação da Infra estrutura');



INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 2, 'Derruba');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 2, 'Arraste');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 2, 'Operações de pátio');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 2, 'Transporte');

INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 3, 'Silvicultura pós exploratória e monitoramento da AMF e do desenvolvimento da floresta');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 3, 'Proteção florestal');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 3, 'Segurança no trabalho');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 3, 'Infra-estrutura do acampamento');

INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Macrozoneamento');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Delimitação e identificação da AMF,UPA e UT');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Inventário florestal 100%');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Corte de cipós');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Derruba');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Arraste');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Operações de pátio');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Transporte');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Silvicultura pós exploratória e monitoramento da AMF e do desenvolvimento da floresta');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Proteção florestal');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Segurança no trabalho');
INSERT INTO d12_nivel3_m (d12_cdempresa,d12_cdnivel1,d12_cdnivel2,d12_nmnivel3) VALUES (1, 1, 4, 'Infra-estrutura do acampamento');