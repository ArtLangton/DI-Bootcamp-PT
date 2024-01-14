SELECT 
    customer_id,
    store_id,
    first_name,
    last_name,
    email,
    address_id,
    activebool,
    create_date,
    last_update,
    active
FROM customer;

SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;

SELECT 
    customer_id,
    store_id,
    first_name,
    last_name,
    email,
    address_id,
    activebool,
    create_date,
    last_update,
    active
FROM customer
ORDER BY first_name DESC;

SELECT 
    film_id, 
    title, 
    description, 
    release_year, 
    rental_rate
FROM film
ORDER BY rental_rate;

SELECT 
    customer.first_name, 
    customer.last_name, 
    payment.amount,
    payment.payment_date
FROM 
    payment
INNER JOIN 
    customer ON payment.customer_id = customer.customer_id;

CREATE INDEX idx_district ON address(district);
CREATE INDEX idx_title ON film(title);
CREATE INDEX idx_country_id ON city(country_id);
CREATE INDEX idx_customer_id ON payment(customer_id);

SELECT 
    city.city, 
    country.country
FROM city
INNER JOIN country ON city.country_id = country.country_id
WHERE country.country = 'Israel'
ORDER BY country.country;

SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE LOWER(title) = LOWER('AFRICAN EGG');

SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE LOWER(title) LIKE LOWER('LO%');

SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate
FROM film
ORDER BY rental_rate
LIMIT 10
OFFSET 10;

SELECT 
    inventory.inventory_id,
    inventory.film_id,
    inventory.store_id,
    inventory.last_update
FROM inventory;

SELECT 
    film.film_id,
    film.title,
    film.description,
    film.length,
    film.rental_rate
FROM film
WHERE film.film_id NOT IN (SELECT film_id FROM inventory);

SELECT COUNT(1) 
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);
