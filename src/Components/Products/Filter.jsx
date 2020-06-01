import React, { Component } from 'react'



class Filter extends Component {
 state = {}
 render() {
  return(
   <div className="row">
       <div className="col-md=4">
           {this.props.count} products found
       </div>
       <div className="col-md=4">
           <label >
             <select className="form-control" value={this.props.sort}
             onChange={this.props.handleChangeSort}>
                 <option value="">Select</option>
                 <option value="LowesttoHighest">Lowest to Highest</option>
                 <option value="HighestToLowest">Highest to Lowest</option>
            </select>  
           </label>
       </div>
       <div className="col-md=4"></div>

   </div>
    )
   }
 }


export default Filter