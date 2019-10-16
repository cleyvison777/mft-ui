CREATE TABLE d19_avaliacao(
	d19_cdempresa BIGINT,
	d19_cdmonitoramento BIGINT,
	d19_cdavaliacao BIGINT,
	d19_nmavaliacao VARCHAR(200),
	d19_dtinicio TIMESTAMP,
	d19_dtfim TIMESTAMP,



PRIMARY KEY (d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao),
CONSTRAINT monitoramento_fk FOREIGN KEY(d19_cdmonitoramento,d19_cdempresa) REFERENCES d18_monitoramento(d18_cdmonitoramento,d18_cdempresa)

);


INSERT INTO d19_avaliacao(d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao,d19_nmavaliacao,d19_dtinicio,d19_dtfim) VALUES ('1','1','1','AVALIAÇÃO INICIAL','2007-07-01 00:00:00.000','2007-08-31 00:00:00.000');
INSERT INTO d19_avaliacao(d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao,d19_nmavaliacao,d19_dtinicio,d19_dtfim) VALUES ('1','1','2','SEGUNDA AVALIAÇÃO','2007-07-13 00:00:00.000','2007-08-31 00:00:00.000');
INSERT INTO d19_avaliacao(d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao,d19_nmavaliacao,d19_dtinicio,d19_dtfim) VALUES ('1','2','2','SEGUNDA AVALIAÇÃO DA APLICAÇÃO EXEMPLO','2007-07-01 00:00:00.000','2007-08-31 00:00:00.000');
INSERT INTO d19_avaliacao(d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao,d19_nmavaliacao,d19_dtinicio,d19_dtfim) VALUES ('1','2','3','TERCEIRA AVALIAÇÃO APLICAÇÃO EXEMPLO','2007-07-01 00:00:00.000','2007-08-31 00:00:00.000');
INSERT INTO d19_avaliacao(d19_cdempresa,d19_cdmonitoramento,d19_cdavaliacao,d19_nmavaliacao,d19_dtinicio,d19_dtfim) VALUES ('1','2','4','QUARTA AVALIAÇÃO APLICAÇÃO EXEMPLO','2007-07-01 00:00:00.000','2007-08-31 00:00:00.000');