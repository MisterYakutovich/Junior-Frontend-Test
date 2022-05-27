import React from "react";
import { NavLink } from "react-router-dom";
import { ALLPRODUCT_ROUTER } from "../../utils/consts";


class CartItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
                
        }
        
    }
    
   
    onClickPlus=()=>{
        const {name,addProduct,gallery,prices,id,symbol,attributesID, attributesItem} = this.props
     
         addProduct({name,gallery,prices,id,symbol,attributesID, attributesItem})
       
     }
    render(){
   const {name,gallery,prices,symbol,description}=this.props
   
        return(
          //  productId.map(i=>
<>

            <div className="product_color">
               
                
            <div className="product_color_items">
            
                <img src={gallery} alt=""></img>
               
                   
            </div>
    
        </div>
              
        <div className="product_to_cart">
        
            <img src={gallery} alt=""></img>

        
               <div className="group_block_product">
               
                   <h3> {name}</h3>
               
                       <div className="block_size">                      
                       <button className="size_one">XS</button>
                       <button className="size_two">S</button>
                       <button className="size_three"></button>
                       <button className="size_four"></button>                        
                </div>
                
                <h4>PRICE:</h4>
                
                <b>{symbol}{prices}</b>
                <NavLink to ={ALLPRODUCT_ROUTER} > <button className="product_to_cart_add_to_cart"
                           onClick={this.onClickPlus}> ADD TO CART 
            {this.addProduct} </button></NavLink>
             
                <div className="description">           
                {description}
         
                </div>
              
            </div>
            
            </div>

          </>  
            ) 
      //  )
     
    }
}
export default CartItem;