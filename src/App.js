import React, { Component } from 'react';
import './App.css';

import ListArea from './components/list';
import CaptureForm from './components/captureForm';

class App extends Component {
    constructor(props) {
      super(props);
      this.state =  {
        listArray: [],
        selectedItem:{}
      };
    }

  createIdea = (ideaObj) => {
    var data =  this.state.listArray;
    console.log(data)
    data.push(ideaObj);
    this.setState({listArray:data});
  }  
  render() {
    return (
      <div className="container-fluid">
        <header>
          Grab your IDEA Before it Lost
        </header>
        <div className="row">
          <div className="col-md-4">
            <ListArea listArray={this.state.listArray} onSelectItem={ item => this.setState({selectedItem: item}) } />
          </div>
          <div className="col-md-8">
            <CaptureForm item={this.state.selectedItem}  captureCreateIdea={capture => this.createIdea(capture)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
