import {gql} from "@apollo/client";

export const GET_ALLPRODUCTS= gql `
query{
 
  category{
    products{
      id
      name
      brand
      gallery
      inStock
     
      prices{
        currency{
          symbol
          label
        }
        amount
      }
    }
  
   }     
  
     }`
    