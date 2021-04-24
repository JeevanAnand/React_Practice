import './App.css';
import React,{Component} from 'react';
import NavBar from './components/NavBar';
import Counters from './components/counters';
class App extends Component {
  constructor(props)
    {
        super(props);
        console.log("app-constructor",this.props);
    }

  //this is called after the component is rendered into DOM,
  //this is a perfect place to make API calls and AJAX calls to get data from the server
    
    componentDidMount()
    {
      console.log('App-Didmount')
    }


    //componentDidUpdate()
    //This method is updated after the component is Updated
    //in below example we compare Old state with new State ,Old props with the new props,
    //if there is change we make a AJAX call 
    componentDidUpdate(prevProps,prevState)
    {
      console.log("prevProps",prevProps);
      console.log("prevSate",prevState);
     
    }

    //to clean up,cleanup timer,listner ,else we will end up in memory leaks.
    componentWillUnmount()
    {
      console.log('counter- Unmount');
    }

  state = { 
    counters: [
        { id: 1, value: 4 }, // suppose if we change the state to 4 this won't change
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
 };

 //recact will schedule a call with render method once it sees setState method , 
 //all the children elements will also get rendered.

 handleIncrement = counter => {
  //  console.log('Inside handleIncrement');
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] ={...counter};
counters[index].value++;
this.setState({counters});

  
}

handleDecrement = counter => {
  //  console.log('Inside handleIncrement');
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] ={...counter};
counters[index].value--;
this.setState({counters});

  
}

handleDelete = (counterId) => {
  // console.log('Event handler called', counterId);
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({counters:counters})
};

handleReset = () => {
   const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
   });
   this.setState({ counters:counters});
};
render()
{
  console.log("App-Component");
  return  (   
    <React.StrictMode >
    <main className = "conatiner" >
    <NavBar totalCount={this.state.counters.filter(c =>c.value > 0 ).length}/>
        <Counters
        counters = {this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        />
    </main> 
    </React.StrictMode > 
  );
}
}

export default App;
