import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    
   
    render() { 
        console.log("counters-render");
        const{onReset,onDecrement,onIncrement,onDelete,counters}=this.props;//destructuring
       
        return ( 
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>

            { counters.map(counter => 
            <Counter 
                key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter = {counter}
            />
            )}
            
        </div> );
    }
}
 
export default Counters;