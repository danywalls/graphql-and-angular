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

// Resolvers to fetch data from the Fake Store REST API
export const resolvers = {
  Query: {
    products: async () => {
      const url = 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      }
      const data = (await res.json()) as any[];
      // The API already matches the GraphQL schema shape, so return as-is
      return data;
    },
  },
};
