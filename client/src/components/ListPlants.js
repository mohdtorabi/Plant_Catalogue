import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListPlants = () => {
  const classes = useStyles();
  const [plants, setPlants] = useState([])


  const getPlants = async () => {
    return await axios("http://localhost:5000/plants")
      .then((res) => {
        setPlants(res.data)
      })
      .catch((e) => {
        console.log("error listing plants", e);
      })
  }

  const deletePlant = async (id) => {
    return await axios(`http://localhost:5000/plants/${id}`, {
      method: "DELETE"
    })
      .then((plantDeleted) => {
        console.log(plantDeleted.body);
      })
      .catch((e) => {
        console.log("error listing plants", e);
      })
  }

  useEffect(() => {
    getPlants()
  })


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plants.map((row) => (
            <TableRow key={row.plant_id}>
              <TableCell component="th" scope="row">
                {row.plant_id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right"><button>Edit</button></TableCell>
              <TableCell align="right"><button onClick={()=> deletePlant(row.plant_id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default ListPlants;