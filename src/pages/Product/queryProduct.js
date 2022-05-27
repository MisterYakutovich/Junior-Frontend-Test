import {gql} from "@apollo/client";


export const GET_PRODUCT_ID=gql`
query {
    product(id :""){
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