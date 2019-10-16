CREATE TABLE d18_monitoramento (
	d18_cdmonitoramento BIGSERIAL,
	d18_cdempresa BIGINT,
	d18_nmmonitoramento VARCHAR(200),
	d18_cdtipoverificador BIGINT,
	d18_dtcriacao TIMESTAMP,
	d18_txlocal VARCHAR(200),

	PRIMARY KEY (d18_cdmonitoramento,d18_cdempresa),
	CONSTRAINT tipodevirificador_fk FOREIGN KEY (d18_cdtipoverificador) REFERENCES d02_tipo_verificador(d02_cdtipoverificador)
);

INSERT INTO d18_monitoramento(d18_cdempresa, d18_nmmonitoramento, d18_cdtipoverificador,d18_dtcriacao,d18_txlocal) VALUES('1','VISTORIA PARA SELO FSC','3','2007-07-26 08:38:46.000','FAZENDA CÓRREGO BRANCO');
INSERT INTO d18_monitoramento(d18_cdempresa, d18_nmmonitoramento, d18_cdtipoverificador,d18_dtcriacao,d18_txlocal) VALUES('1','APLICAÇÃO EXEMPLO','3','2007-07-30 10:07:10.000','LOCAL DA APLIAÇÃO EXEMPLO');
INSERT INTO d18_monitoramento(d18_cdempresa, d18_nmmonitoramento, d18_cdtipoverificador,d18_dtcriacao,d18_txlocal) VALUES('1','MONITORAMENTO PARA COMITE ITTO','1','2007-07-30 14:58:53.000','FAZENDA DA VISITA ITTO');
INSERT INTO d18_monitoramento(d18_cdempresa, d18_nmmonitoramento, d18_cdtipoverificador,d18_dtcriacao,d18_txlocal) VALUES('1','MONITORAMENTO PARA IFT','1','2007-07-30 15:40:27.000','FAZENDA DO MONIT PARA IFT');
INSERT INTO d18_monitoramento(d18_cdempresa, d18_nmmonitoramento, d18_cdtipoverificador,d18_dtcriacao,d18_txlocal) VALUES('1','MONITORAMENTO PARA EMBRAPA','1','2007-07-30 15:41:39.000','FAZ DO MONIT PARA EMBRAPA');