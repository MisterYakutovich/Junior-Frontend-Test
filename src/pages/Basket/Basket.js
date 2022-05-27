import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import { Context } from "../../context";
import "../../pages/Basket/basket.css"
import { withProductcart } from "../../hoc/withAddProductCart";



class Basket extends React.Component{
  constructor(props){
    super(props)
   
  }
  
  handleClick = (item) => {
    
    if (this.props.count>1){
        
          this.props.removeCount()
          
    }
       else if(this.props.count<=1 ) {
           this.props.deleteProdukt(item)
    }  
}
    static contextType = Context
   
  
    render(){
        let {headerCategories}=this.context
        const {cartItem}=this.props;
        
        
    return(
        <div className="conteiner_basket_basket">
          <div className="conteiner_basket">
            <Header  headerCategories={headerCategories}
                     arr={cartItem}
                     addCount={this.addCount}
                     removeCount={this.removeCount}
                     count={this.props.count}/>
              <div className="cart">Cart</div>        
              <div className="restangle_35"></div>
              <div className="items_basket">
                 {cartItem.map(i=>
                    <div key={i.id} className="group_1"> 
                       <div className="group_product">
                          <div className="product_name">{i.name}</div>
              <div className="price">{i.symbol}{i.prices}</div>
              <div className="size_basket">size:</div>
              <div className="size_1">
              <button>XS</button>
              </div>
        <div className="size_2">
          <button>S</button>
        </div>
        <div className="size_3">
          <button>M</button>
        </div>
        <div className="size_4">
          <button>L</button>
        </div>
        <div className="color_basket">
                     <span>color:</span>
        </div>
        <div className="color_basket_0">
          <button></button>
        </div>
        <div className="color_basket_1">
          <button></button>
         
         
        </div>
        <div className="color_basket_2">
          <button></button>
        </div>
        </div>
        <div className="group_2"> 
           <button onClick={this.props.addCount} className="add_product">+</button>
           <button onClick={()=>this.handleClick(i.id)} className="remove_product">-</button>
              <div className="counter_basket">{this.props.count}</div>
            
                <img src="/img/vector_slide.png" className="slide_gallary"  ></img>
               
                   <div
                   
                    className="img" >
                   <Slider 
                           gallery={i.gallery} />
                 </div>
                 
                   </div>
                   
                   </div>
                 )}
                
                 </div>
                 <div className="group_total_tax_quantity">
                  <ul>
                <li>
                  <span>Tax 21%:</span>
                  <div></div>
                  <b>50 руб. </b>
                </li>
                <li>
                  <span>Quantity: 3</span>
                  <div></div>
                  <b>50 руб. </b>
                </li> 
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>50 руб. </b>
                </li>         
                </ul>
              <button className="order">ORDER</button>          
           </div>  
        </div>
        
        </div>
    )
}
}
export default withProductcart(Basket);
