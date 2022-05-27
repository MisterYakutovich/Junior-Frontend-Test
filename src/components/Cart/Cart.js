import React from "react";
import { Context } from "../../context";
import { PRODUCT_ROUTER } from "../../utils/consts";
import {withRouter} from "../../hoc/withRouter"



class Cart extends React.Component{
   constructor(props){
      super(props)  
      
      this.state={isAdd:false }
     
      this.onClickPlus = this.onClickPlus.bind(this);
      this.withnav=this.withnav.bind(this);
   }
   withnav()
   {
       this.props.navigate(PRODUCT_ROUTER + "/" + this.props.id)
   }
  
    onClickPlus=()=>{
      
      const {id,name,gallery,prices,addProduct,symbol,attributesID, attributesItems} = this.props
      this.setState({isAdd:true})
      
       addProduct({name,gallery,prices,id,symbol,attributesID, attributesItems})
    
   }
   static contextType = Context;
   render(){
    
      
      let {cartCategory} = this.context;
    
    
    return(

      <div className="card">
      <div  onClick={this.withnav}> 
    
        <img 
             className="card_img"  
             src={this.props.gallery} 
             alt=""></img>
             
      </div>
      <div >
        <img onClick={ this.onClickPlus} 
             className="add_to_cart" 
             src="/img/circle_icon.png">{this.addProduct}</img>
      </div>
         <div className="product_list">
           <h2 >{this.props.name}</h2>                               
           <b>{this.props.symbol} {this.props.prices}</b>
           


              
         </div> 
                                        
   </div> 

)
}
}

export default withRouter (Cart);