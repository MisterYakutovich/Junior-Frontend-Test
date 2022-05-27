import React from "react"


export const withProductcart=(Component)=>{
  return  class  extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:1,
                
            }
            this.addCount = this.addCount.bind(this);
            this.removeCount=this.removeCount.bind(this);
    
      }        
      addCount() {
        
         this.setState(state => ({
           count: state.count + 1
         })
         );
         
       }
       removeCount=()=> {
         this.setState(state => ({
           count: state.count - 1          
         }));
        
       }
     
    
     
        render(){
            
         const {count}=this.state
                
                return  <Component  
                                      count={count}
                                      addCount={this.addCount}
                                      removeCount={()=>this.removeCount()}
                                      
                                
                                    {...this.props}/>
              
            }                    
    }
   
}