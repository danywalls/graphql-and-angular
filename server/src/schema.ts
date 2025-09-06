import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    products:[ Product!]!
  }
  type Product {
      productId: String!
      title: String!
      price: Int
      image: String
    }
`;
