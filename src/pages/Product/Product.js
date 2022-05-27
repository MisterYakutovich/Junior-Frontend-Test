import React from "react";
import Header  from "../../components/Header/Header";
import { gql} from "@apollo/client";
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client";
import "../../pages/Product/product.css"
import { useParams,useNavigate } from "react-router-dom";
import { Context } from "../../context";
import CartOverlay from "../../components/CartOverlay/CartOverlay";
import { graphql } from "react-apollo";
import CartItem from "../../components/CartItem/CartItem";
import { GET_PRODUCT_ID } from "./queryProduct";



function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={res:[],
        loading:false,
         productId:[]
        }

    }
 
  componentDidMount(){
    const client=new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache()
    })
    let { id } = this.props.params;
    
       client
       .query({
          query: gql`
          query {
              product(id :"${id}"){
                   name
                      inStock
                      gallery
                      description
                      category
                      id 
                      brand
                      attributes{id,name,type,items{
                        id,value,displayValue
                      }}
                 prices {
                        currency {
                          symbol
                          label
                        }
                        amount
                      }
              } 
          }`                    
                 
       })                  
     .then(productId=>{this.setState({
         productId:[productId.data.product],
         loading:false
     },()=>{
        
     }
     )}
     )       
    
 }
    static contextType = Context
        render(){ 
                      
    let {headerCategories}=this.context
     const {cartItem,openOverlay,
            addProduct,onClickCart,
            onCloseOverlay,deleteProdukt}=this.props;
     const {productId}=this.state;
    
        return(
            
            <div className="conteiner_product">    
            {openOverlay && <CartOverlay arr={cartItem} 
                                         productId={productId}
                                        onCloseOverlay={onCloseOverlay}  
                                        deleteProdukt={deleteProdukt} /> } 

                             <Header headerCategories={headerCategories}
                                         onClickCart={onClickCart}
                                         arr={cartItem}/>
                           {productId.map(i=>
                             <CartItem 
                                      key={i.id} 
                                      gallery={i.gallery}
                                      id={i.id}
                                      name={i.name} 
                                      prices={i.prices[0].amount} 
                                      symbol={i.prices[0].currency.symbol}
                                      cartItem={cartItem}
                                      addProduct={addProduct}
                                      description={i.description}
                                      />
                           )}
                                                            
            </div>
                       
        )
    }
}

  export default withParams(Product);