
INSERT INTO test (titulo) VALUES 
('Test de Cultura General'),
('Test de Matemáticas'),
('Test de Historia');

INSERT INTO pregunta (pregunta, resp1, resp2, resp3, resp4, num_respuestas, resp_correcta, test_id) VALUES 
('¿Cuál es la capital de Francia?', 'Madrid', 'París', 'Berlín', 'Londres', 4, 2, 1),
('¿Cuánto es 5 x 6?', '11', '30', '20', '25', 4, 2, 2),
('¿Quién descubrió América?', 'Napoleón', 'Colón', 'Einstein', 'Newton', 4, 2, 3);
