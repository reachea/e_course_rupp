import {
  ApolloProvider,
} from "@apollo/client";
import { useMemo } from "react";
import createApolloClient from "../libs/createApolloClient";
import { useAuthContext } from "./AuthContext";

export default function ApolloContextProvider(props) {
  const { token } = useAuthContext();
  const client = useMemo(() => createApolloClient(token), [token])

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}