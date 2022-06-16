INSERT INTO department
    (name)
VALUES 
    ("Product Management"),
    ("Front-End Development"),
    ("Back-End Development"),
    ("Full-Stack Development");

INSERT INTO role
    (title, salary, department_id)
VALUES 
    ("Product Owner", 130000, 1),
    ("Project Manager", 120000, 1),
    ("Team Lead", 110000, 1),
    ("Tech Lead", 110000, 1),
    ("QA Lead", 110000, 1),
    ("QA Engineer", 110000, 1),
    ("UI Designer", 90000, 2),
    ("Front-End Developer", 80000, 2),
    ("UX Designer", 90000, 3),
    ("Back-End Developer", 80000, 3),
    ("Full-Stack Developer", 100000, 4),
    ("Database Specialist", 80000, 4),
    ("Tester", 80000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Taliah", "Daniels", 1, NULL),
    ("Aeryn", "Santos", 1, 1),
    ("Bo", "Henry", 1, 2),
    ("Casper", "Cisneros", 1, 2),
    ("Sarah", "Kirkpatrick", 1, 2),
    ("Emir", "Huber", 1, 2),
    ("Kaelan", "Felix", 2, 3),
    ("Darian", "Hunter", 2, 3),
    ("Vernon", "Walls", 3, 4),
    ("Mary", "Winter", 3, 4),
    ("Iman", "Barnes", 4, 3),
    ("Erica", "Sinclair", 4, 4),
    ("Tanvir", "Gibbs", 4, 4);

