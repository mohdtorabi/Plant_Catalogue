const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
  user: "torabi97",
  password: "12345",
  host: "localhost",
  port: 5432,
  database: "plant_catalogue"
});

module.exports = pool;