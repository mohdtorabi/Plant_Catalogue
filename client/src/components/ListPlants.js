import React, {Fragment, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import EditPlant from "./EditPlant";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListPlants = () => {
  const classes = useStyles();
  const [plants, setPlants] = useState([])

  // listing all plants by calling backend on app visit
  const getPlants = async () => {
    return await axios("/api/plants")
      .then((res) => {
        setPlants(res.data)
      })
      .catch((e) => {
        console.log("error listing plants", e);
      })
  }
  // making call to backend to delete a plant on button click
  const deletePlant = async (id) => {
    return await axios(`/api/plants/${id}`, {
      method: "DELETE"
    })
      .then((plantDeleted) => {
        setPlants(plants.filter(plant => plant.plant_id !== id))
      })
      .catch((e) => {
        console.log("error listing plants", e);
      })
  }


  

  useEffect(() => {
    getPlants()
  },[])

  if (plants) {
    return (
      <Fragment>
        <h1>Plant Catalogue</h1>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Family</TableCell>
              <TableCell align="center">Kingdom</TableCell>
              <TableCell align="center">Species</TableCell>
              <TableCell align="Center">Edit Plant</TableCell>
              <TableCell align="Center">Delete Plant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plants.map((plant) => (
              <TableRow key={plant.plant_id}>
                <TableCell component="th" scope="row">
                  {plant.plant_id}
                </TableCell>
                <TableCell align="center">{plant.name}</TableCell>
                <TableCell align="center">{plant.description}</TableCell>
                <TableCell align="center">{plant.family}</TableCell>
                <TableCell align="center">{plant.kingdom}</TableCell>
                <TableCell align="center">{plant.species}</TableCell>
                <TableCell align="center"><EditPlant plant={plant}/></TableCell>
                <TableCell align="center"><Button onClick={()=> deletePlant(plant.plant_id)} variant="contained" color="secondary">
                Delete
        </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Fragment>
      
    );
  } else {
    return <div>no plants</div>
  }
  
}


export default ListPlants;