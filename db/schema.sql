DROP DATABASE IF EXISTS aviatrix_blog_db;

CREATE DATABASE aviatrix_blog_db;

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  instagram VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO blogs (title, description, body, instagram) VALUES 
