CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');
	
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES
    (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
    (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
	
SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

SELECT COUNT(*) AS NotLoggedInCustomers
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;


CREATE TABLE Book(
	book_id SERIAL PRIMARY KEY,
	title varchar(150) NOT NULL,
	author varchar(150) NOT NULL
);

INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

SELECT * FROM Book;

CREATE TABLE Student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	age INT CHECK (AGE <= 15)
);

INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE Library (
	book_fk_id INT,
	student_fk_id INT,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
VALUES
(
  (SELECT book_id FROM Book WHERE title= 'Alice In Wonderland'),
  (SELECT student_id FROM Student where name = 'John'),
  '2022-02-15'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
VALUES
(
  (SELECT book_id FROM Book WHERE title= 'To kill a mockingbird'),
  (SELECT student_id FROM Student where name = 'Bob'),
  '2021-03-03'
),
(
  (SELECT book_id FROM Book WHERE title= 'Alice In Wonderland'),
  (SELECT student_id FROM Student where name = 'Lera'),
  '2021-03-03'
),
(
  (SELECT book_id FROM Book WHERE title= 'Harry Potter'),
  (SELECT student_id FROM Student where name = 'Bob'),
  '2021-08-12'
);

SELECT * FROM Library;

SELECT s.name, b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) AS AVG_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_Id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE student_id = 2;
SELECT * FROM Library;
