import React from "react";
import "../../pages/AllProduct/all_product.css";
import Cart from "../../components/Cart/Cart";
import  Header from "../../components/Header/Header"
import {Context} from "../../context";
import {ApolloClient,InMemoryCache} from "@apollo/client";
import { withProductcart } from "../../hoc/withAddProductCart";
import { GET_ALLPRODUCTS } from "./products_query";



class AllProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:[],
            allProducts:[]
        }
         
    }
    componentDidMount(){
        const client=new ApolloClient({
          uri: "http://localhost:4000/graphql",
          cache: new InMemoryCache()
        })
           client
           .query({
              query: GET_ALLPRODUCTS                     
                     
           })                  
         .then(allProducts=>{this.setState({
             allProducts:allProducts.data.category.products,
             loading:false
         },()=>{
            
         }
         )}
         )       
        
     }  
 static contextType = Context;
 
 render(){
    let {headerCategories} = this.context;
    const categories=headerCategories.map(i=>i.name)
    const {allProducts}=this.state;
    const {openOverlay,onClickCart,
          onCloseOverlay,addProduct,
          cartItem,deleteProdukt}=this.props;
    return(
  
       <div className="conteiner">

                                        
          <Header onClickCart={onClickCart}
                  arr={cartItem} 
                  onCloseOverlay={onCloseOverlay}
                  deleteProdukt={deleteProdukt}
                  openOverlay= {openOverlay}
                  />
                   
          
             <div className="content_grid">
                <div className="content_grid1">
                   <div className="title">
                      <h2 className="title_h">{categories[0]}</h2>
                   </div>    
                      
                 
                 {allProducts.map(i=>
                      <Cart key={i.id} 
                            
                            gallery={i.gallery}
                            id={i.id}
                            name={i.name} 
                            prices={i.prices[0].amount} 
                            symbol={i.prices[0].currency.symbol}
                            cartItem={cartItem}
                            addProduct={addProduct}/>                      
                  )}                                     
                </div>         
            </div>       
        </div>
               
    )
}
}

//export default withProductcart(AllProduct);
export default AllProduct;
