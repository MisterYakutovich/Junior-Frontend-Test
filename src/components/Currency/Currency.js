import React from "react";
import "../../components/Currency/currency.css";
import { GET_SYMBOL_CURRENCIES } from "./symbol_currencies_query";
import {ApolloClient,InMemoryCache} from "@apollo/client";


class Currency extends React.Component{
    constructor(props){
        super(props)
        this.state={  
            currencies:[],         
        }       

this.myRef = React.createRef();
this.handlClickOutSide=this.handlClickOutSide.bind(this);

    }
    handlClickOutSide=(e)=>{    
       if(this.myRef.current && !this.myRef.current.contains(e.target)){
            this.props.toggleVisibleCurrency && this.props.toggleVisibleCurrency()     
        } 
     }
    
    componentDidMount(){
        document.body.addEventListener("click",this.handlClickOutSide,true)
      //  const header=document.querySelector(".overlay_drawer_currency")
        const client=new ApolloClient({
            uri: "http://localhost:4000/graphql",
            cache: new InMemoryCache()
          })
          client
          .query({
             query: GET_SYMBOL_CURRENCIES                       
                    
          })                  
        .then(currencies=>{this.setState({
            currencies:currencies.data.currencies,
            loading:false
        },()=>{           
        }
        )}
        )   
              
    }
    componentWillUnmount(){
           document.body.removeEventListener("click",this.handlClickOutSide,true)
    }
    render(){
        const {currencies}=this.state;
        const {onSelectedItem,isActiv}=this.props   
        const isActivLabel=currencies[this.props.isActiv]     
        
        return(
         
            <div   className="overlay_currency">       
               <div  ref={this.myRef} className="overlay_drawer_currency">  
                  <div className="items_currency">       
                                    {currencies.map((i,index)=>(
                        <ul >
                            <li                          
                               className= {isActiv===i ? "active_label_index": "active_label_item"}
                               onClick={()=>onSelectedItem(i.symbol)} 
                               key={`${index}_${i.label}`} > {i.label}</li>
                             
                             <li className={isActiv===i ? "active_symbol_index" : "active_symbol_item"}
                                 onClick={()=>onSelectedItem(i.symbol)} 
                                 key={`${index}_${i.symbol}`}>{i.symbol}</li>
                                                   
                        </ul>
                   ))}                              
                <div>                
            </div> 
       </div>        
     </div>             
 </div>
    
            
        )
    }
}
export default Currency;