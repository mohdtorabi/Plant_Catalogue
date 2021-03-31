import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  return (
    <div>
      <h1>Create a Plant Porfolio</h1>
      <form className={classes.root} noValidate autoComplete="off">
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
      </form>
    </div>
  );
};

export default CreatePlant;
