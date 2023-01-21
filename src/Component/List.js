import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <div className="list-group my-3" > {
            this.props.items.map((value,index)=>{
                return(
                    <React.Fragment key={index}> 
                    <div className="list-group-item border rounded shadow d-flex justify-content-between w-100 my-2">
                    <h5>{value}</h5> 
                    <button type="button" className="btn btn-danger" onClick={()=>{this.props.deleteItem(index)}}>Remove</button>
                    </div>
                    
                    </React.Fragment>
                )
            }
            )
        }
        
        </div>
        
        
    )
  }
}
