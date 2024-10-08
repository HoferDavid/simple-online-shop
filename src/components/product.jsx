import React, { Component } from 'react';

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={"/assets/img/" + this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <button onClick={this.props.onAdd} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
