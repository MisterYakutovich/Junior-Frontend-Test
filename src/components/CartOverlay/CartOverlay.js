import React from "react";
import { NavLink } from "react-router-dom";
import "../../components/CartOverlay/cartOverlay.css"
import { BASKET_ROUTER } from "../../utils/consts";
import { withProductcart } from "../../hoc/withAddProductCart";


class CartOverlay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],           
        }
        
        this.myRef=React.createRef()
        this.handleClick= this.handleClick.bind(this)  
        this.handlClickOutSide=this.handlClickOutSide.bind(this)
    }   

      handleClick = (item) => {
    
    if (this.props.count>1){
        
          this.props.removeCount()
          
    }
       else if(this.props.count<=1 ) {
           this.props.deleteProdukt(item)
    }  
}
handlClickOutSide=(e)=>{    
  if(this.myRef.current && !this.myRef.current.contains(e.target)){
      this.props.onCloseOverlay && this.props.onCloseOverlay()     
  } 
 }
componentDidMount(){
  document.body.addEventListener("click",this.handlClickOutSide,true)
}
componentWillUnmount(){
  document.body.removeEventListener("click",this.handlClickOutSide,true)
}
render(){
    const {arr,onCloseOverlay,openOverlay,productId}=this.props
    const totalPrices= arr.reduce((sum,obj)=>obj.prices+sum,0)
console.log(arr)

    return(
                       
        <div className="overlay">
         
            <div  ref={this.myRef} className="overlay_drawer">        
                <div className="my_bag">
                     <h4>My Bag, {arr.length} items</h4>
                     <img onClick={onCloseOverlay} src="img/btn-remove.svg" alt="Close" />
                         </div>
                         <div className="items">
                        {arr.length>0 ?
                    <div>
                  {arr.map((obj)=>
                <div key={obj.id} className="group_cart_item">
              <div className="title_bag">
                  <h3>{obj.name}</h3></div>
                       <b className="price_overly_bag">
                         {obj.symbol}{obj.prices}
                        </b>
                        <span className="size_overlay_bag_item">{/*{obj.attributesID}*/}size:</span>
                  <div className="size_overly_XS">
                     <button>{/*{obj.attributesItems[0].value}*/}</button>
                  </div>
                  
                  <div className="size_overly_S">
                     <button>{/*{obj.attributesItems[1].value}*/}</button>
                  </div>  
                  <div className="size_overly_M">
                     <button>{/*{obj.attributesItems[2].value}*/}</button>
                  </div>   
                  <div className="size_overly_L">
                     <button>{/*{obj.attributesItems[3].value}*/}</button>
                  </div> 
                  <div className="color_cart_overly">
                     <span>color:</span>
                  </div>
                  <div className="color_cart_overlay_white">
                      <button></button>
                  </div>    
                  <div className="color_cart_overlay_black">
                      <button></button>
                  </div>  
                  <div className="color_cart_overlay_green">
                      <button></button>
                  </div>         
                  <div className="img_product">                      
                          <img className="img_overlay"
                                width={105}
                                height={190} 
                                src={obj.gallery} alt=""></img>
                      <button   className="remove_button"
            
                                onClick={()=>this.handleClick(obj.id)} >-</button>
                       <button  className="add_button"
                                onClick={this.props.addCount}>+</button>                            
                          <div  className="counter">{this.props.count}</div>                                                                                                                     
                      </div>
                  </div>    
                           
                )}
       </div>
      :
       <div ><img className="empty_basket" src="/img/empty-cart.png"></img></div>
         }  </div>      
           <div className="group_total_check">
               <ul>
                   <li>
                       <span>Total</span>
                       
                       <b>{totalPrices.toFixed(2)}</b>                  
                   </li>
               </ul>               
               <NavLink to={BASKET_ROUTER}>  <button  className="view_bag">View bag</button> </NavLink>
              <button className="check_out">CHECK OUT</button>          
           </div>         
          </div>
    </div>

    )
}
}
export default withProductcart(CartOverlay);
//export default CartOverlay;