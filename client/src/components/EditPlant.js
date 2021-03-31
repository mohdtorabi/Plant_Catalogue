import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

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

export default function EditPlant() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
                // value={plantDetail.name}
                // onChange={(e) =>
                //   setPlantDetail((prev) => ({
                //     ...prev,
                //     name: e.target.value,
                //   }))
                // }
              />
              <TextField
                id="standard-error-helper-text"
                label="Plant Description"
                type="text"
                // value={plantDetail.description}
                // onChange={(e) =>
                //   setPlantDetail((prev) => ({
                //     ...prev,
                //     description: e.target.value,
                //   }))
                // }
              />
              <TextField
                id="standard-error-helper-text"
                label="Image URL"
                type="url"
                // value={plantDetail.image}
                // onChange={(e) =>
                //   setPlantDetail((prev) => ({
                //     ...prev,
                //     image: e.target.value,
                //   }))
                // }
              />
              <button>Edit Plant</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
