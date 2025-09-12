import {typeDefs} from "./schema";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {addMocksToSchema} from "@graphql-tools/mock";

const schema = makeExecutableSchema({typeDefs});


const mocks = {
  Product: () => ({
    id: `1`,
    title: 'Mock Product',
    price: 15.2,
    description: 'This is a mocked product description.',
    category: 'Electronics',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: {
      rate: 5,
      count: 3,
    },
  }),
};


export const schemaWithMocks = addMocksToSchema({schema, mocks});
