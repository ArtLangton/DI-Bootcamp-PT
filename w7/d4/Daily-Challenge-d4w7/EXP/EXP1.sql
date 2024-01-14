SELECT * FROM language;

SELECT * FROM film;

SELECT
    f.title AS film_title,
    f.description,
    l.name AS language_name
FROM
    film f
INNER JOIN
    language l ON f.language_id = l.language_id;

SELECT
    f.title AS film_title,
    f.description,
    l.name AS language_name
FROM
    language l
LEFT JOIN
    film f ON l.language_id = f.language_id;

CREATE TABLE new_film (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (id, name) VALUES
(1, 'New Film 1'),
(2, 'New Film 2'),
(3, 'New Film 3');

SELECT * FROM new_film;

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10) NOT NULL,
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM customer_review;

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'What an amazing Movie!', 9, 'I really liked it. This film is very talented.'),
    (2, 2, 'Bad Movie', 7, 'The movie was horrible. It had some good moments, but I regret wasting my time');

SELECT * FROM customer_review WHERE film_id = 1;

DELETE FROM new_film WHERE id = 1;
