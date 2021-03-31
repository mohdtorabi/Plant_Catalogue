import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const CreatePlant = () => {
  const classes = useStyles();
  const [plantDetail, setPlantDetail] = useState({
    name: "",
    description: "",
    image: ""
  })

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {
        name: plantDetail.name, 
        description: plantDetail.description, 
        image: plantDetail.image
      };
      const response = await axios("http://localhost:5000/plants", {
        method: "POST",
        url: '/login',
        data: JSON.stringify(body)
      });
      console.log(response);
    } catch {
      console.log("errorrr");
    }
    // return await axios.post("http://localhost:5000/plants/")
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.log("Plant Creation Error: ", error);
    //     });
  }

  return (
    <div>
      <h1>Create a Plant Porfolio</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitForm}>
      <TextField
          id="standard-error-helper-text"
          label="Plant Name"
          type="text"
          value={plantDetail.name}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            name: e.target.value,
          }))}
        />
        <TextField
          id="standard-error-helper-text"
          label="Plant Description"
          type="text"
          value={plantDetail.description}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            description: e.target.value,
          }))}
        />
        <TextField
          id="standard-error-helper-text"
          label="Image URL"
          type="url"
          value={plantDetail.image}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            image: e.target.value,
          }))}
        />
        <button>
          Submit Plant
        </button>
      </form>
      
    </div>
  );
};

export default CreatePlant;
