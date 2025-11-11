### **Question:**
Write an SQL query to create a table named `menuitems` with the following structure:
- `item_id` INT as **Primary Key**
- `item_name` VARCHAR with **UNIQUE** constraint
- `price` NOT NULL
- `category` VARCHAR(30)

### **Answer:**

```sql
CREATE TABLE menuitems (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(30)
);
