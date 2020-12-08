import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const Client = () => {
  const client = new ApolloClient({
    uri: "https://api.graphql.jobs/",
  });
  return <ApolloProvider client={client}></ApolloProvider>;
};

export default Client;
