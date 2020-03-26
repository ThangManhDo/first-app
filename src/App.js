import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
    this.setStateHandler  = this.setStateHandle.bind(this)
  };

  setStateHandle (){
    var item = "setState...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data:myArray})
  };

  render(){
    return(
      <div>
        <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      </div>
    )
  }
}

export default App;
