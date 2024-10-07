import React, { Component } from 'react';
import Product from './components/product';
import Navbar from './components/navbar';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="product-container">
          <Product
            title="Strawberries"
            img="strawberries.jpg"
            description="Add Strawberries to your basket"
          />
          <Product
            title="Apples"
            img="apples.jpg"
            description="Add Apples to your basket"
          />
          <Product
            title="Mangos"
            img="mangos.jpg"
            description="Add Mangos to your basket"
          />
          <Product
            title="Blueberries"
            img="blueberries.jpg"
            description="Add Blueberries to your basket"
          />
          <Product
            title="Bananas"
            img="bananas.jpg"
            description="Add Bananas to your basket"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
