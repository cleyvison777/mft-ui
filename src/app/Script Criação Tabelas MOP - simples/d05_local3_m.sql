CREATE TABLE d05_local3_m(
	d05_cdempresa BIGINT,
	d05_cdlocal1 BIGINT,
	d05_cdlocal2 BIGINT,
	d05_cdlocal3 BIGSERIAL,
	d05_nmlocal3 VARCHAR(200),

PRIMARY KEY (d05_cdlocal3),
CONSTRAINT local1_fk FOREIGN KEY (d05_cdlocal1) REFERENCES d03_local1_m(d03_cdlocal1),
CONSTRAINT local3_empresa_fk FOREIGN KEY (d05_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT local2_fk FOREIGN KEY (d05_cdlocal2) REFERENCES d04_local2_m(d04_cdlocal2)
);

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (geral)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Distância entre picadas');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Distância nas picadas');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Numeração das picadas');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Direção das picadas');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (fuste)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (espécies comuns)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (demais espécies)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (circunferência)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (altura)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Etiquetas nas árvores (informações)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Etiquetas nas árvores (durabilidade)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Árvores inventariadas (localização)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 2, 'Microzoneamento UTs');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Equipe (EPIs)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Equipe (geral)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Procedimentos (caminhos de fuga)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Toco (altura)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Procedimentos (técnica de corte)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Procedimentos (segurança)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Árvore a explorar (teste do oco)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Equipamentos ');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Procedimentos (corte de cipós)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Equipe (uso de mapas)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 1, 3, 'Árvore explorada (tora/galhada)');



INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Árvore explorada (tora/galhada)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Equipe (EPIs)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Leito da trilha (geral)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Planejamento (trilha)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Planejamento (arraste)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Leito da trilha (árvores pivô)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Equipe (uso de mapas)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 2, 5, 'Equipamentos');



INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 7, 'Leito (dimensões)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 7, 'Árvore explorada');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 7, 'Equipe (EPIs)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 7, 'Equipamentos');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 5, 'Leito (margens)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 9, 'Procedimentos (romaneio)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 9, 'Procedimentos (transporte)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 3, 9, 'Procedimentos (ATPF)');


INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 4, 11, 'Árvore explorada');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 4, 11, 'Leito (resíduos)');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 13, 'Leito');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 13, 'Margens');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 14, 'Leito');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 14, 'Margens');


INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 15, 'Delimitação UPA');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 15, 'Delimitação AMF');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 15, 'Bueiros');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 15, 'Pontes');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 5, 15, 'Valetas');


INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 17, 'Estabelecimento');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 17, 'Dados');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Fitossociologia');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Ecologia florestal');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Cobertura florestal');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Rendimento florestal');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Análise de danos');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Economia');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Política/legislação');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 6, 18, 'Organização');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Treinamentos');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Procedimentos (invasão)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Equipe (geral)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Procedimentos (combustíveis)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Procedimentos (segurança)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 20, 'Equipamentos');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Localização');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Dormitórios');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Refeitórios');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Cozinha');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Sanitários');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Procedimentos (lixo e resíduos)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 7, 21, 'Equipamentos');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 23, 'Organização');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 23, 'Economia');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 23, 'Política/legislação');


INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (UPA)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (UT)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (infra-estrutura)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (árvores)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Procedimentos (silvicultura)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (macrozoneamemto)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Mapas (geral)');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 8, 24, 'Listagens ');

INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Organização');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Infra-estrutura ');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Mão-de-obra e qualificação');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26,  'Política/legislação');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Saúde pública');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Economia');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Empresas locais');
INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) VALUES(1, 9, 26, 'Ecologia regional');