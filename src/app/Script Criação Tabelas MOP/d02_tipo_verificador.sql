CREATE TABLE d02_tipo_verificador (
	d02_cdtipoverificador BIGSERIAL,
	d02_nmtipoverificador VARCHAR(200),
	d02_nrniveis INTEGER,
	d02_rotulonivel1 VARCHAR(200),
	d02_rotulonivel2 VARCHAR(200),
	d02_rotulonivel3 VARCHAR(200),
	d02_rotulonivel4 VARCHAR(200),
	d02_rotulonivel5 VARCHAR(200),
	
	PRIMARY KEY (d02_cdtipoverificador)
);

INSERT INTO d02_tipo_verificador (d02_cdtipoverificador, d02_nmtipoverificador, d02_nrniveis, d02_rotulonivel1, d02_rotulonivel2, d02_rotulonivel3, d02_rotulonivel4, d02_rotulonivel5) VALUES ('1','Monitoramento Operacional','4','-','ETAPA','ITEM','SUBITEM','VERIFICADOR');
INSERT INTO d02_tipo_verificador (d02_cdtipoverificador, d02_nmtipoverificador, d02_nrniveis, d02_rotulonivel1, d02_rotulonivel2, d02_rotulonivel3, d02_rotulonivel4, d02_rotulonivel5) VALUES ('2','Avaliação de impactos','3','-','-','ITEM','SUBITEM','VERIFICADOR');
INSERT INTO d02_tipo_verificador (d02_cdtipoverificador, d02_nmtipoverificador, d02_nrniveis, d02_rotulonivel1, d02_rotulonivel2, d02_rotulonivel3, d02_rotulonivel4, d02_rotulonivel5) VALUES ('3','Vistoria de PMFS','4','-','ETAPA','ITEM','SUBITEM','VERIFICADOR');
INSERT INTO d02_tipo_verificador (d02_cdtipoverificador, d02_nmtipoverificador, d02_nrniveis, d02_rotulonivel1, d02_rotulonivel2, d02_rotulonivel3, d02_rotulonivel4, d02_rotulonivel5) VALUES ('4','Certificação Florestal','4','-','ETAPA','ITEM','SUBITEM','VERIFICADOR');
INSERT INTO d02_tipo_verificador (d02_cdtipoverificador, d02_nmtipoverificador, d02_nrniveis, d02_rotulonivel1, d02_rotulonivel2, d02_rotulonivel3, d02_rotulonivel4, d02_rotulonivel5) VALUES ('5','Avaliação de sustentabilidade (pesquisa)','5','ASSUNTO','ETAPA','ITEM','SUBITEM','VERIFICADOR');