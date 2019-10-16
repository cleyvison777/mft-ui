CREATE TABLE d20_nivel_avaliacao (

	d20_cdnivelavaliacao BIGSERIAL,	
	d20_nmnivelavaliacao VARCHAR(50),
	d20_sigla VARCHAR(20),
	d20_txdescricao VARCHAR(255),

	PRIMARY KEY (d20_cdnivelavaliacao)
		
);

INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Ação corretiva próxima safra','AC/PS', 'Providências relacionadas ao verificador que devem ser cumpridas até a próxima safra.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Ação corretiva urgente (60)','AC60', 'Providências relacionadas ao verificador que devem ser cumpridas em um prazo máximo de 60 dias.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Ação corretiva urgente (30)','AC30', 'Providências relacionadas ao verificador que devem ser cumpridas em um prazo máximo de 30 dias.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Sujeito a suspensão','SS', 'Não conformidade que implica em suspensão do PMFS.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Sujeito a cancelamento','SC', 'Não conformidades tão graves que implica em cancelamento do PMFS.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Recomendação','R', 'Recomendação relacionada à execução do PMFS, que não implica em ação corretiva ou sanção administrativa.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Nenhuma ação corretiva','NAC', 'O verificador foi atendido em sua totalidade, não sendo aplicável nenhuma ação corretiva ou sanção.');
INSERT INTO d20_nivel_avaliacao (d20_nmnivelavaliacao, d20_sigla, d20_txdescricao ) VALUES ('Não se aplica / Não avaliado','NA', 'O verificador não se aplica, no momento da vistoria, ou não foi avaliado.');