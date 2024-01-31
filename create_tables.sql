CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE weight_goals (
  id SERIAL PRIMARY KEY,
  user_id INT,
  goal_weight DECIMAL,
  FOREIGN KEY (user_id) REFERENCES admin(id)
);

CREATE TABLE exercise_log (
  id SERIAL PRIMARY KEY,
  user_id INT,
  exercise_name VARCHAR(255),
  duration_minutes INT,
  date DATE,
  FOREIGN KEY (user_id) REFERENCES admin(id)
);