import React from "react";
import "../../pages/Clothes/clothes.css"
import Header from "../../components/Header/Header";
import { Context } from "../../context";
import Cart from "../../components/Cart/Cart";
import { GET_CLOTHES } from "./clothes_query";
import {ApolloClient,InMemoryCache} from "@apollo/client";


class Clothes extends React.Component{
    constructor(props){
        super(props)
        this.state={ clothers:[],
                     loading:false
    }               }
   
    componentDidMount(){
        const client=new ApolloClient({
            uri: "http://localhost:4000/graphql",
            cache: new InMemoryCache()
          })
          client
          .query({
             query: GET_CLOTHES                        
                    
          })                  
        .then(clothers=>{this.setState({
            clothers:clothers.data.category.products,
            loading:false
        },()=>{
           
        }
        )}
        )       
       
    }
    static contextType = Context;
    render(){
      
      
    let {headerCategories}=this.context;
    const categories=headerCategories.map(i=>i.name)
    const {openOverlay,onClickCart,onCloseOverlay,
           addProduct,cartItem,deleteProdukt}=this.props;
           const {clothers}=this.state
       
clothers.map(i=>console.log(i.attributes))
console.log(clothers)
    return(
       
    <div className="conteiner_clothes">
    
           {/*{openOverlay &&<CartOverlay 
                                       arr={cartItem} 
                                       onCloseOverlay={onCloseOverlay}  
           deleteProdukt={deleteProdukt}/> }*/}
                            
                            <Header onClickCart={onClickCart}
                                     arr={cartItem}
                                     onCloseOverlay={onCloseOverlay}
                                     openOverlay ={openOverlay }
                                     deleteProdukt={deleteProdukt} />


           <div className="content_grid">
                <div className="content_grid1">
                   <div className="title">
                      <h2 className="title_h">{categories[1]}</h2>
                   </div> 
                   { clothers.map(i=>
                         <Cart name={i.name} 
                               gallery={i.gallery}
                               id={i.id}
                               key={i.id} 
                               prices={i.prices[0].amount} 
                               symbol={i.prices[0].currency.symbol}
                               attributesID={i.attributes[0].id}
                               attributesItems={i.attributes[0].items}
                               addProduct={addProduct}/>
                 )}
                </div>
            </div>
        </div>
    )
}
}

export default Clothes;