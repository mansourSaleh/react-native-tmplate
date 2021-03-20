import React, { Component } from "react";


const DataContext = React.createContext();
class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
     test: "test 123",
    };
  }

 componentDidMount(){

 }
 

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          
        }}
      >
        {this.props.children}  
      </DataContext.Provider>
    );
  }
}
const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer, DataContext };
