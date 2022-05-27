import {gql} from "@apollo/client";


export const GET_TECHNOLOGIES=gql `
query {
    category(input: { title: "tech" }) {
      products {
        id
        name
        brand
        gallery
        inStock
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
    }
  }`