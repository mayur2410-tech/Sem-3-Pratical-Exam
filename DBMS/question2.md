### **Question:**

1) Insert three menu items
### **Answer:**
```sql
INSERT INTO menuitems (item_id, item_name, price, category) VALUES
(1, 'Burger', 120.00, 'Fast Food'),
(2, 'Pizza', 350.00, 'Fast Food'),
(3, 'Pasta', 220.00, 'Italian');

```
2) Update the price of any items
### **Answer:**
```sql
UPDATE menuitems
SET price = 150.00
WHERE item_id = 2;


```
3) Delete one item using item_id 
### **Answer:**
```sql
DELETE FROM menuitems
WHERE item_id = 1;
```
4) Find average price of all items
### **Answer:**
```sql
SELECT AVG(price) AS average_price
FROM menuitems;

```
5) Find the Sum of all prices
### **Answer:**
```sql
SELECT SUM(price) AS total_price
FROM menuitems;


```
