const express = require("express");
const app =express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create Plant

app.post("/plants", async(req, res) => {
  try {
    console.log(req.body);
    const {name, description, image} = req.body;
    const newPlant = await pool.query("INSERT INTO plant (name, description, image) VALUES($1, $2, $3)", [name, description, image]);
  } catch (error) {
    console.log(
      error.message
    );
  }
})

//get all plants
app.get("/plants", async(req, res) => {
  try {
    const allPlants = await pool.query("SELECT * FROM plant")
    res.json(allPlants.rows)
  } catch (error){
    console.log(error.message);
  }
})
//get a plant
app.get("/plants/:id", async(req, res) => {
  try {
    const plant = await pool.query("SELECT * FROM plant WHERE plant_id= $1", [req.params.id])
    res.json(plant.rows)
  } catch (error){
    console.log(error.message);
  }
})
//update a plant

//delete a plant


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
