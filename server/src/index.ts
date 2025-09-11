import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";


const mocks = {
  Product: () => ({
      productId: () => "01",
      title: () => 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: () => 25,
      image: () => 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png'
    }
  )
}


async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema(
      {
        schema: makeExecutableSchema({
          typeDefs
        }),
        mocks
      }
    )
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running at ${url}
  `);
}
startApolloServer();
