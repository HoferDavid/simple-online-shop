import React, { Component } from 'react';
import Product from './components/product';
import Navbar from './components/navbar';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
  state = {
    items: [],
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItems = this.state.items.find(item => item.name == name);
    if (existingItems) {
      existingItems.amount++;
    } else {
      currentItems.push({
        amount,
        name,
        price,
      });
    }

    this.setState({ items: currentItems });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="main-container">
          <div className="product-container">
            <Product
              onAdd={() => this.addItem(1, 'Strawberries', 4.9)}
              title="Strawberries"
              img="strawberries.jpg"
              description="Add Strawberries to your basket"
            />
            <Product
              onAdd={() => this.addItem(1, 'Apples', 1.9)}
              title="Apples"
              img="apples.jpg"
              description="Add Apples to your basket"
            />
            <Product
              onAdd={() => this.addItem(1, 'Mangos', 10.9)}
              title="Mangos"
              img="mangos.jpg"
              description="Add Mangos to your basket"
            />
            {/* <Product
              title="Blueberries"
              img="blueberries.jpg"
              description="Add Blueberries to your basket"
            /> */}
            {/* <Product
              title="Bananas"
              img="bananas.jpg"
              description="Add Bananas to your basket"
            /> */}
          </div>

          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
