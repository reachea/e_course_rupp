import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const createApolloClient = (token) => {
  const uri = 'http://e-course-rupp-graph.production.reachea.me/?token=' + token;

  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache()
  })

  return client
};

export default createApolloClient;