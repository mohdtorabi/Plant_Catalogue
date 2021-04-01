CREATE DATABASE Plant_Catalogue;


DROP TABLE plant IF EXISTS;


CREATE TABLE plant(
  plant_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  family VARCHAR(255),
  kingdom VARCHAR(255),
  species VARCHAR(255)
);