import React from "react";
import Header from "../../components/Header/Header";
import "../../pages/Technology/technology.css"
import { Context } from "../../context";
import CartOverlay from "../../components/CartOverlay/CartOverlay";
import Cart from "../../components/Cart/Cart";
import { withProductcart } from "../../hoc/withAddProductCart";
import { GET_TECHNOLOGIES } from "./technologies_query";
import {ApolloClient,InMemoryCache} from "@apollo/client";



class Technology extends React.Component{
    constructor(props){
        super(props)
        this.state={
         category:[],
         technologies:[]
        }
    
    }
    componentDidMount(){
      const client=new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache()
      })
         client
         .query({
            query: GET_TECHNOLOGIES                       
                   
         })                  
       .then(technologies=>{this.setState({
           technologies:technologies.data.category.products,
           loading:false
       },()=>{
          
       }
       )}
       )       
      
   }
      static contextType = Context
    render(){
      let {headerCategories}=this.context;
      const categories=headerCategories.map(i=>i.name)
      const {technologies}=this.state;     
      const {openOverlay,onClickCart,
            onCloseOverlay, addProduct,
            cartItem,deleteProdukt}=this.props;
            

    
    return(
        <div className="technology_conteiner">
             {/*{openOverlay &&<CartOverlay  arr={cartItem} 
                                          onCloseOverlay={onCloseOverlay}  
    deleteProdukt={deleteProdukt}/> }*/}

                             <Header onClickCart={onClickCart}
                                       arr={cartItem} 
                                       onCloseOverlay={onCloseOverlay} 
                                       deleteProdukt={deleteProdukt}
                                       openOverlay={openOverlay} />


                 <div className="content_grid">
                <div className="content_grid1">
                   <div className="title">
                      <h2 className="title_h">{categories[2]}</h2>
                   </div> 
                 { technologies.map((i,index)=>
                  <Cart name={i.name} 
                        gallery={i.gallery}
                        id={i.id}
                        key={index} 
                        prices={i.prices[0].amount} 
                        symbol={i.prices[0].currency.symbol}
                        addProduct={addProduct}
                      //  {...i}
                      />
                 )}
        </div>
        </div>
        </div>
    )
}
}
//export default withProductcart(Technology);
export default Technology;
