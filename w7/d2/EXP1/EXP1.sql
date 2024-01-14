SELECT * 
FROM items
ORDER BY item_price DESC

SELECT items_id, item_description, item_price
FROM items
WHERE item_price >= 80

SELECT customer_id, customer_firstname, customer_lastname
FROM customers
ORDER BY customer_firstname
LIMIT 3

SELECT customer_lastname
FROM customers
ORDER BY customer_lastname DESC