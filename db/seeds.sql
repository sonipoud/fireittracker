INSERT INTO department (name)
VALUES
('Legal'),
('Engineering'),
('Sales'),
('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Legal team Lead', 95000, 1),
('Lawyer', 170000, 1),
('Lead Engineer', 120000, 2),
('Software Engineer', 150000, 2),
('Sales Lead', 30000, 3),
('Salesperson', 25000, 3),
('Accountant', 100000, 4);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Fraser', 1, NULL),
('Jack', 'London', 2, NULL),
('Robert', 'Bruce', 3, NULL),
('Peter', 'Greenaway', 4, NULL),
('Derek', 'Jarman', 5, NULL),
('Paolo', 'Pasolini', 6, NULL),
('Heathcote', 'Williams', 7, NULL),
('Sandy', 'Powell', 7, NULL),
('Emil', 'Zola', 6, NULL),
('Sissy', 'Coalpits', 5, NULL),
('Antoinette', 'Capet', 4, NULL),
('Samuel', 'Delany', 3, NULL),
('Tony', 'Duvert', 2, NULL),
('Dennis', 'Cooper', 1, NULL);