CREATE DATABASE Plant_Catalogue;

CREATE TABLE plant(
  plant_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  image VARCHAR(255)
);