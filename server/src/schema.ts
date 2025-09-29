import gql from 'graphql-tag';

export const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    description: String
    category: String
    image: String
    rating: Rating
  }

  type Rating {
    rate: Float
    count: Int
  }

  type Query {
    products:[ Product!]!
  }
`;


export const resolvers = {
  Query: {
    products: async () => {
      const url = 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      }
      return await res.json()
    },
  },
};
