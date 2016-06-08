SELECT							DML DDL DCL
FROM
WHERE
ORDER BY
GROUP BY
JOIN
INSERT INTO
UPDATE
DELETE
HAVING
IN
BETWEEN

SELECT column, anotheColumn
FROM database.table;
WHERE Salary > 50000;

SELECT *
FROM Employee
WHERE LastName = 'Green';
 
 > < >= <= <>

SELECT *
FROM Employee
WHERE Department IN ('Marketing', 'Sales');

WHERE Department = 'Marketing' OR Department = 'Sales';

WHERE LastName LIKE 'Green%'; //wildcard
WHERE LastName LIKE 'Sm_th';

WHERE MiddleInitial = NULL;
WHERE MiddleInitial IS NULL;
WHERE MiddleInitial IS NOT NULL;


SELECT Description, ListPrice, Color
FROM Product;
ORDER BY ListPrice DESC;

SELECT *
FROM Employee
WHERE Salary > 50000
ORDER BY LastName, FirstName;

SELECT COUNT(*)
FROM Employee
WHERE Salary > 50000;

SELECT *
FROM Product
ORDER BY ListPrice DESC;

SELECT MAX(ListPrice) // MIN AVG
FROM Product;

SELECT SUM(TotalDue)
FROM Order 
WHERE CustomerID = 854;

SELECT COUNT(*)
FROM Product
WHERE Color = 'Red';

SELECT COUNT(*), Color
FROM Product
GROUP BY Color;




SELECT FirstName, LastName, HireDate, Employee.DepartmentID , Name, Location
FROM Employee INNER JOIN Department
ON Employee.DepartmentID = Department.DepartmentID



SELECT FirstName, LastName, HireDate, Employee.DepartmentID , Name, Location
FROM Employee LEFT OUTER JOIN Department
ON Employee.DepartmentID = Department.DepartmentID



SELECT FirstName, LastName, HireDate, Employee.DepartmentID , Name, Location
FROM Employee RIGHT OUTER JOIN Department
ON Employee.DepartmentID = Department.DepartmentID



C   INSERT
R   SELECT
U   UPDATE
D   DELETE

INSERT INTO Employee (FirstName, LastName, Department, Salary)
VALUES ('Joe', 'Allen', 'Sales', 45000);

UPDATE Employee
SET Email = 'jues@hphphph.net'
WHERE EmployeeID = 734;

DELETE FROM Employee
WHERE EmployeeID = 734;



Data Manilulation Language 
SELECT
INSERT
UPDATE
DELETE

Data Definition Language
CREATE TABLE
ALTER TABLE
DROP TABLE

Data Control Language
GRANT
REVOKE

CREATE (EmployeeID INTEGER PRIMARY KEY,
FirstName VARCHAR(35) NOT NULL,
LastName VARCHAR(100) NOT NULL,
Department VARCHAR(30) NULL,
Salary INTEGER
);

ALTER TABLE Employee
Add Email VARCHAR(100);



DROP TABLE Employee;


















