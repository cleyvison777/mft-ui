CREATE TABLE d14_template(
	d14_cdtemplate BIGSERIAL,
	d14_nmtemplate VARCHAR(200),
	d14_cdtipoverificador BIGINT,

PRIMARY KEY(d14_cdtemplate)
);

INSERT INTO d14_template(d14_nmtemplate, d14_cdtipoverificador) VALUES('MODELO DE VISTORIA DE PMFS','3');
INSERT INTO d14_template(d14_nmtemplate, d14_cdtipoverificador) VALUES('MODELO DE CERTIFICAÇÃO FLORESTAL','4');
INSERT INTO d14_template(d14_nmtemplate, d14_cdtipoverificador) VALUES('MODELO DE MONITORAMENTO OPERACIONAL','1');
INSERT INTO d14_template(d14_nmtemplate, d14_cdtipoverificador) VALUES('MODELO DE AVALIAÇÃO DE SUSTENTABILIDADE','5');
INSERT INTO d14_template(d14_nmtemplate, d14_cdtipoverificador) VALUES('MODELO DE AVALIAÇÃO DE IMPACTOS','2');