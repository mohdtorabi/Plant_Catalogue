import React, {Fragment} from 'react';
import './App.css';
import CreatePlant from './components/CreatePlant';
import ListPlants from './components/ListPlants';


function App() {
  return (
      <Fragment>
        <CreatePlant/>
        <ListPlants/>
      </Fragment>
  );
}

export default App;
