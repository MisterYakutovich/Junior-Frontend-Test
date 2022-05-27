import { BASKET_ROUTER,CLOTHES_ROUTER,PRODUCT_ROUTER, CART_OVERLAY_ROUTER, ALLPRODUCT_ROUTER,TECHNOLOGY_ROUTER } from "./utils/consts";
import Basket from "././pages/Basket/Basket";
import Product from "././pages/Product/Product";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import AllProduct from "./pages/AllProduct/AllProduct";
import Technology from "./pages/Technology/Technology";
import Clothes from "./pages/Clothes/Clothes";


export const publicRouter =[
    {
        path:BASKET_ROUTER,
        Element:Basket
    },
    {
        path:TECHNOLOGY_ROUTER,
        Element:Technology
    },
    {
        path:ALLPRODUCT_ROUTER,
        Element:AllProduct
    },
    {
        path:PRODUCT_ROUTER + "/:id",
        Element:Product
    },
    {
        path:CART_OVERLAY_ROUTER,
        Element:CartOverlay
    },
    {
        path:CLOTHES_ROUTER,
        Element:Clothes
    }
]