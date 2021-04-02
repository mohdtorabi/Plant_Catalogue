const express = require("express");
const app =express();
const cors = require("cors");
const pool = require("./db");
const path = require('path');
require('dotenv').config();

const port = process.env.PORT ? process.env.PORT : 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));


//ROUTES//

//create Plant

app.post("/plants", async (req, res) => {
  try {
    console.log(req.body);
    const {name, description, family, kingdom, species} = req.body;
    const newPlant = await pool.query("INSERT INTO plant (name, description, family, kingdom, species) VALUES($1, $2, $3, $4, $5)", [name, description, family, kingdom, species]);
    res.json(newPlant)
  } catch (error) {
    console.log(
      error.message
    );
  }
})

//get all plants


app.get("/plants", async(req, res) => {
  try {
    const allPlants = await pool.query("SELECT * FROM plant;")
    res.json(allPlants.rows)
  } catch (error){
    console.log(error.message);
  }
})
//get a plant
app.get("/plants/:id", async(req, res) => {
  try {
    const { id } = req.body
    const plant = await pool.query("SELECT * FROM plant WHERE plant_id= $1", [id])
    res.json(plant.rows)
  } catch (error){
    console.log(error.message);
  }
})
//update a plant
app.put("/plants/:id", async(req, res) => {
  try {
    console.log(req.body);
    const {id} = req.params;
    const {name, description, family, kingdom, species} = req.body;

    const updateNamePlant = await pool.query("UPDATE plant SET name = $1 WHERE plant_id = $2", [name, id]);
    const updateDescriptionPlant = await pool.query("UPDATE plant SET description = $1 WHERE plant_id = $2", [description, id]);
    const updateFamilyPlant = await pool.query("UPDATE plant SET family = $1 WHERE plant_id = $2", [family, id]);
    const updateKingdomPlant = await pool.query("UPDATE plant SET kingdom = $1 WHERE plant_id = $2", [kingdom, id]);
    const updateSpeciesPlant = await pool.query("UPDATE plant SET species = $1 WHERE plant_id = $2", [species, id]);

    res.json("plant was updated")
  } catch (error) {
    console.log(
      error.message
    );
  }
})

//delete a plant
app.delete("/plants/:id", async(req, res) => {
  try {
    const { id } = req.params
    console.log(id);
    const deletePlant = await pool.query("DELETE FROM plant WHERE plant_id= $1", [id]);
    res.json("plant was deleted")
  } catch (error){
    console.log(error.message);
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
