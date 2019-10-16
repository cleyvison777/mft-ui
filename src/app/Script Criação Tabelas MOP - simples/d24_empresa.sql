CREATE TABLE d24_empresa (
	d24_cdempresa BIGSERIAL,
	d24_nmempresa VARCHAR(100),
	d24_nmabreviado VARCHAR(20),
	d24_nrtelefone VARCHAR(100),
	d24_enderecocompleto VARCHAR(100),
	d24_txpessoacontato VARCHAR(100),
	d24_cnpjempresa VARCHAR(50),
	d24_diretorioarquivos VARCHAR(255),
	
	PRIMARY KEY (d24_cdempresa)
	
	
);

INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('EMPRESA EXEMPLO','EXEMPLO','','','','','databases');
INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('QoS 2','Q','ASDS','32224455','QoS','Q','ASDS');
INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('QoS 3','Q','ASDS','32224455','QoS','Q','ASDS');
INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('QoS 4','Q','ASDS','32224455','QoS','Q','ASDS');
INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('QoS 5','Q','ASDS','32224455','QoS','Q','ASDS');
INSERT INTO d24_empresa (d24_nmempresa, d24_nmabreviado, d24_nrtelefone, d24_enderecocompleto, d24_txpessoacontato, d24_cnpjempresa, d24_diretorioarquivos) VALUES ('QoS 6','Q','ASDS','32224455','QoS','Q','ASDS');

