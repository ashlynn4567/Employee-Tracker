INSERT INTO departments 
    (name)
VALUES 
    ("Software Development"),
    ("Front Office"),
    ("Food and Beverage"),
    ("Housekeeping"),
    ("Sales"),
    ("Human Resources");

INSERT INTO roles
    (title, salary, department_id)
VALUES 
    ("Front-End Developer", 60000, 1),
    ("Back-End Developer", 60000, 1),
    ("Full-Stack Development Coordinator", 75000, 1),
    ("Director of Rooms", 50000, 2),
    ("Front Office Manager", 40000, 2),
    ("Front Desk Associate", 30000, 2),
    ("Director of Food and Beverage", 50000, 3),
    ("Restaurant Manager", 40000, 3),
    ("Cook", 35000, 3),
    ("Server", 30000, 3),
    ("Director of Style", 50000, 4),
    ("Housekeeping Supervisor", 40000, 4),
    ("Housekeeper", 30000, 4),
    ("Director of Sales", 50000, 5), 
    ("Assistant Director of Sales", 40000, 5),
    ("Sales Associate", 30000, 5),
    ("Director of Human Resources", 50000, 6), 
    ("Human Resources Associate", 35000, 6);

INSERT INTO employees
    (first_name, last_name, role_id, employee_id)
VALUES 
    ("Ashley", "Smith", 1, NULL),
    ("Shayne", "Georgeoff", 2, 1),
    ("Jenna", "Palmer", 3, 2),
    ("Jasmon", "Martin", 4, NULL),
    ("Ky", "Rudolph", 5, 1),
    ("Annie", "Robinson", 6, 5), 
    ("Joseph", "Williams", 6, 5),
    ("Elizabeth", "Klenke", 6, 5);
