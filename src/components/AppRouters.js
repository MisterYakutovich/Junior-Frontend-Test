import React from "react";
import { publicRouter } from "../routes";
import {Routes,Route,Navigate} from "react-router-dom";
import { ALLPRODUCT_ROUTER } from "../utils/consts";



class AppRoutes extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    const {openOverlay,onClickCart,onCloseOverlay,addProduct,cartItem,deleteProdukt}=this.props

    return(
        <Routes>
            {publicRouter.map(({path,Element})=>
            <Route key ={path} path={path} element = {<Element openOverlay={openOverlay}
                                                               onClickCart={onClickCart}
                                                               onCloseOverlay={onCloseOverlay} 
                                                               addProduct={addProduct}
                                                               cartItem={cartItem}
                                                               deleteProdukt={deleteProdukt}
                                                               />} /> )}
   
            <Route  path = "*"  element={<Navigate to = {ALLPRODUCT_ROUTER}/>}/>
        </Routes>

    )
}
}
export default AppRoutes