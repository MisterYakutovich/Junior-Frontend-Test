import {gql} from "@apollo/client";

export const GET_SYMBOL_CURRENCIES=gql `
query{             
  currencies{
      symbol,
    label
  }              
        
  }`
  