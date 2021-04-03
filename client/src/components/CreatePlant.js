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
    family: "",
    kingdom: "",
    species: "",
  })

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {
        name: plantDetail.name, 
        description: plantDetail.description, 
        family: plantDetail.family,
        kingdom: plantDetail.kingdom,
        species: plantDetail.species,
      };
      const response = await axios("/api/plants", {
        method: "POST",
        url: '/',
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(body)
      });
      window.location = "/"
    } catch {
      console.log("errorrr");
    }
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
          label="Plant Family"
          type="text"
          value={plantDetail.family}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            family: e.target.value,
          }))}
        />
        <TextField
          id="standard-error-helper-text"
          label="Plant Kingdom"
          type="url"
          value={plantDetail.kingdom}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            kingdom: e.target.value,
          }))}
        />
        <TextField
          id="standard-error-helper-text"
          label="Plant Species"
          type="url"
          value={plantDetail.species}
          onChange={e => setPlantDetail((prev) => ({
            ...prev,
            species: e.target.value,
          }))}
        />
        <button style={{direction:"flex", justifyContent:"flex-end",marginTop:"20px",fontSize:"0.875em", color: "white", backgroundColor:"#3f51b5", boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)", padding:"6px 16px", borderRadius:"4px", boxSizing:"border-box", cursor:"pointer" }}>
          Create Plant
        </button>
      </form>
      
    </div>
  );
};

export default CreatePlant;
