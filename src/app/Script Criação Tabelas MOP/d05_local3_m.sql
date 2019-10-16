﻿CREATE TABLE d05_local3_m(
	d05_cdempresa BIGINT,
	d05_cdlocal1 BIGINT,
	d05_cdlocal2 BIGINT,
	d05_cdlocal3 BIGSERIAL,
	d05_nmlocal3 VARCHAR(200),

CONSTRAINT d05_local3_m_pk PRIMARY KEY (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3),

CONSTRAINT local3_empresa_fk FOREIGN KEY (d05_cdempresa, d05_cdlocal1, d05_cdlocal2) REFERENCES d04_local2_m(d04_cdempresa, d04_cdlocal1, d04_cdlocal2)
);

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','1','Árvores inventariadas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','2','Árvores inventariadas (fuste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','3','Árvores inventariadas (circunferência)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','4','Árvores inventariadas (altura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','5','Árvores inventariadas (espécies comuns)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','6','Árvores inventariadas (demais espécies)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','7','Árvores inventariadas (plaquetas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','8','Distância entre picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','9','Distância nas picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','10','Numeração das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','11','Direção das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','1','12','Microzoneamento UTs');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','1','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','2','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','3','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','4','Procedimentos (caminhos de fuga)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','5','Procedimentos (técnica de corte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','6','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','7','Procedimentos (corte de cipós)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','8','Toco (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','9','Árvore a explorar (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','10','Equipamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','1','2','11','Árvore explorada (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','1','Árvore explorada (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','2','Leito da trilha (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','3','Planejamento (trilha)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','4','Planejamento (arraste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','5','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','6','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','2','1','7','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','1','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','1','1','Leito (dimensões)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','1','2','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','1','3','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','1','4','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','2','1','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','3','1','Procedimentos (romaneio)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','3','2','Procedimentos (transporte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','3','3','3','Procedimentos (ATPF)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','4','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','4','1','1','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','4','1','2','Leito (resíduos)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','1','1','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','1','2','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','2','1','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','2','2','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','1','Delimitação UPA');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','2','Delimitação UMF');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','3','Bueiros');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','4','Pontes');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','5','3','5','Valetas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','1','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','1','1','Estabelecimento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','1','2','Dados');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','1','Fitossociologia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','2','Ecologia florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','3','Cobertura florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','4','Rendimento florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','5','Análise de danos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','6','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','7','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','8','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','6','2','9','Departamento pessoal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','1','Treinamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','2','Procedimentos (invasão)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','3','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','4','Procedimentos (combustíveis)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','5','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','1','6','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','1','Localização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','2','Dormitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','3','Refeitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','4','Cozinha');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','5','Sanitários');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','6','Procedimentos (lixo e resíduos)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','7','2','7','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','1','1','Organização/Planejamento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','1','2','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','1','3','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','1','Mapas (UPA)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','2','Mapas (UT)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','3','Mapas (infra-estrutura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','4','Mapas (árvores)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','5','Mapas (zoneamemto)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','6','Mapas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','7','Procedimentos (silvicultura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','8','2','8','Listagens ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','0','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','1','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','2','Infra-estrutura ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','3','Mão-de-obra e qualificação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','4','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','5','Saúde pública');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','6','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3)   VALUES ('1','9','1','7','Empresas locais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_cdlocal3, d05_nmlocal3) VALUES ('1','9','1','8','Ecologia regional');