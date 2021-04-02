import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditPlant({plant}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [plantDetail, setPlantDetail] = useState({
    name: plant.name,
    description: plant.description,
    family: plant.family,
    kingdom: plant.kingdom,
    species: plant.species,
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updatePlantDetail = async (e) => {
    e.preventDefault()
    try {
      const body = {
        name: plantDetail.name, 
        description: plantDetail.description, 
        family: plantDetail.family,
        kingdom: plantDetail.kingdom,
        species: plantDetail.species,
      };
      const response = await axios(`http://localhost:${process.env.PORT}/plants/${plant.plant_id}`, {
        method: "PUT",
        url: '/',
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(body)
      });
      window.location = "/";
    } catch {
      console.log("errorrr");
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{backgroundColor:"white", color:"black", padding:"10px"}}>
          <div>
            <h1>Edit Plant Porfolio</h1>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-error-helper-text"
                label="Plant Name"
                type="text"
                value={plantDetail.name}
                onChange={(e) =>
                  setPlantDetail((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
              <TextField
                id="standard-error-helper-text"
                label="Plant Description"
                type="text"
                value={plantDetail.description}
                onChange={(e) =>
                  setPlantDetail((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
              <TextField
                id="standard-error-helper-text"
                label="Plant Family"
                type="url"
                value={plantDetail.family}
                onChange={(e) =>
                  setPlantDetail((prev) => ({
                    ...prev,
                    family: e.target.value,
                  }))
                }
              />
              <TextField
                id="standard-error-helper-text"
                label="Plant Kingdom"
                type="url"
                value={plantDetail.kingdom}
                onChange={(e) =>
                  setPlantDetail((prev) => ({
                    ...prev,
                    kingdom: e.target.value,
                  }))
                }
              />
              <TextField
                id="standard-error-helper-text"
                label="Plant Species"
                type="url"
                value={plantDetail.species}
                onChange={(e) =>
                  setPlantDetail((prev) => ({
                    ...prev,
                    species: e.target.value,
                  }))
                }
              />
              <Button variant="contained" color="primary" onClick={e => updatePlantDetail(e)}>Edit Plant</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
