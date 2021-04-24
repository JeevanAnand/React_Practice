import React, { Component } from 'react'

class Counter extends Component {
    
    // state = {
    //     value: this.props.counter.value
    // };
    
    
    
    render() {
        
        // console.log("props",this.props) // every react component has the property called props and it is a plain JS object
        return (
            <div>
                {/* {this.props.children} */}
                <h4>{this.props.id}</h4>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm" disabled={this.props.counter.value===0 ? "disabled": ""}> 
                    -
                </button>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    +
                </button>
                {/* <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    X
                </button>
               
            </div>
                );
    }
    formatCount() {
        const { value } = this.props.counter;
        const x = <h1>Zero</h1>; 
        return value === 0 ? x : value;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;




