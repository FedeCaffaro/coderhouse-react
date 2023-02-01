import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar cartItemsCount={4}/>
      <ItemListContainer itemName={"Producto 1"} />
      <ItemListContainer itemName={"Producto 2"} />
      <ItemListContainer itemName={"Producto 3"} />
      <ItemListContainer itemName={"Producto 4"} />

    </div>
  );
};

export default App;
