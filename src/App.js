import React from 'react';
import './App.css';

class OutputField extends React.Component {
  constructor (props){
    super(props);
    this.state = { name: '',
  shoppingList: [] }

  }
handleText (event){
this.setState({name: event.target.value});

}
handleClick (){
  const newShoppingList = this.state.shoppingList.slice();
  newShoppingList.push(this.state.name);
  this.setState ({shoppingList: newShoppingList});
}
  render () { 
    return (
      <div>
      
         <input type = "text" value= {this.state.name} onChange = {(event) => this.handleText(event)} /> 
         <button className ="button" onClick ={() => this.handleClick()}>
          Submit
        </button>
        <h2> text: {this.state.shoppingList}</h2>
      </div>
      
    );

  }
  
}
//salmeen

export default OutputField;
