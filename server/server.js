const express = require("express");
const app =express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.unsubscribe(express.json());

//ROUTES//

//create Plant

app.post("/plants", async(req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(
      error.message
    );
  }
})

//get all plants

//get a plant

//update a plant

//delete a plant


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
