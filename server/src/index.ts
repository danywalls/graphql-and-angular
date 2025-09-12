import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {schemaWithMocks} from "./schema-mocks";


async function startApolloServer() {
  const server = new ApolloServer({
    schema: schemaWithMocks
  });
  const {url} = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running at ${url}
  `);
}

startApolloServer();
