CREATE TABLE d08_frequencia_m(
	d08_cdfrequencia BIGSERIAL,
	d08_cdempresa BIGINT,
	d08_nmfrequencia VARCHAR(200),

PRIMARY KEY (d08_cdfrequencia),
CONSTRAINT empresa_fk FOREIGN KEY (d08_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Uma vez por ano, na época da safra');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Duas vezes por ano, na época da safra');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Uma vez por ano, fora da época da safra');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Duas vezes por ano, fora da época da safra');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Mensalmente');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Trimestralmente');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Semestralmente');
INSERT INTO d08_frequencia_m (d08_cdempresa, d08_nmfrequencia) VALUES('1', 'Aleatória, por demanda ou exigência da legislação');
