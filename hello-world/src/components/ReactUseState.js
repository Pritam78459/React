import React, {useState} from 'react';
import up from '../up.png';
import down from '../down.png';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          milk: 10,
          biscuits: 15,
          fruit_juice : 12,
        };

      }

      render() {
        return (
          <div>
            <p>Milk Quantity : {this.state.milk} </p>
            <button onClick={() => this.setState({ milk: this.state.milk + 1 })}>
              <img style={{width:30}} src = {up}/>
            </button>
            <button onClick={() => this.setState({ milk: this.state.milk - 1 })}>
              <img style={{width:30}} src = {down}/>
            </button>
            <hr></hr>
            <p>Biscuits Quantity : {this.state.biscuits} </p>
            <button onClick={() => this.setState({ biscuits: this.state.biscuits + 1 })}>
              <img style={{width:30}} src = {up}/>
            </button>
            <button onClick={() => this.setState({ biscuits: this.state.biscuits - 1 })}>
              <img style={{width:30}} src = {down}/>
            </button>
            <hr></hr>
            <p>Fruit Juice Quantity : {this.state.fruit_juice} </p>
            <button onClick={() => this.setState({ fruit_juice: this.state.fruit_juice + 1 })}>
              <img style={{width:30}} src = {up}/>
            </button>
            <button onClick={() => this.setState({ fruit_juice: this.state.fruit_juice - 1 })}>
              <img style={{width:30}} src = {down}/>
            </button>
            <hr></hr>
          </div>
        );
      }
}

export default ShoppingList;