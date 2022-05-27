import {gql} from "@apollo/client";


export const GET_CLOTHES= gql `

query {
  category(input: { title: "clothes" }) {
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
     