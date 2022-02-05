import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const createApolloClient = (token) => {
  const uri = 'https://api-graph.reachea.me/?token=' + token;

  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache()
  })

  return client
};

export default createApolloClient;