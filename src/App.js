import React from "react"
import AppRoutes from "./components/AppRouters";
import {ApolloClient,InMemoryCache,gql} from "@apollo/client";
import { Context } from "./context";
import { BrowserRouter } from "react-router-dom";
import CartItem from "./components/CartItem/CartItem";




   class App extends React.Component{
     constructor(){
       super()
       this.state={
         headerCategories:[],
         openOverlay:false,
         cartItem:[],
       }
       
     }
     onOpenOverlay=()=>{
      this.setState({openOverlay:true})
     }
     closeOverlay=()=>{
      this.setState({openOverlay:false})
  }
     addProductCart=(obj)=>{
       let isCartItem=false;
       this.state.cartItem.forEach(el=>{
         if (el.id===obj.id)
           isCartItem=true       
       })
       if (!isCartItem)
    this.setState(state=>({cartItem:[...state.cartItem,obj]}))
}
     removeProductCart=(id)=>{
    this.setState(state=>({cartItem:state.cartItem.filter((item) => item.id !==id)}))   
 }
     componentDidMount(){
      const client=new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache()
      })
         client
         .query({
            query: gql `
            query{             
                categories{
                    name
                }              
            }`                               
                   
         })                  
       .then(headerCategories=>{this.setState({
           headerCategories:headerCategories.data.categories,
           loading:false
       },()=>{
         
       }
       
       )}
       
       )       
      
   }
     render(){
      
   const {headerCategories}=this.state;
   
  return (
   
    <Context.Provider value={{headerCategories}}>
  <BrowserRouter>
  
  <AppRoutes   onClickCart={()=>this.onOpenOverlay()}
              openOverlay={this.state.openOverlay}
              onCloseOverlay={this.closeOverlay} 
              cartItem={this.state.cartItem}
              addProduct={(obj)=>this.addProductCart(obj)}
              deleteProdukt={this.removeProductCart}
              />  
              
  </BrowserRouter>
  </Context.Provider>
  
)
}
}
          
export default App;


